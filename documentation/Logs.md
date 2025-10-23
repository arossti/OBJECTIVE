4011-MobileDetect.js:113 Desktop device detected
4012-Section02.js:1679 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1788 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
4012-Section02.js:757 ✅ S02: Header controls injected successfully
4012-Section02.js:1465 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
4012-Section03.js:53 S03: Target defaults set from field definitions - single source of truth
4012-Section03.js:135 S03: Reference defaults set from field definitions - single source of truth
4012-Section03.js:2158 S03: Header controls setup complete
4012-Section03.js:2465 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:487 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:495 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2437 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2276 S03: Sliders initialized via FieldManager
4012-Section03.js:1170 Section03: Province selected: ON
4012-Section03.js:1231 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1905 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:2625 S12: Section rendered - initializing Pattern A Dual-State Module.
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_d_103=1 to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_g_103=Exposed to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_d_105=8200.00 to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_d_108=MEASURED to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_g_109=2.00 to StateManager
4012-Section12.js:127 S12: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section12.js:2831 [S12] ✅ CLIMATE LISTENERS ADDED - Ready for d_20/d_21 changes
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
4012-Section12.js:2035 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
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
4012-Section12.js:1286 DOM element not found for calculated field: d_102
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
4012-Section12.js:1286 DOM element not found for calculated field: d_106
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
4012-Section12.js:1286 DOM element not found for calculated field: g_105
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
4012-Section12.js:1286 DOM element not found for calculated field: i_105
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
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_101
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
4012-Section12.js:1286 DOM element not found for calculated field: g_102
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
4012-Section12.js:1286 DOM element not found for calculated field: g_104
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
4012-Section12.js:1286 DOM element not found for calculated field: d_107
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
4012-Section12.js:1286 DOM element not found for calculated field: l_107
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
4012-Section12.js:1286 DOM element not found for calculated field: d_109
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
4012-Section12.js:1286 DOM element not found for calculated field: l_109
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
4012-Section12.js:1286 DOM element not found for calculated field: d_110
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
4012-Section12.js:1286 DOM element not found for calculated field: l_110
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
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1286 DOM element not found for calculated field: i_103
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
4012-Section12.js:1286 DOM element not found for calculated field: k_103
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
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:1286 DOM element not found for calculated field: h_101
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
4012-Section12.js:1286 DOM element not found for calculated field: i_101
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
4012-Section12.js:1286 DOM element not found for calculated field: j_101
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
4012-Section12.js:1286 DOM element not found for calculated field: k_101
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
4012-Section12.js:1286 DOM element not found for calculated field: h_102
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
4012-Section12.js:1286 DOM element not found for calculated field: i_102
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
4012-Section12.js:1286 DOM element not found for calculated field: j_102
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
4012-Section12.js:1286 DOM element not found for calculated field: k_102
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
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:1286 DOM element not found for calculated field: i_104
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
4012-Section12.js:1286 DOM element not found for calculated field: k_104
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
4012-Section12.js:1286 DOM element not found for calculated field: l_101
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
4012-Section12.js:1286 DOM element not found for calculated field: l_102
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
4012-Section12.js:1286 DOM element not found for calculated field: l_103
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
4012-Section12.js:1286 DOM element not found for calculated field: l_104
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
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:2665 S12: Pattern A initialization complete.
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=0
4012-Section12.js:2035 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
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
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
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
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=0
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=0, d_22=1960, h_22=-1680
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
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
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
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
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
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
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
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
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
4012-Section10.js:2902 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2877 S10: Simplified global StateManager listeners added
4012-Section10.js:2926 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 88.64 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*88.64 + 0*1e-7)/88.64000109999999 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031936 → i_104=36440.07984031936
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 92.47 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*92.47 + 0*1e-7)/92.47000109999999 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031936 → i_104=36440.07984031936
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1286
calculateWWR @ 4012-Section12.js:1705
calculateTargetModel @ 4012-Section12.js:2423
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1286
calculateWWR @ 4012-Section12.js:1712
calculateTargetModel @ 4012-Section12.js:2423
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1800
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 251.47 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*251.47 + 0*1e-7)/251.4700011 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 352.13 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 352.13 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 352.13 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2258
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2259
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 352.13 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 352.13 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 92.47 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*92.47 + 0*1e-7)/92.47000109999999 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=865.415545005988 → i_104=865.415545005988
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section12.js:2384
storeReferenceResults @ 4012-Section12.js:2382
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 352.13 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateReferenceModel @ 4012-Section12.js:2309
calculateAll @ 4012-Section12.js:2275
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2932
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2038 [S12DB] REF i_101 result: 0 * 7.5 = 0
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0*7.5 + 0*1e-7)/7.5000011 = 0
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2045 [S12DB] TGT i_101 result: 0 * 352.13 = 0
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2365 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1677
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:1286 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2059
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2071
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2256
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2258
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2763
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1428
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1433
(anonymous) @ 4012-Section11.js:1920
calculateTargetModel @ 4012-Section11.js:1919
calculateAll @ 4012-Section11.js:2054
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1884
calculateAll @ 4012-Section11.js:2053
(anonymous) @ 4012-Section11.js:2273
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2839 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2839 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_f_85=5.3 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_f_86=4.1 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_f_87=6.6 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_f_94=1.8 to StateManager
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_f_95=3.5 to StateManager
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_g_88=1.99 to StateManager
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_g_89=1.42 to StateManager
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_g_90=1.42 to StateManager
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_g_91=1.42 to StateManager
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_g_92=1.42 to StateManager
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:266
setDefaults @ 4012-Section11.js:263
initialize @ 4012-Section11.js:204
initialize @ 4012-Section11.js:381
onSectionRendered @ 4012-Section11.js:2370
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:271 [S11 REF DEFAULTS] Published ref_g_93=1.42 to StateManager
4012-Section11.js:278 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2387 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2395 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1218 [S11 Area Sync] DUAL-STATE SYNC - populating BOTH Target and Reference states
4012-Section11.js:1221 [S11 Area Sync] Reason: d_88=undefined, ref_d_73 in StateManager=7.50
4012-Section11.js:1251 [S11 Area Sync] d_88 REFERENCE = 7.50
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.084633, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.0846332320449834*24)/1000 = 230.14350881776616
4012-Section12.js:2038 [S12DB] REF i_101 result: 230.14350881776616 * 2476.6199999999994 = 569978.0168082559
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.0846332320449834*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.4433286610448632
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=569978.0168082559, i_102=0, i_103=36440.079840319355 → i_104=606418.0966485753
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=24286.019846612646
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.194961, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.194960972637321*24)/1000 = 242.32369137916024
4012-Section12.js:2038 [S12DB] REF i_101 result: 242.32369137916024 * 2476.6199999999994 = 600143.7005434557
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.194960972637321*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.5197158104279866
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=600143.7005434557, i_102=0, i_103=36440.079840319355 → i_104=636583.780383775
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25571.3402840255
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 344.63 = 41090.92415999999
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*344.63 + 0*1e-7)/344.6300011 = 1.0799999965528246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41090.92415999999, i_102=0, i_103=3225.3504842155694 → i_104=44316.274644215555
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1750.8306815999997
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1251 [S11 Area Sync] d_89 REFERENCE = 81.14
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=1.657403, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*1.6574026637889414*24)/1000 = 182.97725408229914
4012-Section12.js:2038 [S12DB] REF i_101 result: 182.97725408229914 * 2476.6199999999994 = 453165.12700530357
4012-Section12.js:2190 [S12DB] REF g_104 calc: (1.6574026637889414*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.1475288462095585
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=453165.12700530357, i_102=0, i_103=36440.079840319355 → i_104=489605.2068456229
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=19308.774976747718
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.791429, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.7914292040296687*24)/1000 = 308.17378412487545
4012-Section12.js:2038 [S12DB] REF i_101 result: 308.17378412487545 * 2476.6199999999994 = 763229.3572393488
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.7914292040296687*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.932689987629791
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=763229.3572393488, i_102=0, i_103=36440.079840319355 → i_104=799669.4370796682
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=32520.20739541573
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 270.99 = 32310.679679999994
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*270.99 + 0*1e-7)/270.99000110000003 = 1.0799999956160742
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=32310.679679999994, i_102=0, i_103=2536.1626315688627 → i_104=34846.84231156886
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1376.7159167999998
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1251 [S11 Area Sync] d_90 REFERENCE = 3.83
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.125043, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.125043307869253*24)/1000 = 234.60478118876554
4012-Section12.js:2038 [S12DB] REF i_101 result: 234.60478118876554 * 2476.6199999999994 = 581026.8931877203
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.125043307869253*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.4713072136917231
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=581026.8931877203, i_102=0, i_103=36440.079840319355 → i_104=617466.9730280397
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=24756.798057563738
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.171833, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.171832902670112*24)/1000 = 239.77035245478038
4012-Section12.js:2038 [S12DB] REF i_101 result: 239.77035245478038 * 2476.6199999999994 = 593820.0502965581
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.171832902670112*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.5037027268096388
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=593820.0502965581, i_102=0, i_103=36440.079840319355 → i_104=630260.1301368774
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25301.897795244648
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.08*24)/1000 = 119.232
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.232 * 348.29999999999995 = 41528.5056
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.08*348.29999999999995 + 0*1e-7)/348.3000011 = 1.0799999965891474
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41528.5056, i_102=0, i_103=3259.697570299401 → i_104=44788.2031702994
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1769.4754559999997
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1251 [S11 Area Sync] d_91 REFERENCE = 159.00
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=1.186435, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*1.186435123391929*24)/1000 = 130.98243762246898
4012-Section12.js:2038 [S12DB] REF i_101 result: 130.98243762246898 * 2476.6199999999994 = 324393.72466455906
4012-Section12.js:2190 [S12DB] REF g_104 calc: (1.186435123391929*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0.821447049648165
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=324393.72466455906, i_102=0, i_103=36440.079840319355 → i_104=360833.8045048784
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=13821.993485707297
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=3.916789, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*3.9167886915549106*24)/1000 = 432.4134715476621
4012-Section12.js:2038 [S12DB] REF i_101 result: 432.4134715476621 * 2476.6199999999994 = 1070923.8519043706
4012-Section12.js:2190 [S12DB] REF g_104 calc: (3.9167886915549106*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 2.711850358555362
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=1070923.8519043706, i_102=0, i_103=36440.079840319355 → i_104=1107363.93174469
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=45630.668472447105
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.08*24)/1000 = 119.232
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.232 * 193.13 = 23027.276159999998
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.08*193.13 + 0*1e-7)/193.1300011 = 1.079999993848703
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=23027.276159999998, i_102=0, i_103=1807.4803093652695 → i_104=24834.756469365268
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=981.1622015999999
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1251 [S11 Area Sync] d_92 REFERENCE = 100.66
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=1.539328, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*1.539328089058018*24)/1000 = 169.94182103200518
4012-Section12.js:2038 [S12DB] REF i_101 result: 169.94182103200518 * 2476.6199999999994 = 420881.31280428456
4012-Section12.js:2190 [S12DB] REF g_104 calc: (1.539328089058018*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.0657780541612871
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=420881.31280428456, i_102=0, i_103=36440.079840319355 → i_104=457321.3926446039
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=17933.20376296517
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=3.008110, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*3.0081099137074*24)/1000 = 332.095334473297
4012-Section12.js:2038 [S12DB] REF i_101 result: 332.095334473297 * 2476.6199999999994 = 822473.9472632566
4012-Section12.js:2190 [S12DB] REF g_104 calc: (3.0081099137074*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 2.0827122907217444
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=822473.9472632566, i_102=0, i_103=36440.079840319355 → i_104=858914.027103576
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=35044.54210078224
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1286 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1494
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1512
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1286
calculateVolumeMetrics @ 4012-Section12.js:1518
calculateTargetModel @ 4012-Section12.js:2421
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1286
calculateACH50Target @ 4012-Section12.js:1786
calculateTargetModel @ 4012-Section12.js:2425
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1827
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1286
calculateAe10 @ 4012-Section12.js:1834
calculateTargetModel @ 4012-Section12.js:2426
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2842
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1243
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
4012-Section12.js:1286 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1966
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 251.47 = 29983.271039999992
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*251.47 + 0*1e-7)/251.4700011 = 1.0799999952757784
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=29983.271039999992, i_102=0, i_103=2353.477312670659 → i_104=32336.748352670653
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1277.5480704
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1251 [S11 Area Sync] d_93 REFERENCE = 0.00
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1286 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1286
calculateAirLeakageHeatLoss @ 4012-Section12.js:1972
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:1286 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2065
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2077
calculateTargetModel @ 4012-Section12.js:2433
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2236
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1286 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2242
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1065
(anonymous) @ 4012-Section11.js:1257
syncAreasFromS10 @ 4012-Section11.js:1228
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1287 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1291 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1759
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2773
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2851
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateReferenceModel @ 4012-Section11.js:1759
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=2.148211, g_102=0.000000
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*2.148210604038281*24)/1000 = 237.1624506858262
4012-Section12.js:2038 [S12DB] REF i_101 result: 237.1624506858262 * 2476.6199999999994 = 587361.2686175307
4012-Section12.js:2190 [S12DB] REF g_104 calc: (2.148210604038281*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 1.487347456188899
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=587361.2686175307, i_102=0, i_103=36440.079840319355 → i_104=623801.34845785
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=25026.697532399136
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateCombinedUValue @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2045 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=1788.9330815999997
4012-Section12.js:1286 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1286
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2438
calculateAll @ 4012-Section12.js:2276
(anonymous) @ 4012-Section12.js:2785
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section11.js:1873
calculateReferenceModel @ 4012-Section11.js:1870
calculateAll @ 4012-Section11.js:2053
syncAreasFromS10 @ 4012-Section11.js:1292
onSectionRendered @ 4012-Section11.js:2403
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2839 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2839 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:1294 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2412 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
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
(anonymous) @ 4011-FieldManager.js:1484
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2848 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2839 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency m_121 changed.
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
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
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
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:494 ✅ S15: Header controls injected successfully
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section02.js:1679 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1631 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1788 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
4012-Section02.js:1465 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
4012-Section10.js:2902 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2877 S10: Simplified global StateManager listeners added
4012-Section10.js:2926 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2365 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2387 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2395 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1225 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1275 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1275 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1275 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1275 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1275 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1275 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1287 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1291 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2839 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2839 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1294 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2412 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
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
(anonymous) @ 4011-Calculator.js:992
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2848 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2839 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency m_121 changed.
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
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
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
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
4012-Section02.js:1679 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1631 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1788 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Section02.js:1465 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
4012-Section10.js:2902 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2877 S10: Simplified global StateManager listeners added
4012-Section10.js:2926 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2365 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2387 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2395 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1225 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1275 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1275 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1275 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1275 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1275 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1275 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1287 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1291 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2839 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2839 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1294 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2412 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
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
4012-Section10.js:2848 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2839 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency m_121 changed.
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
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
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
(anonymous) @ 4011-init.js:879
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
(anonymous) @ 4011-init.js:879
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
(anonymous) @ 4011-init.js:879
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
(anonymous) @ 4011-init.js:879
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
(anonymous) @ 4011-init.js:879Understand this warningAI
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
(anonymous) @ 4011-init.js:879Understand this warningAI
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
(anonymous) @ 4011-init.js:879Understand this warningAI
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
(anonymous) @ 4011-init.js:879Understand this warningAI
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
(anonymous) @ 4011-init.js:879Understand this warningAI
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
(anonymous) @ 4011-init.js:879Understand this warningAI
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
(anonymous) @ 4011-init.js:879Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4011-ReferenceToggle.js:200 [ReferenceToggle] Master Reference Toggle initialization complete
4012-Section02.js:1679 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1631 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1788 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
4012-Section02.js:1465 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
4012-Section10.js:2902 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2877 S10: Simplified global StateManager listeners added
4012-Section10.js:2926 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2365 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2387 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2395 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1225 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1275 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1275 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1275 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1275 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1275 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1275 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1287 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1291 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2839 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2839 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1294 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2412 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
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
(anonymous) @ index.html:1067
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2848 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2839 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency m_121 changed.
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
(anonymous) @ index.html:1067
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
(anonymous) @ index.html:1067
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
(anonymous) @ index.html:1067
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
(anonymous) @ index.html:1067
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
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
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
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
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
(anonymous) @ index.html:1067Understand this warningAI
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
(anonymous) @ index.html:1067Understand this warningAI
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
(anonymous) @ index.html:1067Understand this warningAI
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
(anonymous) @ index.html:1067Understand this warningAI
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
(anonymous) @ index.html:1067Understand this warningAI
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
(anonymous) @ index.html:1067Understand this warningAI
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
(anonymous) @ index.html:1067Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section02.js:1679 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1631 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1788 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Section02.js:1465 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
4012-Section10.js:2902 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2877 S10: Simplified global StateManager listeners added
4012-Section10.js:2926 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2365 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1324 [S11] Setting up S10 area listeners...
4012-Section11.js:1359 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2387 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2395 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1225 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1275 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1275 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1275 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1275 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1275 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1275 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1287 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1291 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2839 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2839 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2270 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1294 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2412 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
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
4012-Section10.js:2848 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2839 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency m_121 changed.
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
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
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
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
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
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
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
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
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
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
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
(anonymous) @ index.html:1087
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
(anonymous) @ index.html:1087
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
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
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
(anonymous) @ index.html:1087
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
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
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.91920962886925, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=16.3 (ref), h_6=11.7 (target) → reduction should be 28%
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
updateTEUIDisplay @ 4012-Section01.js:876
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
updateTEUIDisplay @ 4012-Section01.js:876
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
4012-Section01.js:924 🔍 [S01DB] UPDATING h_10: 93.9 (from j_32=134041.4959823222, area=1427.2)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
updateTEUIDisplay @ 4012-Section01.js:933
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
updateTEUIDisplay @ 4012-Section01.js:933
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
updateTEUIDisplay @ 4012-Section01.js:933
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
updateTEUIDisplay @ 4012-Section01.js:933
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
updateTEUIDisplay @ 4012-Section01.js:953
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
updateTEUIDisplay @ 4012-Section01.js:953
(anonymous) @ 4012-Section01.js:1236
setTimeout
runAllCalculations @ 4012-Section01.js:1207
(anonymous) @ 4012-Section01.js:1330
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
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=16.3, reduction=0.28220858895705525, percent=28%
4012-Section01.js:1249 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.666880, g_102=0.428571
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
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
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
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
4012-Section10.js:2848 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_i_103 changed.
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
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
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
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2848 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2869 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2045 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2419
setTimeout
onSectionRendered @ 4012-Section11.js:2418
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4011-Clock.js:41 [CLOCK] Starting initial load timing
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2045 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=65.5, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.6 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:924 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.6, reduction=0.5760869565217392, percent=58%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 612ms (all calculations finalized)
4012-Section01.js:1249 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
console.log("=== FINAL VALIDATION ===");
const sm = window.TEUI.StateManager;
console.log("StateManager e_10:", sm.getValue("e_10"));
console.log("StateManager h_10:", sm.getValue("h_10"));
console.log("DOM e_10:", document.querySelector('[data-field-id="e_10"]')?.textContent);
console.log("DOM h_10:", document.querySelector('[data-field-id="h_10"]')?.textContent);
console.log("\n✅ SUCCESS: Both should show ~287.0 and ~93.7");

VM597:1 === FINAL VALIDATION ===
VM597:3 StateManager e_10: 287
VM597:4 StateManager h_10: 93.72003071129046
VM597:5 DOM e_10: Reference 100% (Baseline) tier1 287.0
VM597:6 DOM h_10: Targeted (Design) 67% Reductiontier4 93.7
VM597:7 
✅ SUCCESS: Both should show ~287.0 and ~93.7
undefined
4012-Section10.js:729 [S10 AREA EVENT] handleFieldBlur: d_73=100 in target mode
4012-Section10.js:303 [S10 MODEMANAGER DEBUG] setValue: d_73=100 in target mode, source=user-modified
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1335 [S11 Listener] d_73 changed to 100 (Target mode)
4012-Section11.js:1335 [S11 Listener] d_73 changed to 100 (Target mode)
4012-Section10.js:320 [S10 MODEMANAGER DEBUG] Target StateManager write: d_73=100
4012-Section10.js:739 [S10 CALC TRIGGER] calculateAll() triggered by d_73 in target mode
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
calculateSubtotals @ 4012-Section10.js:2423
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
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
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2423
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2423
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
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
setValue @ 4012-Section10.js:312
calculateSubtotals @ 4012-Section10.js:2423
calculateTargetModel @ 4012-Section10.js:1930
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4012-Section14.js:1432
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2572
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
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
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2572
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
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
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2572
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
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
setFieldValue @ 4012-Section10.js:593
calculateUtilizationFactors @ 4012-Section10.js:2572
calculateTargetModel @ 4012-Section10.js:1933
calculateAll @ 4012-Section10.js:1907
handleFieldBlur @ 4012-Section10.js:742
(anonymous) @ 4012-Section10.js:2699
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1225 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1275 [S11 Area Sync] d_88 = 100 (from d_73)
4012-Section11.js:1275 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1275 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1275 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1275 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1275 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1287 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1291 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2048 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1515 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1587 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1771 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1520 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2839 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_97 changed.
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateThermalBridgePenalty @ 4012-Section11.js:1599
calculateTargetModel @ 4012-Section11.js:1929
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateThermalBridgePenalty @ 4012-Section11.js:1599
calculateTargetModel @ 4012-Section11.js:1929
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateThermalBridgePenalty @ 4012-Section11.js:1599
calculateTargetModel @ 4012-Section11.js:1929
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateThermalBridgePenalty @ 4012-Section11.js:1599
calculateTargetModel @ 4012-Section11.js:1929
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section10.js:2839 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_98 changed.
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateTargetModel @ 4012-Section11.js:1941
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateTargetModel @ 4012-Section11.js:1941
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateTargetModel @ 4012-Section11.js:1941
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateTargetModel @ 4012-Section11.js:1941
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section11.js:1294 [S11 Area Sync] Sync completed successfully
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=287, h_10=95.4961615928314, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.6 (ref), h_6=11.8 (target) → reduction should be 57%
4012-Section01.js:924 🔍 [S01DB] UPDATING h_10: 95.5 (from j_32=136292.12182528898, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.8, ref=27.6, reduction=0.572463768115942, percent=57%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 208ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 208ms (interaction → h_10 settlement)
4012-Section01.js:1249 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section12.js:1663 [S12] U-agg REF: TB%=50 → g_101=0.683549, g_102=0.428571
4012-Section12.js:1933 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2035 [S12DB] REF h_101 calc: (4600*0.6835491013476673*24)/1000 = 75.46382078878247
4012-Section12.js:2038 [S12DB] REF i_101 result: 75.46382078878247 * 2476.6199999999994 = 186895.2078419144
4012-Section12.js:2190 [S12DB] REF g_104 calc: (0.6835491013476673*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.6051092373032234
4012-Section12.js:2214 [S12DB] REF ROW104: i_101=186895.2078419144, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=245519.75488223377
4012-Section12.js:2217 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:2407 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1663 [S12] U-agg TGT: TB%=20 → g_101=0.307204, g_102=0.324324
4012-Section12.js:1940 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2839 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2860 S10: Target utilization factor dependency i_103 changed.
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section12.js:2018 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2042 [S12DB] TGT h_101 calc: (4600*0.30720442897743927*24)/1000 = 33.915368959109294
4012-Section12.js:2045 [S12DB] TGT i_101 result: 33.915368959109294 * 2569.1199999999994 = 87132.65270022686
4012-Section12.js:2194 [S12DB] TGT g_104 calc: (0.30720442897743927*2569.1199999999994 + 0.3243243243243243*1100.42)/3669.5400009999994 = 0.31233833538676603
4012-Section12.js:2221 [S12DB] TGT ROW104: i_101=87132.65270022686, i_102=16788.24544864865, i_103=24044.083324167663 → i_104=127964.98147304317
4012-Section12.js:2224 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-2901.9613790538333 → k_104=-2901.9613790538333
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
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
(anonymous) @ 4011-SectionIntegrator.js:632
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
(anonymous) @ 4012-Section11.js:1965
calculateTargetModel @ 4012-Section11.js:1951
calculateAll @ 4012-Section11.js:2054
syncAreasFromS10 @ 4012-Section11.js:1292
(anonymous) @ 4012-Section11.js:1312
setTimeout
debouncedSyncAreasFromS10 @ 4012-Section11.js:1311
(anonymous) @ 4012-Section11.js:1338
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section10.js:312
handleFieldBlur @ 4012-Section10.js:735
(anonymous) @ 4012-Section10.js:2699
4012-Cooling.js:475 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=287, h_10=95.7744508196011, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=28.7 (ref), h_6=11.8 (target) → reduction should be 59%
4012-Section01.js:924 🔍 [S01DB] UPDATING h_10: 95.8 (from j_32=136689.2962097347, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.8, ref=28.7, reduction=0.5888501742160279, percent=59%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 442ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 442ms (interaction → h_10 settlement)
4012-Section01.js:1249 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
console.log("=== FINAL VALIDATION ===");
const sm = window.TEUI.StateManager;
console.log("StateManager e_10:", sm.getValue("e_10"));
console.log("StateManager h_10:", sm.getValue("h_10"));
console.log("DOM e_10:", document.querySelector('[data-field-id="e_10"]')?.textContent);
console.log("DOM h_10:", document.querySelector('[data-field-id="h_10"]')?.textContent);
console.log("\n✅ SUCCESS: Both should show ~287.0 and ~93.7");
VM609:1 === FINAL VALIDATION ===
VM609:3 StateManager e_10: 308.4
VM609:4 StateManager h_10: 95.7744508196011
VM609:5 DOM e_10: Reference 100% (Baseline) tier1 308.4
VM609:6 DOM h_10: Targeted (Design) 69% Reductiontier4 95.8
VM609:7 
✅ SUCCESS: Both should show ~287.0 and ~93.7
undefined
console.log("=== S10 REFERENCE AREA DIAGNOSTIC ===");

const sm = window.TEUI.StateManager;
const s10 = window.TEUI.SectionModules.sect10;

console.log("\n--- S10 Internal States ---");
console.log("S10 TargetState d_73:", s10.TargetState?.getValue("d_73"));
console.log("S10 ReferenceState d_73:", s10.ReferenceState?.getValue("d_73"));

console.log("\n--- StateManager Published Values ---");
console.log("SM d_73 (Target):", sm.getValue("d_73"));
console.log("SM ref_d_73 (Reference):", sm.getValue("ref_d_73"));
console.log("SM d_88 (S11 Target ID):", sm.getValue("d_88"));
console.log("SM ref_d_88 (S11 Reference ID):", sm.getValue("ref_d_88"));

console.log("\n--- What S12 Reference Calculation Would Read ---");
const ref_d88_fallback = parseFloat(sm.getValue("ref_d_88")) || parseFloat(sm.getValue("d_88")) || 0;
console.log("S12 reads:", ref_d88_fallback);
console.log("Should read (Reference):", sm.getValue("ref_d_88") || "MISSING!");

console.log("\n=== DIAGNOSIS ===");
if (!sm.getValue("ref_d_88")) {
  console.log("❌ BUG: ref_d_88 is missing/null in StateManager!");
  console.log("→ S10 storeReferenceResults() not publishing ref_d_88");
} else if (sm.getValue("ref_d_88") === sm.getValue("d_88")) {
  console.log("❌ BUG: ref_d_88 equals d_88 (both have Target value)");
} else {
  console.log("✅ ref_d_88 exists and differs from d_88");
}
VM613:1 === S10 REFERENCE AREA DIAGNOSTIC ===
VM613:6 
--- S10 Internal States ---
VM613:7 S10 TargetState d_73: 100
VM613:8 S10 ReferenceState d_73: 7.50
VM613:10 
--- StateManager Published Values ---
VM613:11 SM d_73 (Target): 100
VM613:12 SM ref_d_73 (Reference): 7.50
VM613:13 SM d_88 (S11 Target ID): 100
VM613:14 SM ref_d_88 (S11 Reference ID): 7.50
VM613:16 
--- What S12 Reference Calculation Would Read ---
VM613:18 S12 reads: 7.5
VM613:19 Should read (Reference): 7.50
VM613:21 
=== DIAGNOSIS ===
VM613:28 ✅ ref_d_88 exists and differs from d_88
undefined