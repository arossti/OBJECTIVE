4011-MobileDetect.js:113 Desktop device detected
4012-Section02.js:1679 S02: Target defaults set from field definitions - single source of truth
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 ✅ S02: Header controls injected successfully
 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Refreshing UI for TARGET mode
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_13 (service life) slider = "50" (target mode)
 [S02] Updated h_15 = "1,427.20" (target mode)
 [S02] Updated i_17 = "8154" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: Target defaults set from field definitions - single source of truth
 S03: Reference defaults set from field definitions - single source of truth
 S03: Header controls setup complete
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 S12: Section rendered - initializing Pattern A Dual-State Module.
 [S12 REF DEFAULTS] Published ref_d_103=1 to StateManager
 [S12 REF DEFAULTS] Published ref_g_103=Exposed to StateManager
 [S12 REF DEFAULTS] Published ref_d_105=8200.00 to StateManager
 [S12 REF DEFAULTS] Published ref_d_108=MEASURED to StateManager
 [S12 REF DEFAULTS] Published ref_g_109=2.00 to StateManager
 S12: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S12] ✅ CLIMATE LISTENERS ADDED - Ready for d_20/d_21 changes
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_102
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1500
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1506
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1677
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_102
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1678
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1286
calculateWWR @ 4012-Section12.js:1705
calculateTargetModel @ 4012-Section12.js:2423
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1286
calculateWWR @ 4012-Section12.js:1712
calculateTargetModel @ 4012-Section12.js:2423
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1800
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2059
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2071
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: h_102
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2083
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_102
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2089
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_102
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2095
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_102
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2101
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2256
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_102
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2257
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2258
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2259
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
onSectionRendered @ 4012-Section12.js:2656
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 S12: Pattern A initialization complete.
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=0
 [S12DB] REF CLIMATE: d_20=4600, d_21=0, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2496 S03: Self-Contained State Module initialization complete
4012-Section05.js:103 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:767 S06: Pattern A initialization complete.
 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1071
calculateAll @ 4012-Section07.js:1114
onSectionRendered @ 4012-Section07.js:1516
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:707 [S08] S04 listeners setup complete
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:50 S09: Target defaults loaded from field definitions
4012-Section09.js:139 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:533 S09: Header controls injected successfully
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] Setting up S10 area listeners...
 [S11] ✅ S10 area listeners registered for both modes
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
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
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:2266 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
 [S11 REF DEFAULTS] Published ref_f_85=5.3 to StateManager
 [S11 REF DEFAULTS] Published ref_f_86=4.1 to StateManager
 [S11 REF DEFAULTS] Published ref_f_87=6.6 to StateManager
 [S11 REF DEFAULTS] Published ref_f_94=1.8 to StateManager
 [S11 REF DEFAULTS] Published ref_f_95=3.5 to StateManager
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_88=1.99 to StateManager
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_89=1.42 to StateManager
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_90=1.42 to StateManager
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_91=1.42 to StateManager
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_92=1.42 to StateManager
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_93=1.42 to StateManager
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S11] Setting up S10 area listeners...
 [S11] ✅ S10 area listeners registered for both modes
 S11: ModeManager exposed globally for cross-section integration.
 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] DUAL-STATE SYNC - populating BOTH Target and Reference states
 [S11 Area Sync] Reason: d_88=undefined, ref_d_73 in StateManager=7.50
 [S11 Area Sync] d_88 REFERENCE = 7.50
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_89 REFERENCE = 81.14
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_90 REFERENCE = 3.83
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_91 REFERENCE = 159.00
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_92 REFERENCE = 100.66
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_93 REFERENCE = 0.00
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
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
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_97 changed.
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_98 changed.
 [S11 Area Sync] Sync completed successfully
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2803 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency m_121 changed.
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 S14: Pattern A initialization complete.
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15: Header controls injected successfully
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:1900 [S02] Refreshing UI for TARGET mode
4012-Section02.js:1958 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
4012-Section02.js:1975 [S02] Updated h_13 (service life) slider = "50" (target mode)
4012-Section02.js:2025 [S02] Updated h_15 = "1,427.20" (target mode)
4012-Section02.js:2025 [S02] Updated i_17 = "8154" (target mode)
4012-Section02.js:2025 [S02] Updated l_12 = "$0.1300" (target mode)
4012-Section02.js:2025 [S02] Updated l_13 = "$0.5070" (target mode)
4012-Section02.js:2025 [S02] Updated l_14 = "$1.6200" (target mode)
4012-Section02.js:2025 [S02] Updated l_15 = "$180.00" (target mode)
4012-Section02.js:2025 [S02] Updated l_16 = "$1.5000" (target mode)
4012-Section03.js:2276 S03: Sliders initialized via FieldManager
4012-Section03.js:2451 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:2465 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:487 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:495 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2437 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2276 S03: Sliders initialized via FieldManager
4012-Section03.js:1170 Section03: Province selected: ON
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1905 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2045 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2496 S03: Self-Contained State Module initialization complete
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization starting...
 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔄 [S06] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization complete.
 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1071
calculateAll @ 4012-Section07.js:1114
onSectionRendered @ 4012-Section07.js:1516
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:707 [S08] S04 listeners setup complete
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
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
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2266 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1292 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1829
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
onSectionRendered @ 4012-Section15.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1170 Section03: Province selected: ON
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Refreshing UI for TARGET mode
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_13 (service life) slider = "50" (target mode)
 [S02] Updated h_15 = "1,427.20" (target mode)
 [S02] Updated i_17 = "8154" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization starting...
 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔄 [S06] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization complete.
 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
 🔧 [S07] TargetState.setDefaults: Initializing from FieldDefinitions
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
4012-Section07.js:53 ✅ [S07] TargetState.setDefaults: d_49="User Defined", d_51="Heatpump"
4012-Section07.js:61 🌐 [S07] TargetState.setDefaults: Published to StateManager
4012-Section07.js:106 🔧 [S07] ReferenceState.setDefaults: Initializing Reference-specific defaults
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:112 ✅ [S07] ReferenceState.setDefaults: d_49="User Defined", d_51="Electric", d_52="90"
4012-Section07.js:133 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1071
calculateAll @ 4012-Section07.js:1114
onSectionRendered @ 4012-Section07.js:1516
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:707 [S08] S04 listeners setup complete
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
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
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2266 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2266 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2803 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency m_121 changed.
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1829
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
onSectionRendered @ 4012-Section15.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [ReferenceToggle] Master Reference Toggle initialization complete
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Refreshing UI for TARGET mode
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_13 (service life) slider = "50" (target mode)
 [S02] Updated h_15 = "1,427.20" (target mode)
 [S02] Updated i_17 = "8154" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
4012-Section02.js:2025 [S02] Updated l_16 = "$1.5000" (target mode)
4012-Section03.js:2276 S03: Sliders initialized via FieldManager
4012-Section03.js:2451 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:2465 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:487 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:495 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2437 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2276 S03: Sliders initialized via FieldManager
4012-Section03.js:1170 Section03: Province selected: ON
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1905 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2045 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2496 S03: Self-Contained State Module initialization complete
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔄 [S06] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization complete.
 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1071
calculateAll @ 4012-Section07.js:1114
onSectionRendered @ 4012-Section07.js:1516
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:707 [S08] S04 listeners setup complete
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
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
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2266 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1292 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1829
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
onSectionRendered @ 4012-Section15.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
(anonymous) @ index.html:1067Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Refreshing UI for TARGET mode
 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
 [S02] Updated h_13 (service life) slider = "50" (target mode)
 [S02] Updated h_15 = "1,427.20" (target mode)
 [S02] Updated i_17 = "8154" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing Self-Contained State Module.
 S03: ModeManager exposed globally for cross-section integration.
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
 S03: Synced province "ON" to StateManager for cross-section communication
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:767 S06: Pattern A initialization complete.
4012-Section07.js:1497 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
4012-Section07.js:48 🔧 [S07] TargetState.setDefaults: Initializing from FieldDefinitions
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
4012-Section07.js:53 ✅ [S07] TargetState.setDefaults: d_49="User Defined", d_51="Heatpump"
4012-Section07.js:61 🌐 [S07] TargetState.setDefaults: Published to StateManager
4012-Section07.js:106 🔧 [S07] ReferenceState.setDefaults: Initializing Reference-specific defaults
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:112 ✅ [S07] ReferenceState.setDefaults: d_49="User Defined", d_51="Electric", d_52="90"
4012-Section07.js:133 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1071
calculateAll @ 4012-Section07.js:1114
onSectionRendered @ 4012-Section07.js:1516
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:707 [S08] S04 listeners setup complete
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
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
 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_88 = 7.50 (from d_73)
 [S11 Area Sync] d_89 = 81.14 (from d_74)
 [S11 Area Sync] d_90 = 3.83 (from d_75)
 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1273 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1273 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1285 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1289 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2266 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1292 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2803 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
onSectionRendered @ 4012-Section14.js:1490
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1829
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:883
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1147
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1807
calculateTargetModel @ 4012-Section15.js:1657
calculateAll @ 4012-Section15.js:1287
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1159
calculateAndRefresh @ 4012-Section04.js:1413
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1512
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
onSectionRendered @ 4012-Section15.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1170 Section03: Province selected: ON
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section03.js:1170 Section03: Province selected: ON
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
index.html:1099 TEUI Calculator 4.011 initialization complete
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_104
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section12.js:2647
setTimeout
onSectionRendered @ 4012-Section12.js:2646
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2484
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4011-QCMonitor.js:40 [QCMonitor] QC monitoring disabled. Add ?qc=true to URL to activate.
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.91920962886925, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=16.3 (ref), h_6=11.7 (target) → reduction should be 28%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.9 (from j_32=134041.4959823222, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=16.3, reduction=0.28220858895705525, percent=28%
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1500
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1500
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1500
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateVolumeMetrics @ 4012-Section12.js:1500
calculateReferenceModel @ 4012-Section12.js:2303
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.666880, g_102=0.428571
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1677
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1677
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1677
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1677
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1678
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1678
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1678
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1678
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1679
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1679
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1679
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1243
calculateCombinedUValue @ 4012-Section12.js:1679
calculateReferenceModel @ 4012-Section12.js:2304
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0.6668795218521432*24)/1000 = 73.62349921247662
4012-Section12.js:2038 [S12DB] REF i_101 result: 73.62349921247662 * 2476.6199999999994 = 182337.4306196038
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0.6668795218521432*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5935677913147346
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=182337.4306196038, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=240961.97765992317
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateReferenceModel @ 4012-Section12.js:2320
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateReferenceModel @ 4012-Section12.js:2320
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateReferenceModel @ 4012-Section12.js:2320
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateReferenceModel @ 4012-Section12.js:2320
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2408
setTimeout
onSectionRendered @ 4012-Section11.js:2407
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [CLOCK] Starting initial load timing
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
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1905 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2045 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1699
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1699
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1718
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1718
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
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
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
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
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2038 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.6 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.6, reduction=0.5760869565217392, percent=58%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 586ms (all calculations finalized)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-FileHandler.js:77 Detected Excel file.
4011-ExcelMapper.js:372 🔍 [ExcelMapper] Reading REPORT sheet location cells:
4011-ExcelMapper.js:373   D19 cell object: {t: 's', v: 'ON', r: '<t>ON</t>', h: 'ON', w: 'ON'}
4011-ExcelMapper.js:374   H19 cell object: {t: 's', v: 'Milton', r: '<t>Milton</t>', h: 'Milton', w: 'Milton'}
4011-ExcelMapper.js:376   D19 value: ON
   H19 value: Milton
 [FileHandler] 🔍 REPORT sheet imported data: {d_12: 'A-Assembly', d_13: 'OBC SB10 5.5-6 Z5 (2010)', d_14: 'Utility Bills', d_15: 'Self Reported', h_12: 2023, …}
 [FileHandler] 🔍 d_19 in importedData? true Value: ON
 [FileHandler] 🔍 h_19 in importedData? true Value: Milton
 [FileHandler] 🎯 TARGET Location from REPORT sheet: Province="ON", City="Milton"
 [FileHandler] 🔒 IMPORT QUARANTINE START - Muting listeners
 [StateManager] 🔒 Listeners MUTED (import quarantine active)
 [FileHandler DEBUG] updateStateFromImportData CALLED with 125 fields, skipRecalculation= false
 [FileHandler DEBUG] stateManager exists: true fieldManager exists: true
 [FileHandler DEBUG] Passed validation checks, starting forEach loop...
 [StateManager] Skipped listener for d_12 (quarantine active)
 [StateManager] Skipped listener for d_13 (quarantine active)
 [StateManager] Skipped listener for d_14 (quarantine active)
 [StateManager] Skipped listener for d_15 (quarantine active)
 [StateManager] Skipped listener for h_12 (quarantine active)
 [StateManager] Skipped listener for h_13 (quarantine active)
 [StateManager] Skipped listener for h_14 (quarantine active)
 [StateManager] Skipped listener for h_15 (quarantine active)
 [StateManager] Skipped listener for i_16 (quarantine active)
 [StateManager] Skipped listener for i_17 (quarantine active)
 [StateManager] Skipped listener for l_12 (quarantine active)
 [StateManager] Skipped listener for l_13 (quarantine active)
 [StateManager] Skipped listener for l_14 (quarantine active)
 [StateManager] Skipped listener for l_15 (quarantine active)
 [StateManager] Skipped listener for l_16 (quarantine active)
 [StateManager] Skipped listener for d_19 (quarantine active)
 [StateManager] Skipped listener for h_19 (quarantine active)
 [StateManager] Skipped listener for h_20 (quarantine active)
 [StateManager] Skipped listener for h_21 (quarantine active)
 [StateManager] Skipped listener for i_21 (quarantine active)
 [StateManager] Skipped listener for m_19 (quarantine active)
 [StateManager] Skipped listener for l_20 (quarantine active)
 [StateManager] Skipped listener for l_21 (quarantine active)
 [StateManager] Skipped listener for d_27 (quarantine active)
 [StateManager] Skipped listener for d_28 (quarantine active)
 [StateManager] Skipped listener for d_29 (quarantine active)
 [StateManager] Skipped listener for d_30 (quarantine active)
 [StateManager] Skipped listener for d_31 (quarantine active)
 [StateManager] Skipped listener for l_27 (quarantine active)
 Skipping import for unknown fieldId: l_28
(anonymous) @ 4011-FileHandler.js:516
updateStateFromImportData @ 4011-FileHandler.js:508
processImportedExcel @ 4011-FileHandler.js:161
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 Skipping import for unknown fieldId: l_29
(anonymous) @ 4011-FileHandler.js:516
updateStateFromImportData @ 4011-FileHandler.js:508
processImportedExcel @ 4011-FileHandler.js:161
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 Skipping import for unknown fieldId: l_30
(anonymous) @ 4011-FileHandler.js:516
updateStateFromImportData @ 4011-FileHandler.js:508
processImportedExcel @ 4011-FileHandler.js:161
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 Skipping import for unknown fieldId: l_31
(anonymous) @ 4011-FileHandler.js:516
updateStateFromImportData @ 4011-FileHandler.js:508
processImportedExcel @ 4011-FileHandler.js:161
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 [StateManager] Skipped listener for h_35 (quarantine active)
 [StateManager] Skipped listener for d_39 (quarantine active)
 [StateManager] Skipped listener for i_41 (quarantine active)
 [StateManager] Skipped listener for d_44 (quarantine active)
 [StateManager] Skipped listener for d_45 (quarantine active)
 [StateManager] Skipped listener for d_46 (quarantine active)
 [StateManager] Skipped listener for i_44 (quarantine active)
 [StateManager] Skipped listener for k_45 (quarantine active)
 [StateManager] Skipped listener for i_46 (quarantine active)
 [StateManager] Skipped listener for m_43 (quarantine active)
 [StateManager] Skipped listener for d_49 (quarantine active)
 [StateManager] Skipped listener for e_49 (quarantine active)
 [StateManager] Skipped listener for e_50 (quarantine active)
 [StateManager] Skipped listener for d_51 (quarantine active)
 [StateManager] Skipped listener for d_52 (quarantine active)
 [StateManager] Skipped listener for d_53 (quarantine active)
 [StateManager] Skipped listener for k_52 (quarantine active)
 [StateManager] Skipped listener for d_56 (quarantine active)
 [StateManager] Skipped listener for d_57 (quarantine active)
 [StateManager] Skipped listener for d_58 (quarantine active)
 [StateManager] Skipped listener for d_59 (quarantine active)
 [StateManager] Skipped listener for i_59 (quarantine active)
 [StateManager] Skipped listener for d_63 (quarantine active)
 [StateManager] Skipped listener for g_63 (quarantine active)
 [StateManager] Skipped listener for d_64 (quarantine active)
 [StateManager] Skipped listener for d_66 (quarantine active)
 [StateManager] Skipped listener for d_68 (quarantine active)
 [StateManager] Skipped listener for g_67 (quarantine active)
 [StateManager] Skipped listener for d_73 (quarantine active)
 [StateManager] Skipped listener for d_74 (quarantine active)
 [StateManager] Skipped listener for d_75 (quarantine active)
 [StateManager] Skipped listener for d_76 (quarantine active)
 [StateManager] Skipped listener for d_77 (quarantine active)
 [StateManager] Skipped listener for d_78 (quarantine active)
 [StateManager] Skipped listener for e_73 (quarantine active)
 [StateManager] Skipped listener for e_74 (quarantine active)
 [StateManager] Skipped listener for e_75 (quarantine active)
 [StateManager] Skipped listener for e_76 (quarantine active)
 [StateManager] Skipped listener for e_77 (quarantine active)
 [StateManager] Skipped listener for e_78 (quarantine active)
 [StateManager] Skipped listener for f_73 (quarantine active)
 [StateManager] Skipped listener for f_74 (quarantine active)
 [StateManager] Skipped listener for f_75 (quarantine active)
 [StateManager] Skipped listener for f_76 (quarantine active)
 [StateManager] Skipped listener for f_77 (quarantine active)
 [StateManager] Skipped listener for f_78 (quarantine active)
 [StateManager] Skipped listener for g_73 (quarantine active)
 [StateManager] Skipped listener for g_74 (quarantine active)
 [StateManager] Skipped listener for g_75 (quarantine active)
 [StateManager] Skipped listener for g_76 (quarantine active)
 [StateManager] Skipped listener for g_77 (quarantine active)
 [StateManager] Skipped listener for g_78 (quarantine active)
 [StateManager] Skipped listener for h_73 (quarantine active)
 [StateManager] Skipped listener for h_74 (quarantine active)
 [StateManager] Skipped listener for h_75 (quarantine active)
 [StateManager] Skipped listener for h_76 (quarantine active)
 [StateManager] Skipped listener for h_77 (quarantine active)
 [StateManager] Skipped listener for h_78 (quarantine active)
 [StateManager] Skipped listener for d_80 (quarantine active)
 [StateManager] Skipped listener for d_85 (quarantine active)
 [StateManager] Skipped listener for f_85 (quarantine active)
 [StateManager] Skipped listener for d_86 (quarantine active)
 [StateManager] Skipped listener for f_86 (quarantine active)
 [StateManager] Skipped listener for d_87 (quarantine active)
 [StateManager] Skipped listener for f_87 (quarantine active)
 [StateManager] Skipped listener for g_88 (quarantine active)
 [StateManager] Skipped listener for g_89 (quarantine active)
 [StateManager] Skipped listener for g_90 (quarantine active)
 [StateManager] Skipped listener for g_91 (quarantine active)
 [StateManager] Skipped listener for g_92 (quarantine active)
 [StateManager] Skipped listener for g_93 (quarantine active)
 [StateManager] Skipped listener for d_94 (quarantine active)
 [StateManager] Skipped listener for f_94 (quarantine active)
 [StateManager] Skipped listener for d_95 (quarantine active)
 [StateManager] Skipped listener for f_95 (quarantine active)
 [StateManager] Skipped listener for d_96 (quarantine active)
 [StateManager] Skipped listener for d_97 (quarantine active)
 [StateManager] Skipped listener for d_103 (quarantine active)
 [StateManager] Skipped listener for g_103 (quarantine active)
 [StateManager] Skipped listener for d_105 (quarantine active)
 [StateManager] Skipped listener for d_108 (quarantine active)
 [StateManager] Skipped listener for g_109 (quarantine active)
 [StateManager] Skipped listener for d_113 (quarantine active)
 [StateManager] Skipped listener for f_113 (quarantine active)
 [StateManager] Skipped listener for j_115 (quarantine active)
 [StateManager] Skipped listener for d_116 (quarantine active)
 [StateManager] Skipped listener for d_118 (quarantine active)
 [StateManager] Skipped listener for l_118 (quarantine active)
 [StateManager] Skipped listener for d_119 (quarantine active)
 [StateManager] Skipped listener for l_119 (quarantine active)
 [StateManager] Skipped listener for k_120 (quarantine active)
 [StateManager] Skipped listener for d_142 (quarantine active)
 [FileHandler] All imported values set. Explicitly calling loadReferenceData for standard: OBC SB10 5.5-6 Z5 (2010)
 [StateManager] Loading reference data for standard: OBC SB10 5.5-6 Z5 (2010)
 [StateManager] Step 1: Copied application state to activeReferenceDataSet (preserving independent Reference values). d_53 value: 0
 [StateManager] Step 2: Applied Reference Mode Defaults. d_53 value: 0
 [StateManager] Attempting to access TEUI.ReferenceValues for standardKey: "OBC SB10 5.5-6 Z5 (2010)"
 [StateManager] TEUI.ReferenceValues exists? true
 [StateManager] Available standards: (19) ['OBC SB12 3.1.1.2.C4', 'OBC SB12 3.1.1.2.C1', 'OBC SB12 3.1.1.2.A3', 'OBC SB10 5.5-6 Z6', 'OBC SB10 5.5-6 Z5 (2010)', 'ADD YOUR OWN HERE', 'NBC T1', 'NECB T1 (Z6)', 'CaGBC ZCB', 'PH Classic', 'PH Plus', 'PH Premium', 'EnerPHit', 'PH Low Energy', 'getStandardFields', 'getStandards', '_data', 'getStandardData', 'getAllStandardNames']
 [StateManager] Exact standardKey being requested: "OBC SB10 5.5-6 Z5 (2010)"
 [StateManager] d_53 in standard? true
 [StateManager] d_53 value in standard: 0
 [StateManager] Checking field: d_52, value: 90
 [StateManager] Applying d_52 = 90
 [StateManager] Checking field: k_52, value: 90
 [StateManager] Applying k_52 = 90
 [StateManager] Checking field: d_53, value: 0
 [StateManager] Applying d_53 = 0
 [StateManager] Checking field: d_56, value: 150
 [StateManager] Applying d_56 = 150
 [StateManager] Checking field: d_57, value: 1000
 [StateManager] Applying d_57 = 1000
 [StateManager] Checking field: d_58, value: 150
 [StateManager] Applying d_58 = 150
 [StateManager] Checking field: d_59, value: 45
 [StateManager] Applying d_59 = 45
 [StateManager] Checking field: g_67, value: Regular
 [StateManager] Applying g_67 = Regular
 [StateManager] Checking field: t_65, value: 7.0
 [StateManager] Standard OBC SB10 5.5-6 Z5 (2010) defines field t_65 not in known user-editable fields
(anonymous) @ 4011-StateManager.js:1452
loadReferenceData @ 4011-StateManager.js:1435
updateStateFromImportData @ 4011-FileHandler.js:626
processImportedExcel @ 4011-FileHandler.js:161
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 [StateManager] Checking field: t_66, value: 2.0
 [StateManager] Standard OBC SB10 5.5-6 Z5 (2010) defines field t_66 not in known user-editable fields
(anonymous) @ 4011-StateManager.js:1452
loadReferenceData @ 4011-StateManager.js:1435
updateStateFromImportData @ 4011-FileHandler.js:626
processImportedExcel @ 4011-FileHandler.js:161
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 [StateManager] Checking field: f_73, value: 0.50
 [StateManager] Applying f_73 = 0.50
 [StateManager] Checking field: f_74, value: 0.50
 [StateManager] Applying f_74 = 0.50
 [StateManager] Checking field: f_75, value: 0.50
 [StateManager] Applying f_75 = 0.50
 [StateManager] Checking field: f_76, value: 0.50
 [StateManager] Applying f_76 = 0.50
 [StateManager] Checking field: f_77, value: 0.50
 [StateManager] Applying f_77 = 0.50
 [StateManager] Checking field: f_78, value: 0.50
 [StateManager] Applying f_78 = 0.50
 [StateManager] Checking field: d_80, value: NRC 40%
 [StateManager] Applying d_80 = NRC 40%
 [StateManager] Checking field: f_85, value: 5.30
 [StateManager] Applying f_85 = 5.30
 [StateManager] Checking field: f_86, value: 4.10
 [StateManager] Applying f_86 = 4.10
 [StateManager] Checking field: f_87, value: 6.60
 [StateManager] Applying f_87 = 6.60
 [StateManager] Checking field: g_88, value: 1.990
 [StateManager] Applying g_88 = 1.990
 [StateManager] Checking field: g_89, value: 2.560
 [StateManager] Applying g_89 = 2.560
 [StateManager] Checking field: g_90, value: 2.560
 [StateManager] Applying g_90 = 2.560
 [StateManager] Checking field: g_91, value: 2.560
 [StateManager] Applying g_91 = 2.560
 [StateManager] Checking field: g_92, value: 2.560
 [StateManager] Applying g_92 = 2.560
 [StateManager] Checking field: g_93, value: 2.560
 [StateManager] Applying g_93 = 2.560
 [StateManager] Checking field: f_94, value: 1.80
 [StateManager] Applying f_94 = 1.80
 [StateManager] Checking field: f_95, value: 3.50
 [StateManager] Applying f_95 = 3.50
 [StateManager] Checking field: d_97, value: 50
 [StateManager] Applying d_97 = 50
 [StateManager] Checking field: j_115, value: 0.90
 [StateManager] Applying j_115 = 0.90
 [StateManager] Checking field: j_116, value: 3.3
 [StateManager] Applying j_116 = 3.3
 [StateManager] Checking field: f_113, value: 7.1
 [StateManager] Applying f_113 = 7.1
 [StateManager] Checking field: d_118, value: 0
 [StateManager] Applying d_118 = 0
 [StateManager] Checking field: l_118, value: 3.50
 [StateManager] Applying l_118 = 3.50
 [StateManager] Checking field: d_119, value: 8.33
 [StateManager] Applying d_119 = 8.33
 [StateManager] Step 3: Applied standard overrides. d_53 value: 0
 [StateManager] FINAL d_53 value in activeReferenceDataSet: 0
 [StateManager] Final activeReferenceDataSet keys: 126
 [FileHandler] loadReferenceData finished after import.
 [FileHandler] Target import complete. 121 fields updated. 4 rows/fields skipped.
 [FileHandler] Imported 125 Target values
 [FileHandler DEBUG] About to call processImportedExcelReference
 [FileHandler DEBUG] processImportedExcelReference called, excelMapper exists: true
 [FileHandler DEBUG] Calling mapExcelToReferenceModel...
 [ExcelMapper] mapExcelToReferenceModel called. Sheet 'REFERENCE' exists: true
 [ExcelMapper] Starting REFERENCE sheet processing...
 [ExcelMapper] REFERENCE worksheet exists: true
 [ExcelMapper] Sample cells from REFERENCE: (20) ['!ref', 'T1', 'D2', 'G2', 'K2', 'P3', 'T3', 'U3', 'C4', 'E4', 'H4', 'K4', 'P4', 'Q4', 'U4', 'C5', 'E5', 'F5', 'H5', 'I5']
 [ExcelMapper] D12 has formula REPORT!D12, using REPORT!D12 = A - Assembly
 [ExcelMapper DEBUG] D13 exists: true, cell: {t: 's', v: 'OBC SB10 5.5-6 Z5 (2010)', r: '<t>OBC SB10 5.5-6 Z5 (2010)</t>', h: 'OBC SB10 5.5-6 Z5 (2010)', w: 'OBC SB10 5.5-6 Z5 (2010)'}
 [ExcelMapper DEBUG] D13 cell: {value: 'OBC SB10 5.5-6 Z5 (2010)', formula: undefined, type: 's', hasFormula: false, startsWithREPORT: undefined}
 [ExcelMapper DEBUG] D13 no REPORT formula, using cell value: OBC SB10 5.5-6 Z5 (2010)
 [ExcelMapper] H13 has formula REPORT!H13, using REPORT!H13 = 50
 [ExcelMapper] H14 has formula REPORT!H14, using REPORT!H14 = Sherwood CC
 [ExcelMapper H15] Checking cell H15...
 [ExcelMapper H15] Cell exists: true
 [ExcelMapper H15] Cell object: {t: 'n', v: 11167, f: 'REPORT!H15', w: '11,167.00'}
 [ExcelMapper H15] Field ID: ref_h_15
 [ExcelMapper DEBUG] H15 exists: true, cell: {t: 'n', v: 11167, f: 'REPORT!H15', w: '11,167.00'}
 [ExcelMapper DEBUG] H15 cell: {value: 11167, formula: 'REPORT!H15', type: 'n', hasFormula: true, startsWithREPORT: false}
 [ExcelMapper] H15 has formula REPORT!H15, using REPORT!H15 = 11167
 [ExcelMapper] H16 has formula REPORT!H16, using REPORT!H16 = MJMA
 [ExcelMapper] H17 has formula REPORT!H17, using REPORT!H17 = XXXX
 [ExcelMapper] L12 has formula REPORT!L12, using REPORT!L12 = 0.13
 [ExcelMapper] L13 has formula REPORT!L13, using REPORT!L13 = 0.507
 [ExcelMapper] L14 has formula REPORT!L14, using REPORT!L14 = 1.62
 [ExcelMapper] L15 has formula REPORT!L15, using REPORT!L15 = 180
 [ExcelMapper] L16 has formula REPORT!L16, using REPORT!L16 = 1.5
 [ExcelMapper] D19 has formula REPORT!D19, using REPORT!D19 = ON
 [ExcelMapper] H19 has formula REPORT!H19, using REPORT!H19 = Milton
 [ExcelMapper] H20 has formula REPORT!H20, using REPORT!H20 = Present
 [ExcelMapper] M19 has formula REPORT!M19, using REPORT!M19 = 120
 [ExcelMapper] D27 has formula REPORT!D27, using REPORT!D27 = 2000299
 [ExcelMapper] D28 has formula REPORT!D28, using REPORT!D28 = 355013
 [ExcelMapper] D29 has formula REPORT!D29, using REPORT!D29 = 0
 [ExcelMapper] D30 has formula REPORT!D30, using REPORT!D30 = 0
 [ExcelMapper] D31 has formula REPORT!D31, using REPORT!D31 = 0
 [ExcelMapper] D46 has formula REPORT!D46, using REPORT!D46 = 0
 [ExcelMapper] M43 has formula REPORT!M43, using REPORT!M43 = 800000
 [ExcelMapper] D59 has formula REPORT!D59, using REPORT!D59 = 45
 [ExcelMapper] D63 has formula REPORT!D63, using REPORT!D63 = 2400
 [ExcelMapper] G63 has formula REPORT!G63, using REPORT!G63 = 10
 [ExcelMapper] D64 has formula REPORT!D64, using REPORT!D64 = Active
 [ExcelMapper] D73 has formula REPORT!D73, using REPORT!D73 = 0
 [ExcelMapper] D74 has formula REPORT!D74, using REPORT!D74 = 914
 [ExcelMapper] D75 has formula REPORT!D75, using REPORT!D75 = 846
 [ExcelMapper] D76 has formula REPORT!D76, using REPORT!D76 = 845
 [ExcelMapper] D77 has formula REPORT!D77, using REPORT!D77 = 120
 [ExcelMapper] D78 has formula REPORT!D78, using REPORT!D78 = 0
 [ExcelMapper] D85 has formula REPORT!D85, using REPORT!D85 = 11167
 [ExcelMapper] D86 has formula REPORT!D86, using REPORT!D86 = 2741
 [ExcelMapper] D87 has formula REPORT!D87, using REPORT!D87 = 0
 [ExcelMapper] D94 has formula REPORT!D94, using REPORT!D94 = 1
 [ExcelMapper] D95 has formula REPORT!D95, using REPORT!D95 = 11167
 [ExcelMapper] D96 has formula REPORT!D96, using REPORT!D96 = 398
 [ExcelMapper] D103 has formula REPORT!D103, using REPORT!D103 = 2
 [ExcelMapper] G103 has formula REPORT!G103, using REPORT!G103 = Exposed
 [ExcelMapper] D105 has formula REPORT!D105, using REPORT!D105 = 85321.11
 [FileHandler DEBUG] mapExcelToReferenceModel returned, keys: 121
 [FileHandler DEBUG] About to call updateStateFromImportData for 121 reference fields
 [FileHandler DEBUG] First 5 reference fields: (5) ['ref_d_12', 'ref_d_13', 'ref_d_14', 'ref_d_15', 'ref_h_12']
 [FileHandler DEBUG] updateStateFromImportData CALLED with 121 fields, skipRecalculation= true
 [FileHandler DEBUG] stateManager exists: true fieldManager exists: true
 [FileHandler DEBUG] Passed validation checks, starting forEach loop...
 [StateManager] Skipped listener for ref_d_12 (quarantine active)
 [FileHandler] Reference field imported: ref_d_12 = A-Assembly
 [StateManager] Skipped listener for ref_d_13 (quarantine active)
 [FileHandler] Reference field imported: ref_d_13 = OBC SB10 5.5-6 Z5 (2010)
 [StateManager] Skipped listener for ref_d_14 (quarantine active)
 [FileHandler] Reference field imported: ref_d_14 = Targeted Use
 [StateManager] Skipped listener for ref_d_15 (quarantine active)
 [FileHandler] Reference field imported: ref_d_15 = Self Reported
 [StateManager] Skipped listener for ref_h_12 (quarantine active)
 [FileHandler] Reference field imported: ref_h_12 = 2023
 [StateManager] Skipped listener for ref_h_13 (quarantine active)
 [FileHandler] Reference field imported: ref_h_13 = 50
 [StateManager] Skipped listener for ref_h_14 (quarantine active)
 [FileHandler] Reference field imported: ref_h_14 = Sherwood CC
 [StateManager DEBUG] ref_h_15 setValue: "11167" (state: imported, prev: 1427.20)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4011-FileHandler.js:528
updateStateFromImportData @ 4011-FileHandler.js:508
processImportedExcelReference @ 4011-FileHandler.js:274
processImportedExcel @ 4011-FileHandler.js:170
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [StateManager] Skipped listener for ref_h_15 (quarantine active)
 [FileHandler] Reference field imported: ref_h_15 = 11167
 [StateManager] Skipped listener for ref_i_16 (quarantine active)
 [FileHandler] Reference field imported: ref_i_16 = MJMA
 [StateManager] Skipped listener for ref_i_17 (quarantine active)
 [FileHandler] Reference field imported: ref_i_17 = XXXX
 [StateManager] Skipped listener for ref_l_12 (quarantine active)
 [FileHandler] Reference field imported: ref_l_12 = 0.13
 [StateManager] Skipped listener for ref_l_13 (quarantine active)
 [FileHandler] Reference field imported: ref_l_13 = 0.507
 [StateManager] Skipped listener for ref_l_14 (quarantine active)
 [FileHandler] Reference field imported: ref_l_14 = 1.62
 [StateManager] Skipped listener for ref_l_15 (quarantine active)
 [FileHandler] Reference field imported: ref_l_15 = 180
 [StateManager] Skipped listener for ref_l_16 (quarantine active)
 [FileHandler] Reference field imported: ref_l_16 = 1.5
 [StateManager] Skipped listener for ref_d_19 (quarantine active)
 [FileHandler] Reference field imported: ref_d_19 = ON
 [StateManager] Skipped listener for ref_h_19 (quarantine active)
 [FileHandler] Reference field imported: ref_h_19 = Milton
 [StateManager] Skipped listener for ref_h_20 (quarantine active)
 [FileHandler] Reference field imported: ref_h_20 = Present
 [StateManager] Skipped listener for ref_h_21 (quarantine active)
 [FileHandler] Reference field imported: ref_h_21 = Capacitance
 [StateManager] Skipped listener for ref_i_21 (quarantine active)
 [FileHandler] Reference field imported: ref_i_21 = 50
 [StateManager] Skipped listener for ref_m_19 (quarantine active)
 [FileHandler] Reference field imported: ref_m_19 = 120
 [StateManager] Skipped listener for ref_d_27 (quarantine active)
 [FileHandler] Reference field imported: ref_d_27 = 2000299
 [StateManager] Skipped listener for ref_d_28 (quarantine active)
 [FileHandler] Reference field imported: ref_d_28 = 355013
 [StateManager] Skipped listener for ref_d_29 (quarantine active)
 [FileHandler] Reference field imported: ref_d_29 = 0
 [StateManager] Skipped listener for ref_d_30 (quarantine active)
 [FileHandler] Reference field imported: ref_d_30 = 0
 [StateManager] Skipped listener for ref_d_31 (quarantine active)
 [FileHandler] Reference field imported: ref_d_31 = 0
 [StateManager] Skipped listener for ref_l_27 (quarantine active)
 [FileHandler] Reference field imported: ref_l_27 = 67
 [StateManager] Skipped listener for ref_l_28 (quarantine active)
 [FileHandler] Reference field imported: ref_l_28 = 1921
 [StateManager] Skipped listener for ref_l_29 (quarantine active)
 [FileHandler] Reference field imported: ref_l_29 = 2970
 [StateManager] Skipped listener for ref_l_30 (quarantine active)
 [FileHandler] Reference field imported: ref_l_30 = 2753
 [StateManager] Skipped listener for ref_l_31 (quarantine active)
 [FileHandler] Reference field imported: ref_l_31 = 150
 [StateManager] Skipped listener for ref_h_35 (quarantine active)
 [FileHandler] Reference field imported: ref_h_35 = 1
 [StateManager] Skipped listener for ref_d_39 (quarantine active)
 [FileHandler] Reference field imported: ref_d_39 = Pt.3 Steel
 [StateManager] Skipped listener for ref_i_41 (quarantine active)
 [FileHandler] Reference field imported: ref_i_41 = 650
 [StateManager] Skipped listener for ref_d_44 (quarantine active)
 [FileHandler] Reference field imported: ref_d_44 = 0
 [StateManager] Skipped listener for ref_d_45 (quarantine active)
 [FileHandler] Reference field imported: ref_d_45 = 0
 [StateManager] Skipped listener for ref_d_46 (quarantine active)
 [FileHandler] Reference field imported: ref_d_46 = 0
 [StateManager] Skipped listener for ref_k_45 (quarantine active)
 [FileHandler] Reference field imported: ref_k_45 = 0
 [StateManager] Skipped listener for ref_i_46 (quarantine active)
 [FileHandler] Reference field imported: ref_i_46 = 0
 [StateManager] Skipped listener for ref_m_43 (quarantine active)
 [FileHandler] Reference field imported: ref_m_43 = 800000
 [StateManager] Skipped listener for ref_d_49 (quarantine active)
 [FileHandler] Reference field imported: ref_d_49 = User Defined
 [StateManager] Skipped listener for ref_e_49 (quarantine active)
 [FileHandler] Reference field imported: ref_e_49 = 40
 [StateManager] Skipped listener for ref_e_50 (quarantine active)
 [FileHandler] Reference field imported: ref_e_50 = 10000
 [StateManager] Skipped listener for ref_d_51 (quarantine active)
 [FileHandler] Reference field imported: ref_d_51 = Gas
 [StateManager] Skipped listener for ref_d_52 (quarantine active)
 [FileHandler] Reference field imported: ref_d_52 = 90
 [StateManager] Skipped listener for ref_d_53 (quarantine active)
 [FileHandler] Reference field imported: ref_d_53 = 0
 [StateManager] Skipped listener for ref_k_52 (quarantine active)
 [FileHandler] Reference field imported: ref_k_52 = 0.90
 [StateManager] Skipped listener for ref_d_56 (quarantine active)
 [FileHandler] Reference field imported: ref_d_56 = 50
 [StateManager] Skipped listener for ref_d_57 (quarantine active)
 [FileHandler] Reference field imported: ref_d_57 = 550
 [StateManager] Skipped listener for ref_d_58 (quarantine active)
 [FileHandler] Reference field imported: ref_d_58 = 100
 [StateManager] Skipped listener for ref_d_59 (quarantine active)
 [FileHandler] Reference field imported: ref_d_59 = 45
 [StateManager] Skipped listener for ref_d_63 (quarantine active)
 [FileHandler] Reference field imported: ref_d_63 = 2400
 [StateManager] Skipped listener for ref_g_63 (quarantine active)
 [FileHandler] Reference field imported: ref_g_63 = 10
 [StateManager] Skipped listener for ref_d_64 (quarantine active)
 [FileHandler] Reference field imported: ref_d_64 = Active
 [StateManager] Skipped listener for ref_d_66 (quarantine active)
 [FileHandler] Reference field imported: ref_d_66 = 2
 [StateManager] Skipped listener for ref_d_68 (quarantine active)
 [FileHandler] Reference field imported: ref_d_68 = No Elevators
 [StateManager] Skipped listener for ref_g_67 (quarantine active)
 [FileHandler] Reference field imported: ref_g_67 = Regular
 [StateManager] Skipped listener for ref_d_73 (quarantine active)
 [FileHandler] Reference field imported: ref_d_73 = 0
 [StateManager] Skipped listener for ref_d_74 (quarantine active)
 [FileHandler] Reference field imported: ref_d_74 = 914
 [StateManager] Skipped listener for ref_d_75 (quarantine active)
 [FileHandler] Reference field imported: ref_d_75 = 846
 [StateManager] Skipped listener for ref_d_76 (quarantine active)
 [FileHandler] Reference field imported: ref_d_76 = 845
 [StateManager] Skipped listener for ref_d_77 (quarantine active)
 [FileHandler] Reference field imported: ref_d_77 = 120
 [StateManager] Skipped listener for ref_d_78 (quarantine active)
 [FileHandler] Reference field imported: ref_d_78 = 0
 [StateManager] Skipped listener for ref_e_73 (quarantine active)
 [FileHandler] Reference field imported: ref_e_73 = Average
 [StateManager] Skipped listener for ref_e_74 (quarantine active)
 [FileHandler] Reference field imported: ref_e_74 = North
 [StateManager] Skipped listener for ref_e_75 (quarantine active)
 [FileHandler] Reference field imported: ref_e_75 = East
 [StateManager] Skipped listener for ref_e_76 (quarantine active)
 [FileHandler] Reference field imported: ref_e_76 = South
 [StateManager] Skipped listener for ref_e_77 (quarantine active)
 [FileHandler] Reference field imported: ref_e_77 = West
 [StateManager] Skipped listener for ref_e_78 (quarantine active)
 [FileHandler] Reference field imported: ref_e_78 = Skylight
 [StateManager] Skipped listener for ref_f_73 (quarantine active)
 [FileHandler] Reference field imported: ref_f_73 = 0.5
 [StateManager] Skipped listener for ref_f_74 (quarantine active)
 [FileHandler] Reference field imported: ref_f_74 = 0.5
 [StateManager] Skipped listener for ref_f_75 (quarantine active)
 [FileHandler] Reference field imported: ref_f_75 = 0.5
 [StateManager] Skipped listener for ref_f_76 (quarantine active)
 [FileHandler] Reference field imported: ref_f_76 = 0.5
 [StateManager] Skipped listener for ref_f_77 (quarantine active)
 [FileHandler] Reference field imported: ref_f_77 = 0.5
 [StateManager] Skipped listener for ref_f_78 (quarantine active)
 [FileHandler] Reference field imported: ref_f_78 = 0.5
 [StateManager] Skipped listener for ref_g_73 (quarantine active)
 [FileHandler] Reference field imported: ref_g_73 = 0
 [StateManager] Skipped listener for ref_g_74 (quarantine active)
 [FileHandler] Reference field imported: ref_g_74 = 0
 [StateManager] Skipped listener for ref_g_75 (quarantine active)
 [FileHandler] Reference field imported: ref_g_75 = 0
 [StateManager] Skipped listener for ref_g_76 (quarantine active)
 [FileHandler] Reference field imported: ref_g_76 = 0
 [StateManager] Skipped listener for ref_g_77 (quarantine active)
 [FileHandler] Reference field imported: ref_g_77 = 0
 [StateManager] Skipped listener for ref_g_78 (quarantine active)
 [FileHandler] Reference field imported: ref_g_78 = 0
 [StateManager] Skipped listener for ref_h_73 (quarantine active)
 [FileHandler] Reference field imported: ref_h_73 = 0
 [StateManager] Skipped listener for ref_h_74 (quarantine active)
 [FileHandler] Reference field imported: ref_h_74 = 0
 [StateManager] Skipped listener for ref_h_75 (quarantine active)
 [FileHandler] Reference field imported: ref_h_75 = 0
 [StateManager] Skipped listener for ref_h_76 (quarantine active)
 [FileHandler] Reference field imported: ref_h_76 = 0
 [StateManager] Skipped listener for ref_h_77 (quarantine active)
 [FileHandler] Reference field imported: ref_h_77 = 0
 [StateManager] Skipped listener for ref_h_78 (quarantine active)
 [FileHandler] Reference field imported: ref_h_78 = 0
 [StateManager] Skipped listener for ref_d_80 (quarantine active)
 [FileHandler] Reference field imported: ref_d_80 = NRC 40%
 [StateManager] Skipped listener for ref_d_85 (quarantine active)
 [FileHandler] Reference field imported: ref_d_85 = 11167
 [StateManager] Skipped listener for ref_f_85 (quarantine active)
 [FileHandler] Reference field imported: ref_f_85 = 5.3
 [StateManager] Skipped listener for ref_d_86 (quarantine active)
 [FileHandler] Reference field imported: ref_d_86 = 2741
 [StateManager] Skipped listener for ref_f_86 (quarantine active)
 [FileHandler] Reference field imported: ref_f_86 = 4.1
 [StateManager] Skipped listener for ref_d_87 (quarantine active)
 [FileHandler] Reference field imported: ref_d_87 = 0
 [StateManager] Skipped listener for ref_f_87 (quarantine active)
 [FileHandler] Reference field imported: ref_f_87 = 6.6
 [StateManager] Skipped listener for ref_g_88 (quarantine active)
 [FileHandler] Reference field imported: ref_g_88 = 1.99
 [StateManager] Skipped listener for ref_g_89 (quarantine active)
 [FileHandler] Reference field imported: ref_g_89 = 2.56
 [StateManager] Skipped listener for ref_g_90 (quarantine active)
 [FileHandler] Reference field imported: ref_g_90 = 2.56
 [StateManager] Skipped listener for ref_g_91 (quarantine active)
 [FileHandler] Reference field imported: ref_g_91 = 2.56
 [StateManager] Skipped listener for ref_g_92 (quarantine active)
 [FileHandler] Reference field imported: ref_g_92 = 2.56
 [StateManager] Skipped listener for ref_g_93 (quarantine active)
 [FileHandler] Reference field imported: ref_g_93 = 2.56
 [StateManager] Skipped listener for ref_d_94 (quarantine active)
 [FileHandler] Reference field imported: ref_d_94 = 1
 [StateManager] Skipped listener for ref_f_94 (quarantine active)
 [FileHandler] Reference field imported: ref_f_94 = 1.8
 [StateManager] Skipped listener for ref_d_95 (quarantine active)
 [FileHandler] Reference field imported: ref_d_95 = 11167
 [StateManager] Skipped listener for ref_f_95 (quarantine active)
 [FileHandler] Reference field imported: ref_f_95 = 3.5
 [StateManager] Skipped listener for ref_d_96 (quarantine active)
 [FileHandler] Reference field imported: ref_d_96 = 398
 [StateManager] Skipped listener for ref_d_97 (quarantine active)
 [FileHandler] Reference field imported: ref_d_97 = 50
 [StateManager] Skipped listener for ref_d_103 (quarantine active)
 [FileHandler] Reference field imported: ref_d_103 = 2
 [StateManager] Skipped listener for ref_g_103 (quarantine active)
 [FileHandler] Reference field imported: ref_g_103 = Exposed
 [StateManager] Skipped listener for ref_d_105 (quarantine active)
 [FileHandler] Reference field imported: ref_d_105 = 85321.11
 [StateManager] Skipped listener for ref_d_108 (quarantine active)
 [FileHandler] Reference field imported: ref_d_108 = MEASURED
 [StateManager] Skipped listener for ref_g_109 (quarantine active)
 [FileHandler] Reference field imported: ref_g_109 = 3
 [StateManager] Skipped listener for ref_d_113 (quarantine active)
 [FileHandler] Reference field imported: ref_d_113 = Gas
 [StateManager] Skipped listener for ref_f_113 (quarantine active)
 [FileHandler] Reference field imported: ref_f_113 = 7.1
 [StateManager] Skipped listener for ref_j_115 (quarantine active)
 [FileHandler] Reference field imported: ref_j_115 = 0.9
 [StateManager] Skipped listener for ref_d_116 (quarantine active)
 [FileHandler] Reference field imported: ref_d_116 = Cooling
 [StateManager] Skipped listener for ref_d_118 (quarantine active)
 [FileHandler] Reference field imported: ref_d_118 = 0
 [StateManager] Skipped listener for ref_l_118 (quarantine active)
 [FileHandler] Reference field imported: ref_l_118 = 4
 [StateManager] Skipped listener for ref_d_119 (quarantine active)
 [FileHandler] Reference field imported: ref_d_119 = 12.5
 [StateManager] Skipped listener for ref_l_119 (quarantine active)
 [FileHandler] Reference field imported: ref_l_119 = None
 [StateManager] Skipped listener for ref_k_120 (quarantine active)
 [FileHandler] Reference field imported: ref_k_120 = 10
 [StateManager] Skipped listener for ref_d_142 (quarantine active)
 [FileHandler] Reference field imported: ref_d_142 = 300000
 [FileHandler] Reference data import complete. 121 fields updated. Skipping recalculation.
 [FileHandler DEBUG] Returned from updateStateFromImportData
 [FileHandler DEBUG] Returned from processImportedExcelReference
 [FileHandler] 🔧 Syncing all Pattern A sections after BOTH imports complete...
 [FileHandler] 🔧 PHASE 2: Syncing Pattern A sections from global StateManager...
 [FileHandler] Syncing S02 TargetState...
 S02 TargetState: Synced d_12 = A-Assembly from global StateManager
 S02 TargetState: Synced d_13 = OBC SB10 5.5-6 Z5 (2010) from global StateManager
 S02 TargetState: Synced d_14 = Utility Bills from global StateManager
 S02 TargetState: Synced d_15 = Self Reported from global StateManager
 S02 TargetState: Synced h_12 = 2023 from global StateManager
 S02 TargetState: Synced h_13 = 50 from global StateManager
 S02 TargetState: Synced h_14 = Sherwood CC from global StateManager
 S02 TargetState: Synced h_15 = 11167 from global StateManager
 S02 TargetState: Synced i_16 = MJMA from global StateManager
 S02 TargetState: Synced i_17 = XXXX from global StateManager
 S02 TargetState: Synced l_12 = 0.13 from global StateManager
 S02 TargetState: Synced l_13 = 0.507 from global StateManager
 S02 TargetState: Synced l_14 = 1.62 from global StateManager
 S02 TargetState: Synced l_15 = 180 from global StateManager
 S02 TargetState: Synced l_16 = 1.5 from global StateManager
 [FileHandler] Syncing S02 ReferenceState...
 S02 ReferenceState: Synced d_12 = A-Assembly from global StateManager (ref_d_12)
 S02 ReferenceState: Synced d_13 = OBC SB10 5.5-6 Z5 (2010) from global StateManager (ref_d_13)
 S02 ReferenceState: Synced d_14 = Targeted Use from global StateManager (ref_d_14)
 S02 ReferenceState: Synced d_15 = Self Reported from global StateManager (ref_d_15)
 S02 ReferenceState: Synced h_12 = 2023 from global StateManager (ref_h_12)
 S02 ReferenceState: Synced h_13 = 50 from global StateManager (ref_h_13)
 S02 ReferenceState: Synced h_14 = Sherwood CC from global StateManager (ref_h_14)
 S02 ReferenceState: Synced h_15 = 11167 from global StateManager (ref_h_15)
 S02 ReferenceState: Synced i_16 = MJMA from global StateManager (ref_i_16)
 S02 ReferenceState: Synced i_17 = XXXX from global StateManager (ref_i_17)
 S02 ReferenceState: Synced l_12 = 0.13 from global StateManager (ref_l_12)
 S02 ReferenceState: Synced l_13 = 0.507 from global StateManager (ref_l_13)
 S02 ReferenceState: Synced l_14 = 1.62 from global StateManager (ref_l_14)
 S02 ReferenceState: Synced l_15 = 180 from global StateManager (ref_l_15)
 S02 ReferenceState: Synced l_16 = 1.5 from global StateManager (ref_l_16)
 [FileHandler] Syncing S03 TargetState...
 S03 TargetState: Synced d_19 = ON from global StateManager
 S03 TargetState: Synced h_19 = Milton from global StateManager
 S03 TargetState: Synced i_21 = 50 from global StateManager
 [FileHandler] Syncing S03 ReferenceState...
 S03 ReferenceState: Synced d_19 = ON from global StateManager (ref_d_19)
 S03 ReferenceState: Synced h_19 = Milton from global StateManager (ref_h_19)
 S03 ReferenceState: Synced i_21 = 50 from global StateManager (ref_i_21)
 [FileHandler] Syncing S04 TargetState...
 [FileHandler] Syncing S04 ReferenceState...
 [FileHandler] Syncing S05 TargetState...
 S05 TargetState: Synced d_39 = Pt.3 Steel from global StateManager
 S05 TargetState: Synced i_41 = 650 from global StateManager
 [FileHandler] Syncing S05 ReferenceState...
 S05 ReferenceState: Synced d_39 = Pt.3 Steel from global StateManager (ref_d_39)
 [FileHandler] Syncing S06 TargetState...
 S06 TargetState: Synced d_44 = 0 from global StateManager
 S06 TargetState: Synced d_45 = 0 from global StateManager
 S06 TargetState: Synced d_46 = 0 from global StateManager
 S06 TargetState: Synced i_45 = 0 from global StateManager
 S06 TargetState: Synced k_45 = 0 from global StateManager
 S06 TargetState: Synced i_46 = 0 from global StateManager
 S06 TargetState: Synced m_43 = 800000 from global StateManager
 [FileHandler] Syncing S06 ReferenceState...
 S06 ReferenceState: Synced d_44 = 0 from global StateManager (ref_d_44)
 S06 ReferenceState: Synced d_45 = 0 from global StateManager (ref_d_45)
 S06 ReferenceState: Synced d_46 = 0 from global StateManager (ref_d_46)
 S06 ReferenceState: Synced i_45 = 0 from global StateManager (ref_i_45)
 S06 ReferenceState: Synced k_45 = 0 from global StateManager (ref_k_45)
 S06 ReferenceState: Synced i_46 = 0 from global StateManager (ref_i_46)
 S06 ReferenceState: Synced m_43 = 800000 from global StateManager (ref_m_43)
 [FileHandler] Syncing S07 TargetState...
 S07 TargetState: Synced d_49 = User Defined from global StateManager
 S07 TargetState: Synced e_49 = 15 from global StateManager
 S07 TargetState: Synced e_50 = 10000 from global StateManager
 S07 TargetState: Synced d_51 = Gas from global StateManager
 S07 TargetState: Synced d_52 = 94 from global StateManager
 S07 TargetState: Synced d_53 = 0 from global StateManager
 S07 TargetState: Synced k_52 = 0.94 from global StateManager
 [FileHandler] Syncing S07 ReferenceState...
 S07 ReferenceState: Synced d_49 = User Defined from global StateManager (ref_d_49)
 S07 ReferenceState: Synced e_49 = 40 from global StateManager (ref_e_49)
 S07 ReferenceState: Synced e_50 = 10000 from global StateManager (ref_e_50)
 S07 ReferenceState: Synced d_51 = Gas from global StateManager (ref_d_51)
 S07 ReferenceState: Synced d_52 = 90 from global StateManager (ref_d_52)
 S07 ReferenceState: Synced d_53 = 0 from global StateManager (ref_d_53)
 S07 ReferenceState: Synced k_52 = 0.90 from global StateManager (ref_k_52)
 [FileHandler] Syncing S08 TargetState...
 S08 TargetState: Synced d_56 = 50 from global StateManager
 S08 TargetState: Synced d_57 = 550 from global StateManager
 S08 TargetState: Synced d_58 = 100 from global StateManager
 S08 TargetState: Synced d_59 = 45 from global StateManager
 [FileHandler] Syncing S08 ReferenceState...
 S08 ReferenceState: Synced d_56 = 50 from global StateManager (ref_d_56)
 S08 ReferenceState: Synced d_57 = 550 from global StateManager (ref_d_57)
 S08 ReferenceState: Synced d_58 = 100 from global StateManager (ref_d_58)
 S08 ReferenceState: Synced d_59 = 45 from global StateManager (ref_d_59)
 [FileHandler] Syncing S09 TargetState...
 S09 TargetState: Synced d_63 = 2400 from global StateManager
 S09 TargetState: Synced g_63 = 10 from global StateManager
 S09 TargetState: Synced d_64 = Active from global StateManager
 S09 TargetState: Synced d_65 = 7 from global StateManager
 S09 TargetState: Synced d_66 = 1.5 from global StateManager
 S09 TargetState: Synced d_67 = 5 from global StateManager
 S09 TargetState: Synced d_68 = No Elevators from global StateManager
 S09 TargetState: Synced g_67 = Efficient from global StateManager
 [FileHandler] Syncing S09 ReferenceState...
 S09 ReferenceState: Synced d_63 = 2400 from global StateManager (ref_d_63)
 S09 ReferenceState: Synced g_63 = 10 from global StateManager (ref_g_63)
 S09 ReferenceState: Synced d_64 = Active from global StateManager (ref_d_64)
 S09 ReferenceState: Synced d_65 = 7 from global StateManager (ref_d_65)
 S09 ReferenceState: Synced d_66 = 2 from global StateManager (ref_d_66)
 S09 ReferenceState: Synced d_67 = 7 from global StateManager (ref_d_67)
 S09 ReferenceState: Synced d_68 = No Elevators from global StateManager (ref_d_68)
 S09 ReferenceState: Synced g_67 = Regular from global StateManager (ref_g_67)
 [FileHandler] Syncing S10 TargetState...
 [FileHandler] Syncing S10 ReferenceState...
 [FileHandler] Syncing S11 TargetState...
 S11 TargetState: Synced d_85 = 11167 from global StateManager
 S11 TargetState: Synced f_85 = 5.28 from global StateManager
 S11 TargetState: Synced d_86 = 2741 from global StateManager
 S11 TargetState: Synced f_86 = 4.2 from global StateManager
 S11 TargetState: Synced d_87 = 0 from global StateManager
 S11 TargetState: Synced f_87 = 9.52 from global StateManager
 S11 TargetState: Synced g_88 = 2.84 from global StateManager
 S11 TargetState: Synced g_89 = 2.16 from global StateManager
 S11 TargetState: Synced g_90 = 2.16 from global StateManager
 S11 TargetState: Synced g_91 = 2.16 from global StateManager
 S11 TargetState: Synced g_92 = 2.16 from global StateManager
 S11 TargetState: Synced g_93 = 2.16 from global StateManager
 S11 TargetState: Synced d_94 = 1 from global StateManager
 S11 TargetState: Synced f_94 = 3.5 from global StateManager
 S11 TargetState: Synced d_95 = 11167 from global StateManager
 S11 TargetState: Synced f_95 = 3.5 from global StateManager
 S11 TargetState: Synced d_96 = 398 from global StateManager
 S11 TargetState: Synced d_97 = 30 from global StateManager
 [S11 TargetState] Import sync complete (S10 sync deferred to FileHandler)
 [FileHandler] Syncing S11 ReferenceState...
 S11 ReferenceState: Synced d_85 = 11167 from global StateManager (ref_d_85)
 S11 ReferenceState: Synced f_85 = 5.3 from global StateManager (ref_f_85)
 S11 ReferenceState: Synced d_86 = 2741 from global StateManager (ref_d_86)
 S11 ReferenceState: Synced f_86 = 4.1 from global StateManager (ref_f_86)
 S11 ReferenceState: Synced d_87 = 0 from global StateManager (ref_d_87)
 S11 ReferenceState: Synced f_87 = 6.6 from global StateManager (ref_f_87)
 S11 ReferenceState: Synced g_88 = 1.99 from global StateManager (ref_g_88)
 S11 ReferenceState: Synced g_89 = 2.56 from global StateManager (ref_g_89)
 S11 ReferenceState: Synced g_90 = 2.56 from global StateManager (ref_g_90)
 S11 ReferenceState: Synced g_91 = 2.56 from global StateManager (ref_g_91)
 S11 ReferenceState: Synced g_92 = 2.56 from global StateManager (ref_g_92)
 S11 ReferenceState: Synced g_93 = 2.56 from global StateManager (ref_g_93)
 S11 ReferenceState: Synced d_94 = 1 from global StateManager (ref_d_94)
 S11 ReferenceState: Synced f_94 = 1.8 from global StateManager (ref_f_94)
 S11 ReferenceState: Synced d_95 = 11167 from global StateManager (ref_d_95)
 S11 ReferenceState: Synced f_95 = 3.5 from global StateManager (ref_f_95)
 S11 ReferenceState: Synced d_96 = 398 from global StateManager (ref_d_96)
 S11 ReferenceState: Synced d_97 = 50 from global StateManager (ref_d_97)
 [S11 ReferenceState] Import sync complete (S10 sync deferred to FileHandler)
 [FileHandler] Syncing S12 TargetState...
 S12 TargetState: Synced d_103 = 2 from global StateManager
 S12 TargetState: Synced g_103 = Exposed from global StateManager
 S12 TargetState: Synced d_105 = 85321.11 from global StateManager
 S12 TargetState: Synced d_108 = MEASURED from global StateManager
 S12 TargetState: Synced g_109 = 3 from global StateManager
 [FileHandler] Syncing S12 ReferenceState...
 S12 ReferenceState: Synced d_103 = 2 from global StateManager (ref_d_103)
 S12 ReferenceState: Synced g_103 = Exposed from global StateManager (ref_g_103)
 S12 ReferenceState: Synced d_105 = 85321.11 from global StateManager (ref_d_105)
 S12 ReferenceState: Synced d_108 = MEASURED from global StateManager (ref_d_108)
 S12 ReferenceState: Synced g_109 = 3 from global StateManager (ref_g_109)
 [FileHandler] Syncing S13 TargetState...
 [FileHandler] Syncing S13 ReferenceState...
 [FileHandler] S15 TargetState.syncFromGlobalState() not available (not yet implemented)
 [FileHandler] ✅ PHASE 2: Pattern A section sync complete
 [FileHandler] 🔧 PHASE 2.5: Syncing S11 window areas from S10...
 [S11 Area Sync] DUAL-STATE SYNC - populating BOTH Target and Reference states
 [S11 Area Sync] Reason: d_88=7.50, ref_d_73 in StateManager=0
 [S11 Area Sync] d_88 TARGET = 0
 [S11 Area Sync] d_88 REFERENCE = 0
 [StateManager] Skipped listener for d_88 (quarantine active)
 [S11 Area Sync] d_89 TARGET = 914
 [S11 Area Sync] d_89 REFERENCE = 914
 [StateManager] Skipped listener for d_89 (quarantine active)
 [S11 Area Sync] d_90 TARGET = 846
 [S11 Area Sync] d_90 REFERENCE = 846
 [StateManager] Skipped listener for d_90 (quarantine active)
 [S11 Area Sync] d_91 TARGET = 845
 [S11 Area Sync] d_91 REFERENCE = 845
 [StateManager] Skipped listener for d_91 (quarantine active)
 [S11 Area Sync] d_92 TARGET = 120
 [S11 Area Sync] d_92 REFERENCE = 120
 [StateManager] Skipped listener for d_92 (quarantine active)
 [S11 Area Sync] d_93 TARGET = 0
 [S11 Area Sync] d_93 REFERENCE = 0
 [StateManager] Skipped listener for d_93 (quarantine active)
 [S11 Area Sync] Refreshing UI...
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
 [StateManager] Skipped listener for ref_d_98 (quarantine active)
 [StateManager] Skipped listener for ref_i_98 (quarantine active)
 [StateManager] Skipped listener for ref_k_98 (quarantine active)
 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
 [StateManager] Skipped listener for ref_i_97 (quarantine active)
 [StateManager] Skipped listener for ref_k_97 (quarantine active)
 [StateManager] Skipped listener for ref_i_85 (quarantine active)
 [StateManager] Skipped listener for ref_k_85 (quarantine active)
 [StateManager] Skipped listener for ref_i_86 (quarantine active)
 [StateManager] Skipped listener for ref_k_86 (quarantine active)
 [StateManager] Skipped listener for ref_i_88 (quarantine active)
 [StateManager] Skipped listener for ref_k_88 (quarantine active)
 [StateManager] Skipped listener for ref_i_89 (quarantine active)
 [StateManager] Skipped listener for ref_k_89 (quarantine active)
 [StateManager] Skipped listener for ref_i_90 (quarantine active)
 [StateManager] Skipped listener for ref_k_90 (quarantine active)
 [StateManager] Skipped listener for ref_i_91 (quarantine active)
 [StateManager] Skipped listener for ref_k_91 (quarantine active)
 [StateManager] Skipped listener for ref_i_92 (quarantine active)
 [StateManager] Skipped listener for ref_k_92 (quarantine active)
 [StateManager] Skipped listener for ref_i_94 (quarantine active)
 [StateManager] Skipped listener for ref_k_94 (quarantine active)
 [StateManager] Skipped listener for ref_i_95 (quarantine active)
 [StateManager] Skipped listener for ref_k_95 (quarantine active)
 [StateManager] Skipped listener for ref_d_85 (quarantine active)
 [StateManager] Skipped listener for ref_d_86 (quarantine active)
 [StateManager] Skipped listener for ref_d_87 (quarantine active)
 [StateManager] Skipped listener for ref_d_88 (quarantine active)
 [StateManager] Skipped listener for ref_d_89 (quarantine active)
 [StateManager] Skipped listener for ref_d_90 (quarantine active)
 [StateManager] Skipped listener for ref_d_91 (quarantine active)
 [StateManager] Skipped listener for ref_d_92 (quarantine active)
 [StateManager] Skipped listener for ref_d_93 (quarantine active)
 [StateManager] Skipped listener for ref_d_94 (quarantine active)
 [StateManager] Skipped listener for ref_d_95 (quarantine active)
 [StateManager] Skipped listener for ref_d_96 (quarantine active)
 [StateManager] Skipped listener for ref_f_85 (quarantine active)
 [StateManager] Skipped listener for ref_f_86 (quarantine active)
 [StateManager] Skipped listener for ref_f_87 (quarantine active)
 [StateManager] Skipped listener for ref_f_89 (quarantine active)
 [StateManager] Skipped listener for ref_f_90 (quarantine active)
 [StateManager] Skipped listener for ref_f_91 (quarantine active)
 [StateManager] Skipped listener for ref_f_92 (quarantine active)
 [StateManager] Skipped listener for ref_f_93 (quarantine active)
 [StateManager] Skipped listener for ref_f_94 (quarantine active)
 [StateManager] Skipped listener for ref_f_95 (quarantine active)
 [StateManager] Skipped listener for ref_g_88 (quarantine active)
 [StateManager] Skipped listener for ref_g_89 (quarantine active)
 [StateManager] Skipped listener for ref_g_90 (quarantine active)
 [StateManager] Skipped listener for ref_g_91 (quarantine active)
 [StateManager] Skipped listener for ref_g_92 (quarantine active)
 [StateManager] Skipped listener for ref_g_93 (quarantine active)
 [StateManager] Skipped listener for ref_d_97 (quarantine active)
 [StateManager] Skipped listener for g_85 (quarantine active)
 [StateManager] Skipped listener for f_85 (quarantine active)
 [StateManager] Skipped listener for e_85 (quarantine active)
 [StateManager] Skipped listener for i_85 (quarantine active)
 [StateManager] Skipped listener for k_85 (quarantine active)
 [StateManager] Skipped listener for g_86 (quarantine active)
 [StateManager] Skipped listener for f_86 (quarantine active)
 [StateManager] Skipped listener for e_86 (quarantine active)
 [StateManager] Skipped listener for i_86 (quarantine active)
 [StateManager] Skipped listener for k_86 (quarantine active)
 [StateManager] Skipped listener for f_87 (quarantine active)
 [StateManager] Skipped listener for g_88 (quarantine active)
 [StateManager] Skipped listener for f_88 (quarantine active)
 [StateManager] Skipped listener for e_88 (quarantine active)
 [StateManager] Skipped listener for i_88 (quarantine active)
 [StateManager] Skipped listener for k_88 (quarantine active)
 [StateManager] Skipped listener for g_89 (quarantine active)
 [StateManager] Skipped listener for f_89 (quarantine active)
 [StateManager] Skipped listener for e_89 (quarantine active)
 [StateManager] Skipped listener for i_89 (quarantine active)
 [StateManager] Skipped listener for k_89 (quarantine active)
 [StateManager] Skipped listener for g_90 (quarantine active)
 [StateManager] Skipped listener for f_90 (quarantine active)
 [StateManager] Skipped listener for e_90 (quarantine active)
 [StateManager] Skipped listener for i_90 (quarantine active)
 [StateManager] Skipped listener for k_90 (quarantine active)
 [StateManager] Skipped listener for g_91 (quarantine active)
 [StateManager] Skipped listener for f_91 (quarantine active)
 [StateManager] Skipped listener for e_91 (quarantine active)
 [StateManager] Skipped listener for i_91 (quarantine active)
 [StateManager] Skipped listener for k_91 (quarantine active)
 [StateManager] Skipped listener for g_92 (quarantine active)
 [StateManager] Skipped listener for f_92 (quarantine active)
 [StateManager] Skipped listener for e_92 (quarantine active)
 [StateManager] Skipped listener for i_92 (quarantine active)
 [StateManager] Skipped listener for k_92 (quarantine active)
 [StateManager] Skipped listener for g_93 (quarantine active)
 [StateManager] Skipped listener for f_93 (quarantine active)
 [StateManager] Skipped listener for g_94 (quarantine active)
 [StateManager] Skipped listener for f_94 (quarantine active)
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [StateManager] Skipped listener for e_94 (quarantine active)
 [StateManager] Skipped listener for i_94 (quarantine active)
 [StateManager] Skipped listener for k_94 (quarantine active)
 [StateManager] Skipped listener for g_95 (quarantine active)
 [StateManager] Skipped listener for f_95 (quarantine active)
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [StateManager] Skipped listener for e_95 (quarantine active)
 [StateManager] Skipped listener for i_95 (quarantine active)
 [StateManager] Skipped listener for k_95 (quarantine active)
 [StateManager] Skipped listener for e_97 (quarantine active)
 [StateManager] Skipped listener for i_97 (quarantine active)
 [StateManager] Skipped listener for k_97 (quarantine active)
 [StateManager] Skipped listener for d_98 (quarantine active)
 [StateManager] Skipped listener for i_98 (quarantine active)
 [StateManager] Skipped listener for k_98 (quarantine active)
 [StateManager] Skipped listener for h_85 (quarantine active)
 [StateManager] Skipped listener for j_85 (quarantine active)
 [StateManager] Skipped listener for l_85 (quarantine active)
 [StateManager] Skipped listener for m_85 (quarantine active)
 [StateManager] Skipped listener for h_86 (quarantine active)
 [StateManager] Skipped listener for j_86 (quarantine active)
 [StateManager] Skipped listener for l_86 (quarantine active)
 [StateManager] Skipped listener for m_86 (quarantine active)
 [StateManager] Skipped listener for h_88 (quarantine active)
 [StateManager] Skipped listener for j_88 (quarantine active)
 [StateManager] Skipped listener for l_88 (quarantine active)
 [StateManager] Skipped listener for m_88 (quarantine active)
 [StateManager] Skipped listener for h_89 (quarantine active)
 [StateManager] Skipped listener for j_89 (quarantine active)
 [StateManager] Skipped listener for l_89 (quarantine active)
 [StateManager] Skipped listener for m_89 (quarantine active)
 [StateManager] Skipped listener for h_90 (quarantine active)
 [StateManager] Skipped listener for j_90 (quarantine active)
 [StateManager] Skipped listener for l_90 (quarantine active)
 [StateManager] Skipped listener for m_90 (quarantine active)
 [StateManager] Skipped listener for h_91 (quarantine active)
 [StateManager] Skipped listener for j_91 (quarantine active)
 [StateManager] Skipped listener for l_91 (quarantine active)
 [StateManager] Skipped listener for m_91 (quarantine active)
 [StateManager] Skipped listener for h_92 (quarantine active)
 [StateManager] Skipped listener for j_92 (quarantine active)
 [StateManager] Skipped listener for l_92 (quarantine active)
 [StateManager] Skipped listener for m_92 (quarantine active)
 [StateManager] Skipped listener for m_93 (quarantine active)
 [StateManager] Skipped listener for h_94 (quarantine active)
 [StateManager] Skipped listener for j_94 (quarantine active)
 [StateManager] Skipped listener for l_94 (quarantine active)
 [StateManager] Skipped listener for m_94 (quarantine active)
 [StateManager] Skipped listener for h_95 (quarantine active)
 [StateManager] Skipped listener for j_95 (quarantine active)
 [StateManager] Skipped listener for l_95 (quarantine active)
 [StateManager] Skipped listener for m_95 (quarantine active)
 [StateManager] Skipped listener for j_97 (quarantine active)
 [StateManager] Skipped listener for l_97 (quarantine active)
 [StateManager] Skipped listener for m_97 (quarantine active)
 [S11 Area Sync] Sync completed successfully
 [FileHandler] ✅ PHASE 2.5: S11 window area sync complete
 [FileHandler] ✅ Pattern A sections synced with imported values
 [StateManager] 🔓 Listeners UNMUTED (import quarantine ended)
 [FileHandler] 🔓 IMPORT QUARANTINE END - Unmuting listeners
 [FileHandler] Triggering post-import calculation with fresh values...
 [CLOCK] Starting current calculation timing
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section10.js:2803 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2815
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section13.js:3288
storeReferenceResults @ 4012-Section13.js:3286
calculateReferenceModel @ 4012-Section13.js:3046
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:647
calculateFreeCooling @ 4012-Section13.js:2910
calculateReferenceModel @ 4012-Section13.js:3038
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2387
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateThermalBridgePenalty @ 4012-Section11.js:1595
calculateTargetModel @ 4012-Section11.js:1925
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_97 changed.
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateTargetModel @ 4012-Section11.js:1937
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateTargetModel @ 4012-Section11.js:1937
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateTargetModel @ 4012-Section11.js:1937
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:438
setCalculatedValue @ 4012-Section11.js:1089
calculateTargetModel @ 4012-Section11.js:1937
calculateAll @ 4012-Section11.js:2050
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1751
calculateTargetModel @ 4012-Section03.js:1748
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 S10: Target listener triggered by j_19, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg TGT: TB%=30 → g_101=0.676346, g_102=0.371429
 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_103 changed.
 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (3920*0.6763455491781712*24)/1000 = 63.63058926668235
 [S12DB] TGT i_101 result: 63.63058926668235 * 16633 = 1058367.5912727276
 [S12DB] TGT g_104 calc: (0.6763455491781712*16633 + 0.37142857142857144*11168)/27801.000001 = 0.5538566887752582
 [S12DB] TGT ROW104: i_101=1058367.5912727276, i_102=195127.296, i_103=608564.0435368421 → i_104=1862058.9308095698
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=20823.55870129871 → k_104=20823.55870129871
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1699
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1699
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=613339.08, ref_k_97=-9230.99
 [S11] Writing ref penalty: ref_i_97=613339.08, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1718
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1718
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=-9230.99
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=-9230.99
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_97 changed.
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=-9230.99
 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=-9230.99
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2299
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2299
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2303
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2303
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_j_19, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_71, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
4012-Section07.js:913 [S07] 🔥 Gas calc: demand=292434.89361702127, afue=0.94 → e_51=30025.82661571028, k_54=0 (cleared)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2803 S10: Target listener triggered by i_71, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section13.js:638
calculateVentilationEnergy @ 4012-Section13.js:2668
calculateTargetModel @ 4012-Section13.js:3085
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency m_121 changed.
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1917
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section14.js:412
calculateValues @ 4012-Section14.js:1177
calculateTargetModel @ 4012-Section14.js:1135
calculateAll @ 4012-Section14.js:944
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2536
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2806
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1912
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1912
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1912
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1912
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section09.js:710
(anonymous) @ 4012-Section09.js:1959
calculateTargetModel @ 4012-Section09.js:1958
(anonymous) @ 4012-Section09.js:2287
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setSectionValue @ 4012-Section07.js:692
calculateEmissionsAndLosses @ 4012-Section07.js:964
calculateTargetModel @ 4012-Section07.js:1030
calculateAll @ 4012-Section07.js:1113
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section09.js:1893
calculateAll @ 4012-Section09.js:2128
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 [S07] calculateEmissionsAndLosses: systemType="Gas" (REF)
 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87344.26468359375, k_54=0 (cleared)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_71, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.879413, g_102=0.428608
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=3920, d_21=410
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (3920*0.8794130088475913*24)/1000 = 82.73517587238139
4012-Section12.js:2038 [S12DB] REF i_101 result: 82.73517587238139 * 16633 = 1376134.1802853197
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0.8794130088475913*16633 + 0.4286076715786601*11168)/27801.000001 = 0.6983190191595318
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=1376134.1802853197, i_102=225165.91999999998, i_103=608564.0435368421 → i_104=2209864.1438221615
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="Capacitance", k_98=31621.81433962265 → k_104=31621.81433962265
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=30 → g_101=0.676346, g_102=0.371429
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (3920*0.6763455491781712*24)/1000 = 63.63058926668235
4012-Section12.js:2045 [S12DB] TGT i_101 result: 63.63058926668235 * 16633 = 1058367.5912727276
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.6763455491781712*16633 + 0.37142857142857144*11168)/27801.000001 = 0.5538566887752582
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=1058367.5912727276, i_102=195127.296, i_103=608564.0435368421 → i_104=1862058.9308095698
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=20823.55870129871 → k_104=20823.55870129871
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
4012-Section07.js:913 [S07] 🔥 Gas calc: demand=292434.89361702127, afue=0.94 → e_51=30025.82661571028, k_54=0 (cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (REF)
4012-Section07.js:913 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87344.26468359375, k_54=0 (cleared)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4011-FileHandler.js:203 [FileHandler] 🔄 Refreshing Pattern A section UIs after import...
4012-Section02.js:1900 [S02] Refreshing UI for TARGET mode
4012-Section02.js:1958 [S02] Updated h_12 (reporting year) slider = "2023" (target mode)
 [S02] Updated h_13 (service life) slider = "50" (target mode)
 [S02] Updated h_15 = "11,167.00" (target mode)
 [S02] Updated i_17 = "XXXX" (target mode)
 [S02] Updated l_12 = "$0.1300" (target mode)
 [S02] Updated l_13 = "$0.5070" (target mode)
 [S02] Updated l_14 = "$1.6200" (target mode)
 [S02] Updated l_15 = "$180.00" (target mode)
 [S02] Updated l_16 = "$1.5000" (target mode)
 [FileHandler] ✅ sect02 UI refreshed
 Section03: Province selected: ON
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 Section03: Province selected: ON
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 City dropdown updated for ON - selected: Milton
 Section03: Province selected: ON
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 City dropdown updated for ON - selected: Milton
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 City dropdown updated for ON - selected: Milton
 [FileHandler] ✅ sect03 UI refreshed
 [FileHandler] ✅ sect04 UI refreshed
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [FileHandler] ✅ sect05 UI refreshed
 🔄 [S06] updateCalculatedDisplayValues: mode=target
 [FileHandler] ✅ sect06 UI refreshed
 🔄 [S07] refreshUI: Starting refresh for mode=target
 🔍 [S07] refreshUI: fieldId=d_49, storedValue=User Defined, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 📋 [S07] refreshUI: fieldId=d_49, default=User Defined, valueToShow=User Defined, elementType=SELECT
 🔽 [S07] refreshUI: Setting dropdown d_49 from "User Defined" to "User Defined" (mode=target)
 🔽 [S07] refreshUI: Dropdown d_49 now shows "User Defined"
 🔍 [S07] refreshUI: fieldId=e_49, storedValue=15, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=e_49
 ✅ [S07] getFieldDefault: Found default for e_49 = "40.00"
 📋 [S07] refreshUI: fieldId=e_49, default=40.00, valueToShow=15, elementType=TD
 ✏️ [S07] refreshUI: Setting contenteditable e_49 = "15"
 🔍 [S07] refreshUI: fieldId=h_49, storedValue=15, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=h_49
 ✅ [S07] getFieldDefault: Found default for h_49 = "40.00"
 📋 [S07] refreshUI: fieldId=h_49, default=40.00, valueToShow=15, elementType=TD
 🔍 [S07] refreshUI: fieldId=i_49, storedValue=13140000, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=i_49
 ✅ [S07] getFieldDefault: Found default for i_49 = "1,839,600"
 📋 [S07] refreshUI: fieldId=i_49, default=1,839,600, valueToShow=13140000, elementType=TD
 🔍 [S07] refreshUI: fieldId=k_49, storedValue=57679.612928779454, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=k_49
 ✅ [S07] getFieldDefault: Found default for k_49 = "0.00"
 📋 [S07] refreshUI: fieldId=k_49, default=0.00, valueToShow=57679.612928779454, elementType=TD
 🔍 [S07] refreshUI: fieldId=n_49, storedValue=5%, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=n_49
 ✅ [S07] getFieldDefault: Found default for n_49 = "15%"
 📋 [S07] refreshUI: fieldId=n_49, default=15%, valueToShow=5%, elementType=TD
 🔍 [S07] refreshUI: fieldId=e_50, storedValue=10000, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=e_50
 ✅ [S07] getFieldDefault: Found default for e_50 = "10,000.00"
 📋 [S07] refreshUI: fieldId=e_50, default=10,000.00, valueToShow=10000, elementType=TD
 ✏️ [S07] refreshUI: Setting contenteditable e_50 = "10000"
 🔍 [S07] refreshUI: fieldId=h_50, storedValue=6, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=h_50
 ✅ [S07] getFieldDefault: Found default for h_50 = "16.00"
 📋 [S07] refreshUI: fieldId=h_50, default=16.00, valueToShow=6, elementType=TD
 🔍 [S07] refreshUI: fieldId=i_50, storedValue=5256000, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=i_50
 ✅ [S07] getFieldDefault: Found default for i_50 = "735,840"
 📋 [S07] refreshUI: fieldId=i_50, default=735,840, valueToShow=5256000, elementType=TD
 🔍 [S07] refreshUI: fieldId=j_50, storedValue=274888.8, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=j_50
 ✅ [S07] getFieldDefault: Found default for j_50 = "38,484.43"
 📋 [S07] refreshUI: fieldId=j_50, default=38,484.43, valueToShow=274888.8, elementType=TD
 🔍 [S07] refreshUI: fieldId=n_50, storedValue=5%, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=n_50
 ✅ [S07] getFieldDefault: Found default for n_50 = "15%"
 📋 [S07] refreshUI: fieldId=n_50, default=15%, valueToShow=5%, elementType=TD
 🔍 [S07] refreshUI: fieldId=d_51, storedValue=Gas, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 📋 [S07] refreshUI: fieldId=d_51, default=Heatpump, valueToShow=Gas, elementType=SELECT
 🔽 [S07] refreshUI: Setting dropdown d_51 from "Gas" to "Gas" (mode=target)
 🔽 [S07] refreshUI: Dropdown d_51 now shows "Gas"
 🔍 [S07] refreshUI: fieldId=e_51, storedValue=30025.82661571028, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=e_51
 ✅ [S07] getFieldDefault: Found default for e_51 = "0.00"
 📋 [S07] refreshUI: fieldId=e_51, default=0.00, valueToShow=30025.82661571028, elementType=TD
 🔍 [S07] refreshUI: fieldId=j_51, storedValue=292434.89361702127, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=j_51
 ✅ [S07] getFieldDefault: Found default for j_51 = "12,828.14"
 📋 [S07] refreshUI: fieldId=j_51, default=12,828.14, valueToShow=292434.89361702127, elementType=TD
 🔍 [S07] refreshUI: fieldId=k_51, storedValue=null, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=k_51
 ✅ [S07] getFieldDefault: Found default for k_51 = "12,828.14"
 📋 [S07] refreshUI: fieldId=k_51, default=12,828.14, valueToShow=12,828.14, elementType=TD
 🔍 [S07] refreshUI: fieldId=d_52, storedValue=94, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_52
 ✅ [S07] getFieldDefault: Found default for d_52 = "300"
 📋 [S07] refreshUI: fieldId=d_52, default=300, valueToShow=94, elementType=range
 🎚️ [S07] refreshUI: Setting slider d_52 = "94"
 🎚️ [S07] refreshUI: Updating d_52 slider range for system="Gas"
 🎚️ [S07] refreshUI: d_52 slider range updated to min=50, max=98, step=1
 🔍 [S07] refreshUI: fieldId=e_52, storedValue=0.94, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=e_52
 ✅ [S07] getFieldDefault: Found default for e_52 = "3.00"
 📋 [S07] refreshUI: fieldId=e_52, default=3.00, valueToShow=0.94, elementType=TD
 🔍 [S07] refreshUI: fieldId=j_52, storedValue=292434.89361702127, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=j_52
 ✅ [S07] getFieldDefault: Found default for j_52 = "12,828.14"
 📋 [S07] refreshUI: fieldId=j_52, default=12,828.14, valueToShow=292434.89361702127, elementType=TD
 🔍 [S07] refreshUI: fieldId=k_52, storedValue=0.94, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=k_52
 ✅ [S07] getFieldDefault: Found default for k_52 = "0.90"
 📋 [S07] refreshUI: fieldId=k_52, default=0.90, valueToShow=0.94, elementType=TD
 ✏️ [S07] refreshUI: Setting contenteditable k_52 = "0.94"
 🔍 [S07] refreshUI: fieldId=n_52, storedValue=104%, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=n_52
 ✅ [S07] getFieldDefault: Found default for n_52 = "100%"
 📋 [S07] refreshUI: fieldId=n_52, default=100%, valueToShow=104%, elementType=TD
 🔍 [S07] refreshUI: fieldId=d_53, storedValue=0, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_53
 ✅ [S07] getFieldDefault: Found default for d_53 = "0"
 📋 [S07] refreshUI: fieldId=d_53, default=0, valueToShow=0, elementType=range
 🎚️ [S07] refreshUI: Setting slider d_53 = "0"
 🔍 [S07] refreshUI: fieldId=e_53, storedValue=null, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=e_53
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for e_53 = "0.00"
4012-Section07.js:208 📋 [S07] refreshUI: fieldId=e_53, default=0.00, valueToShow=0.00, elementType=TD
4012-Section07.js:175 🔍 [S07] refreshUI: fieldId=j_53, storedValue=292434.89361702127, elementFound=true
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=j_53
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for j_53 = "12,828.14"
4012-Section07.js:208 📋 [S07] refreshUI: fieldId=j_53, default=12,828.14, valueToShow=292434.89361702127, elementType=TD
4012-Section07.js:175 🔍 [S07] refreshUI: fieldId=n_53, storedValue=0%, elementFound=true
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=n_53
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for n_53 = "0%"
4012-Section07.js:208 📋 [S07] refreshUI: fieldId=n_53, default=0%, valueToShow=0%, elementType=TD
4012-Section07.js:175 🔍 [S07] refreshUI: fieldId=d_54, storedValue=27488.88, elementFound=true
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_54
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_54 = "0.00"
4012-Section07.js:208 📋 [S07] refreshUI: fieldId=d_54, default=0.00, valueToShow=27488.88, elementType=TD
4012-Section07.js:175 🔍 [S07] refreshUI: fieldId=j_54, storedValue=17546.09361702129, elementFound=true
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=j_54
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for j_54 = "0.00"
4012-Section07.js:208 📋 [S07] refreshUI: fieldId=j_54, default=0.00, valueToShow=17546.09361702129, elementType=TD
4012-Section07.js:175 🔍 [S07] refreshUI: fieldId=k_54, storedValue=null, elementFound=true
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=k_54
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for k_54 = "0.00"
4012-Section07.js:208 📋 [S07] refreshUI: fieldId=k_54, default=0.00, valueToShow=0.00, elementType=TD
4012-Section07.js:288 ✅ [S07] refreshUI: Completed refresh for mode=target
4011-FileHandler.js:230 [FileHandler] ✅ sect07 UI refreshed
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4011-FileHandler.js:230 [FileHandler] ✅ sect09 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect10 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect11 UI refreshed
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4011-FileHandler.js:230 [FileHandler] ✅ sect12 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect13 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect15 UI refreshed
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=159.67852622110752, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=153.6 (ref), h_6=88.9 (target) → reduction should be 42%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 511.4 (from j_32=5710470.347823744, area=11167)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=88.9, ref=153.6, reduction=0.42122395833333326, percent=42%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 93ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 93ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section11.js:396 S11: Switched to REFERENCE mode
4012-Section11.js:1223 [S11 Area Sync] Starting sync in reference mode
4012-Section11.js:1273 [S11 Area Sync] d_88 = 0 (from ref_d_73)
4012-Section11.js:1273 [S11 Area Sync] d_89 = 914 (from ref_d_74)
4012-Section11.js:1273 [S11 Area Sync] d_90 = 846 (from ref_d_75)
4012-Section11.js:1273 [S11 Area Sync] d_91 = 845 (from ref_d_76)
4012-Section11.js:1273 [S11 Area Sync] d_92 = 120 (from ref_d_77)
4012-Section11.js:1273 [S11 Area Sync] d_93 = 0 (from ref_d_78)
4012-Section11.js:1285 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1289 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1292 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section12.js:198 S12: Switched to REFERENCE mode
4012-Section12.js:316 [Section12] Calculated display values updated for reference mode
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 1.5
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed d_103=1.5 through sect12 ModeManager
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 1.5
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.879413, g_102=0.428608
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=3920, d_21=410
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (3920*0.8794130088475913*24)/1000 = 82.73517587238139
4012-Section12.js:2038 [S12DB] REF i_101 result: 82.73517587238139 * 16633 = 1376134.1802853197
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0.8794130088475913*16633 + 0.4286076715786601*11168)/27801.000001 = 0.6983190191595318
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=1376134.1802853197, i_102=225165.91999999998, i_103=539593.4519360001 → i_104=2140893.5522213196
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="Capacitance", k_98=31621.81433962265 → k_104=31621.81433962265
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=30 → g_101=0.676346, g_102=0.371429
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (3920*0.6763455491781712*24)/1000 = 63.63058926668235
4012-Section12.js:2045 [S12DB] TGT i_101 result: 63.63058926668235 * 16633 = 1058367.5912727276
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.6763455491781712*16633 + 0.37142857142857144*11168)/27801.000001 = 0.5538566887752582
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=1058367.5912727276, i_102=195127.296, i_103=608564.0435368421 → i_104=1862058.9308095698
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=20823.55870129871 → k_104=20823.55870129871
4012-Section12.js:316 [Section12] Calculated display values updated for reference mode