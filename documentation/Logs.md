4011-MobileDetect.js:113 Desktop device detected
4012-Section02.js:1655 S02: Target defaults set from field definitions - single source of truth
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1826
onSectionRendered @ 4012-Section02.js:1263
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
 [S12] 🚀 INITIALIZING CLIMATE LISTENERS
 [S12] ✅ CLIMATE LISTENERS ADDED - Ready for d_20/d_21 changes
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1454
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_102
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1460
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1644
calculateTargetModel @ 4012-Section12.js:2389
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_102
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1645
calculateTargetModel @ 4012-Section12.js:2389
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_110
setCalculatedValue @ 4012-Section12.js:1246
calculateNFactor @ 4012-Section12.js:1828
calculateTargetModel @ 4012-Section12.js:2391
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_110
setCalculatedValue @ 4012-Section12.js:1246
calculateNFactor @ 4012-Section12.js:1876
calculateTargetModel @ 4012-Section12.js:2391
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_108
setCalculatedValue @ 4012-Section12.js:1246
calculateACH50Target @ 4012-Section12.js:1739
calculateTargetModel @ 4012-Section12.js:2392
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2026
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2032
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2038
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2044
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: h_102
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2050
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_102
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2056
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_102
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2062
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_102
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2068
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2223
calculateTargetModel @ 4012-Section12.js:2405
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_102
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2224
calculateTargetModel @ 4012-Section12.js:2405
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2778
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] g_104 DISPLAY (target): null
 [Section12] Calculated display values updated for target mode
 DOM element not found for calculated field: d_105
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1486
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2776
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): null
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): null
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1466
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1472
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1478
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1646
calculateTargetModel @ 4012-Section12.js:2389
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1246
calculateWWR @ 4012-Section12.js:1672
calculateTargetModel @ 4012-Section12.js:2390
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1246
calculateWWR @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2390
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1246
calculateAirLeakageHeatLoss @ 4012-Section12.js:1933
calculateTargetModel @ 4012-Section12.js:2394
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1246
calculateAirLeakageHeatLoss @ 4012-Section12.js:1939
calculateTargetModel @ 4012-Section12.js:2394
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2203
calculateTargetModel @ 4012-Section12.js:2405
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2209
calculateTargetModel @ 4012-Section12.js:2405
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2405
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2226
calculateTargetModel @ 4012-Section12.js:2405
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1246
calculateACH50Target @ 4012-Section12.js:1753
calculateTargetModel @ 4012-Section12.js:2392
calculateAll @ 4012-Section12.js:2243
(anonymous) @ 4012-Section12.js:2780
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2623
registerWithStateManager @ 4012-Section12.js:2611
onSectionRendered @ 4012-Section12.js:2592
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: l_109
setCalculatedValue @ 4012-Section12.js:1246
calculateACH50Target @ 4012-Section12.js:1767
calculateTargetModel @ 4012-Section12.js:2392
calculateAll @ 4012-Section12.js:2243
onSectionRendered @ 4012-Section12.js:2596
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1246
calculateAe10 @ 4012-Section12.js:1794
calculateTargetModel @ 4012-Section12.js:2393
calculateAll @ 4012-Section12.js:2243
onSectionRendered @ 4012-Section12.js:2596
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1246
calculateAe10 @ 4012-Section12.js:1801
calculateTargetModel @ 4012-Section12.js:2393
calculateAll @ 4012-Section12.js:2243
onSectionRendered @ 4012-Section12.js:2596
calculateTargetModel @ 4012-Section03.js:1747
calculateAll @ 4012-Section03.js:1703
(anonymous) @ 4012-Section03.js:2450
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2437
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
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
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=0
 [S12DB] REF CLIMATE: d_20=4600, d_21=0, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=0
 [S12DB] STORED for S15: ref_d_102=1e-7
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2374 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1630 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1985 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2161 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1851 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2452 S03: Self-Contained State Module initialization complete
 [S01] j_32 listener: null → 0
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 0
 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
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
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:732
calculateReferenceModel @ 4012-Section07.js:1062
calculateAll @ 4012-Section07.js:1105
onSectionRendered @ 4012-Section07.js:1507
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: Target defaults loaded from field definitions
4012-Section09.js:139 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2494 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:533 S09: Header controls injected successfully
4012-Section09.js:2332 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2494 [S09] 🔗 Published initial ref_d_63=126 for S07
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
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.2952948175687105, i_80=49282.218048, i_81=36381.95896966393
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
 [S10DISPLAY] Display (target) g_81 = 100.00%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,698.95
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_103 changed.
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
 [S10DISPLAY] Display (target) g_81 = 100.00%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,698.95
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_d_97 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7353865313303655, i_80=49282.218048, i_81=90603.69846646363
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
 [S10DISPLAY] Display (target) g_81 = 100.00%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,698.95
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_98 changed.
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
 [S10DISPLAY] Display (target) g_81 = 100.00%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,698.95
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2779 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section10.js:423 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:530 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:530 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:530 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:530 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:530 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:530 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:530 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:530 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:530 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:530 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:530 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_74 = 0.00
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
 [S10DISPLAY] Display (target) g_81 = 100.00%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,698.95
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S12] Listener: ref_f_85 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_86 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_87 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_94 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_95 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_88 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_89 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_90 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_91 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_92 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_93 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_d_97 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2184 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2369 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2374 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1630 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1985 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2161 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1630 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
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
 [S10DISPLAY] Display (target) g_81 = 13.50%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 15,481.39
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
 [S10DISPLAY] Display (target) g_81 = 13.50%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 15,481.39
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
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
 [S10DISPLAY] Display (target) g_81 = 73.51%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 84,319.86
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
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 73.51%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 84,319.86
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
 [S12] Listener: ref_f_85 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
 [S12] Listener: ref_f_86 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
 [S12] Listener: ref_f_87 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
 [S12] Listener: ref_f_94 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
 [S12] Listener: ref_f_95 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
 [S12] Listener: ref_g_88 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
 [S12] Listener: ref_g_89 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
 [S12] Listener: ref_g_90 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
 [S12] Listener: ref_g_91 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
 [S12] Listener: ref_g_92 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
 [S12] Listener: ref_g_93 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S12] Listener: ref_f_85 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_86 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_87 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_94 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_f_95 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_88 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_89 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_90 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_91 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2157 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2181 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2184 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2369 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2369 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2374 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1630 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1985 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2161 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_92 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [S12] Listener: ref_g_93 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_73 is null/undefined, skipping d_88
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
onSectionRendered @ 4012-Section11.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_74 is null/undefined, skipping d_89
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
onSectionRendered @ 4012-Section11.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_75 is null/undefined, skipping d_90
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
onSectionRendered @ 4012-Section11.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_76 is null/undefined, skipping d_91
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
onSectionRendered @ 4012-Section11.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_77 is null/undefined, skipping d_92
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
onSectionRendered @ 4012-Section11.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_78 is null/undefined, skipping d_93
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
onSectionRendered @ 4012-Section11.js:2299
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2124.49 = 0
 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2124.49
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.079840319355
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0
 [Section12] Calculated display values updated for target mode
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=0, l_119=None, A28=0, A29=0, A30=0, A16=3.5700000000000003, A31=0, A32=0, A33=0
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=0, E52=0, E54(m_19)=120, E55(result)=0
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
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
 [S10DISPLAY] Display (target) g_81 = 73.51%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 84,319.86
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 73.51%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 84,319.86
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
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
 [S10DISPLAY] Display (target) g_81 = 90.82%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 104,171.66
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency m_121 changed.
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
 [S10DISPLAY] Display (target) g_81 = 90.82%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 104,171.66
 [S10DISPLAY] Display (target) i_82 = 68,819.37
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
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=30464.609466247697, E37_daily=155.43168095024336, E45(d_21)=196, E50=30464.609466247697, E51=67734.01555200001, E52=-37269.406085752315, E54(m_19)=120, E55(result)=-12.940766001997332
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section01.js:1299 [S01] j_32 listener: 0 → 88276.54154011652
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 88276.54154011652
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 ✅ S15: Header controls injected successfully
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1826
onSectionRendered @ 4012-Section02.js:1263
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
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
 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
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
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:732 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:732
calculateReferenceModel @ 4012-Section07.js:1062
calculateAll @ 4012-Section07.js:1105
onSectionRendered @ 4012-Section07.js:1507
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:685 [S08] S04 listeners setup complete
4012-Section09.js:2332 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
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
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_98 changed.
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2779 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section10.js:423 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:530 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:530 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:530 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:530 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:530 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:530 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:530 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:530 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:530 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:530 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:530 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_76 = 0.00
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
4012-Section11.js:275 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section11.js:1253 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
4012-Section11.js:2284 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2294 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_88 = 7.50 (from d_73)
 [S11 Area Sync] d_89 = 81.14 (from d_74)
 [S11 Area Sync] d_90 = 3.83 (from d_75)
 [S11 Area Sync] d_91 = 159.00 (from d_76)
 [S11 Area Sync] d_92 = 100.66 (from d_77)
 [S11 Area Sync] d_93 = 0.00 (from d_78)
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_m_121 changed.
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.03%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=65667.00199479061, E37_daily=335.0357244632174, E45(d_21)=196, E50=65667.00199479061, E51=67734.01555200001, E52=-2067.0135572094005, E54(m_19)=120, E55(result)=-0.7177130406977085
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=72747.21409140862, E37_daily=371.1592555684113, E45(d_21)=196, E50=72747.21409140862, E51=67734.01555200001, E52=5013.198539408608, E54(m_19)=120, E55(result)=1.7406939372946555
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section01.js:1299 [S01] j_32 listener: 0 → 133052.26546107823
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133052.26546107823
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1828
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
onSectionRendered @ 4012-Section15.js:2298
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1146 Section03: Province selected: ON
4012-Section03.js:1207 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1826
onSectionRendered @ 4012-Section02.js:1263
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
 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
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
4012-Section07.js:133 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:732 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:732
calculateReferenceModel @ 4012-Section07.js:1062
calculateAll @ 4012-Section07.js:1105
onSectionRendered @ 4012-Section07.js:1507
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:685 [S08] S04 listeners setup complete
4012-Section09.js:2332 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
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
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_98 changed.
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:2167 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section11.js:1253 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
4012-Section11.js:2284 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2294 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1188 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1209 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1209 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1209 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1209 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1209 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1209 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1220 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_m_121 changed.
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.03%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=65667.00199479061, E37_daily=335.0357244632174, E45(d_21)=196, E50=65667.00199479061, E51=67734.01555200001, E52=-2067.0135572094005, E54(m_19)=120, E55(result)=-0.7177130406977085
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=72747.21409140862, E37_daily=371.1592555684113, E45(d_21)=196, E50=72747.21409140862, E51=67734.01555200001, E52=5013.198539408608, E54(m_19)=120, E55(result)=1.7406939372946555
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S01] j_32 listener: 0 → 133052.26546107823
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133052.26546107823
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1828
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
onSectionRendered @ 4012-Section15.js:2298
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
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
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
initialize @ 4012-Section02.js:1826
onSectionRendered @ 4012-Section02.js:1263
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055
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
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2403 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1207 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2252 S03: Sliders initialized via FieldManager
4012-Section03.js:1146 Section03: Province selected: ON
4012-Section03.js:1207 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1881 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1630 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1907 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1985 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2012 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2161 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2188 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2191 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1851 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2452 S03: Self-Contained State Module initialization complete
24012-Section02.js:847 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
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
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:732
calculateReferenceModel @ 4012-Section07.js:1062
calculateAll @ 4012-Section07.js:1105
onSectionRendered @ 4012-Section07.js:1507
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055Understand this warningAI
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
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2494 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2332 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2494 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2332 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_98 changed.
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_97 changed.
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
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
4012-Section10.js:530 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:530 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_88 = 7.50 (from d_73)
 [S11 Area Sync] d_89 = 81.14 (from d_74)
 [S11 Area Sync] d_90 = 3.83 (from d_75)
 [S11 Area Sync] d_91 = 159.00 (from d_76)
 [S11 Area Sync] d_92 = 100.66 (from d_77)
 [S11 Area Sync] d_93 = 0.00 (from d_78)
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1223 [S11 Area Sync] Sync completed successfully
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2758 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1901 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2122 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2136 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2173 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2216 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1909 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:423 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:530 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:530 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:530 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:530 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:530 [S10DISPLAY] Display (target) m_77 = 25.86
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_m_121 changed.
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency m_121 changed.
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=65667.00199479061, E37_daily=335.0357244632174, E45(d_21)=196, E50=65667.00199479061, E51=67734.01555200001, E52=-2067.0135572094005, E54(m_19)=120, E55(result)=-0.7177130406977085
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=72747.21409140862, E37_daily=371.1592555684113, E45(d_21)=196, E50=72747.21409140862, E51=67734.01555200001, E52=5013.198539408608, E54(m_19)=120, E55(result)=1.7406939372946555
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S01] j_32 listener: 0 → 133052.26546107823
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133052.26546107823
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1828
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
onSectionRendered @ 4012-Section15.js:2298
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
(anonymous) @ index.html:1055Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1826
onSectionRendered @ 4012-Section02.js:1263
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075
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
4012-Section12.js:2009 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2012 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2161 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2188 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2191 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1851 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2452 S03: Self-Contained State Module initialization complete
24012-Section02.js:847 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:847 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section02.js:847 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:733 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:508 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:503 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:753 S06: Pattern A initialization complete.
4012-Section07.js:1488 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
calculateWaterUse @ 4012-Section07.js:732
calculateReferenceModel @ 4012-Section07.js:1062
calculateAll @ 4012-Section07.js:1105
onSectionRendered @ 4012-Section07.js:1507
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
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
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2216 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
4012-Section10.js:1909 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:423 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:530 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:530 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:530 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:530 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:530 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:530 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:530 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:530 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:530 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:530 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:530 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_77 = 130.15
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_98 changed.
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_97 changed.
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
 [S10DISPLAY] Display (target) g_81 = 58.07%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 66,611.40
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
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
 [S10DISPLAY] Display (target) g_81 = 68.57%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 78,644.24
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
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
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 2.56%
 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.03%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [S11] ⚠️  S10 area listeners DISABLED - enable incrementally during testing
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_88 = 7.50 (from d_73)
 [S11 Area Sync] d_89 = 81.14 (from d_74)
 [S11 Area Sync] d_90 = 3.83 (from d_75)
 [S11 Area Sync] d_91 = 159.00 (from d_76)
 [S11 Area Sync] d_92 = 100.66 (from d_77)
 [S11 Area Sync] d_93 = 0.00 (from d_78)
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_m_121 changed.
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.03%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
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
 [Cooling m_124 COOLING-TARGET] m_129_annual=65667.00199479061, E37_daily=335.0357244632174, E45(d_21)=196, E50=65667.00199479061, E51=67734.01555200001, E52=-2067.0135572094005, E54(m_19)=120, E55(result)=-0.7177130406977085
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=72747.21409140862, E37_daily=371.1592555684113, E45(d_21)=196, E50=72747.21409140862, E51=67734.01555200001, E52=5013.198539408608, E54(m_19)=120, E55(result)=1.7406939372946555
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S01] j_32 listener: 0 → 133052.26546107823
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133052.26546107823
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1828
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:877
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1141
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1806
calculateTargetModel @ 4012-Section15.js:1656
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:881
calculateRow32 @ 4012-Section04.js:1088
calculateAll @ 4012-Section04.js:1153
calculateAndRefresh @ 4012-Section04.js:1400
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1511
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2272
onSectionRendered @ 4012-Section15.js:2298
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1146 Section03: Province selected: ON
4012-Section03.js:1207 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section03.js:1146 Section03: Province selected: ON
4012-Section03.js:1207 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
index.html:1087 TEUI Calculator 4.011 initialization complete
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
4011-QCMonitor.js:40 [QCMonitor] QC monitoring disabled. Add ?qc=true to URL to activate.
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:1202 [S01DB] upstream snapshot {ref_j_32: '93496.43795200001', ref_k_32: '4768.3183355520005', j_32: '133052.26546107823', k_32: '6785.665538514991', ref_h_15: '1427.20', …}
 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.22608286230258, useType=Utility Bills
 🔍 [S01] T.1 Calculation: e_6=16.3 (ref), h_6=11.7 (target) → reduction should be 28%
 🔍 [S01DB] UPDATING h_10: 93.2 (from j_32=133052.26546107823, area=1427.2)
 🔍 [S01] h_6 explanation: target=11.7, ref=16.3, reduction=0.28220858895705525, percent=28%
 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1454
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1454
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1454
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1454
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1460
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1460
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1460
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateVolumeMetrics @ 4012-Section12.js:1460
calculateReferenceModel @ 4012-Section12.js:2270
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.405594, g_102=0.405405
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1644
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1644
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1644
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1644
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1645
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1645
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1645
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1645
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1646
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1646
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1646
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1203
calculateCombinedUValue @ 4012-Section12.js:1646
calculateReferenceModel @ 4012-Section12.js:2271
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
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
 [S10DISPLAY] Display (target) g_81 = 94.03%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 107,846.19
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_i_103 changed.
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
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.03%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section12.js:1974 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2002 [S12DB] REF h_101 calc: (4600*0.4055944265297311*24)/1000 = 44.77762468888231
4012-Section12.js:2005 [S12DB] REF i_101 result: 44.77762468888231 * 2476.6199999999994 = 110897.16085697968
4012-Section12.js:2157 [S12DB] REF g_104 calc: (0.4055944265297311*2476.6199999999994 + 0.4054054054054054*1100.42)/3577.0400009999994 = 0.4055362770454741
4012-Section12.js:2181 [S12DB] REF ROW104: i_101=110897.16085697968, i_102=20985.306810810813, i_103=36440.079840319355 → i_104=168322.54750810983
4012-Section12.js:2184 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1203
calculateEnvelopeTotals @ 4012-Section12.js:2197
calculateReferenceModel @ 4012-Section12.js:2287
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1203
calculateEnvelopeTotals @ 4012-Section12.js:2197
calculateReferenceModel @ 4012-Section12.js:2287
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1203
calculateEnvelopeTotals @ 4012-Section12.js:2197
calculateReferenceModel @ 4012-Section12.js:2287
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1410 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1410
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2117
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1203
calculateEnvelopeTotals @ 4012-Section12.js:2197
calculateReferenceModel @ 4012-Section12.js:2287
calculateAll @ 4012-Section12.js:2242
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1075Understand this warningAI
4012-Section15.js:1414 [S15] Using fallback values for missing upstream dependencies (initialization timing)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12DB] STORED for S15: ref_d_101=2476.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0.4055944265297311
 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
 [S12DB] STORED for S15: ref_g_104=0.4055362770454741
 [S12DB] STORED for S15: ref_i_101=110897.16085697968
 [S12DB] STORED for S15: ref_i_102=20985.306810810813
 [S12DB] STORED for S15: ref_i_104=168322.54750810983
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
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
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target utilization factor dependency i_103 changed.
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
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=72747.21409140862, E37_daily=371.1592555684113, E45(d_21)=196, E50=72747.21409140862, E51=67734.01555200001, E52=5013.198539408608, E54(m_19)=120, E55(result)=1.7406939372946555
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
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
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1299 [S01] j_32 listener: 133052.26546107823 → 133951.81662642432
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133951.81662642432
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=56180.60199479062, E37_daily=286.63572446321746, E45(d_21)=196, E50=56180.601994790624, E51=67734.01555200001, E52=-11553.413557209387, E54(m_19)=120, E55(result)=-4.011601929586593
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
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
 [Cooling m_124 COOLING-TARGET] m_129_annual=11198.247724141323, E37_daily=57.13391695990471, E45(d_21)=196, E50=11198.247724141323, E51=67734.01555200001, E52=-56535.76782785869, E54(m_19)=120, E55(result)=-19.630474940228712
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S01] j_32 listener: 133951.81662642432 → 134004.53546146475
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134004.53546146475
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1299 [S01] j_32 listener: 134004.53546146475 → 132767.99730990978
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 132767.99730990978
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:41 [CLOCK] Starting initial load timing
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
 [Section12] Calculated display values updated for target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 [S12] U-agg REF: TB%=50 → g_101=0.347926, g_102=0.405405
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.3479263283096109*24)/1000 = 38.41106664538104
 [S12DB] REF i_101 result: 38.41106664538104 * 2476.6199999999994 = 95129.61587528358
 [S12DB] REF g_104 calc: (0.3479263283096109*2476.6199999999994 + 0.4054054054054054*1100.42)/3577.0400009999994 = 0.36560886069732407
 [S12DB] REF ROW104: i_101=95129.61587528358, i_102=20985.306810810813, i_103=36440.079840319355 → i_104=152555.00252641374
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12DB] STORED for S15: ref_d_101=2476.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0.3479263283096109
 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
 [S12DB] STORED for S15: ref_g_104=0.36560886069732407
 [S12DB] STORED for S15: ref_i_101=95129.61587528358
 [S12DB] STORED for S15: ref_i_102=20985.306810810813
 [S12DB] STORED for S15: ref_i_104=152555.00252641374
 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1630 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1907 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1985 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2012 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2161 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2188 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2191 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section10.js:1901 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2122 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2136 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2173 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2216 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1909 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:880 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:915 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section06.js:508 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:503 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:1202 [S01DB] upstream snapshot {ref_j_32: '448394.0938117469', ref_k_32: '22868.09878439909', j_32: '132767.99730990978', k_32: '6771.167862805399', ref_h_15: '1427.20', …}
4012-Section01.js:753 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.02690394472378, useType=Utility Bills
4012-Section01.js:823 🔍 [S01] T.1 Calculation: e_6=29 (ref), h_6=11.6 (target) → reduction should be 60%
4012-Section01.js:915 🔍 [S01DB] UPDATING h_10: 93.0 (from j_32=132767.99730990978, area=1427.2)
4012-Section01.js:509 🔍 [S01] h_6 explanation: target=11.6, ref=29, reduction=0.6000000000000001, percent=60%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 605ms (all calculations finalized)
4012-Section01.js:1220 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section10.js:742 [S10 AREA EVENT] handleFieldBlur: d_73=100 in target mode
4012-Section10.js:303 [S10 MODEMANAGER DEBUG] setValue: d_73=100 in target mode, source=user-modified
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section10.js:320 [S10 MODEMANAGER DEBUG] Target StateManager write: d_73=100
4012-Section10.js:752 [S10 CALC TRIGGER] calculateAll() triggered by d_73 in target mode
4012-Section10.js:1901 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S01] j_32 listener: 132767.99730990978 → 132263.02130990976
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 132263.02130990976
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_74 = 0.55%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_75 = 1.53%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_76 = 58.42%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_77 = 13.52%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 119,323.95
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 119,323.95
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 93.62%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 47,729.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 111,707.81
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 71,594.37
4012-Section01.js:1202 [S01DB] upstream snapshot {ref_j_32: '448394.0938117469', ref_k_32: '22868.09878439909', j_32: '132263.02130990976', k_32: '6745.414086805397', ref_h_15: '1427.20', …}
4012-Section01.js:753 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=92.6730810747686, useType=Utility Bills
4012-Section01.js:823 🔍 [S01] T.1 Calculation: e_6=29 (ref), h_6=11.6 (target) → reduction should be 60%
4012-Section01.js:915 🔍 [S01DB] UPDATING h_10: 92.7 (from j_32=132263.02130990976, area=1427.2)
4012-Section01.js:509 🔍 [S01] h_6 explanation: target=11.6, ref=29, reduction=0.6000000000000001, percent=60%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 71ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 71ms (interaction → h_10 settlement)
4012-Section01.js:1220 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section11.js:393 S11: Switched to REFERENCE mode
4012-Section11.js:1188 [S11 Area Sync] Starting sync in reference mode
4012-Section11.js:1213 [S11 Area Sync] ref_d_73 is null/undefined, skipping d_88
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
switchMode @ 4012-Section11.js:398
(anonymous) @ 4012-Section11.js:2244Understand this warningAI
4012-Section11.js:1213 [S11 Area Sync] ref_d_74 is null/undefined, skipping d_89
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
switchMode @ 4012-Section11.js:398
(anonymous) @ 4012-Section11.js:2244Understand this warningAI
4012-Section11.js:1213 [S11 Area Sync] ref_d_75 is null/undefined, skipping d_90
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
switchMode @ 4012-Section11.js:398
(anonymous) @ 4012-Section11.js:2244Understand this warningAI
4012-Section11.js:1213 [S11 Area Sync] ref_d_76 is null/undefined, skipping d_91
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
switchMode @ 4012-Section11.js:398
(anonymous) @ 4012-Section11.js:2244Understand this warningAI
4012-Section11.js:1213 [S11 Area Sync] ref_d_77 is null/undefined, skipping d_92
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
switchMode @ 4012-Section11.js:398
(anonymous) @ 4012-Section11.js:2244Understand this warningAI
4012-Section11.js:1213 [S11 Area Sync] ref_d_78 is null/undefined, skipping d_93
(anonymous) @ 4012-Section11.js:1213
syncAreasFromS10 @ 4012-Section11.js:1190
switchMode @ 4012-Section11.js:398
(anonymous) @ 4012-Section11.js:2244Understand this warningAI
4012-Section11.js:1220 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1223 [S11 Area Sync] Sync completed successfully
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:393 S11: Switched to TARGET mode
4012-Section11.js:1188 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_88 = 100 (from d_73)
 [S11 Area Sync] d_89 = 81.14 (from d_74)
 [S11 Area Sync] d_90 = 3.83 (from d_75)
 [S11 Area Sync] d_91 = 159.00 (from d_76)
 [S11 Area Sync] d_92 = 100.66 (from d_77)
 [S11 Area Sync] d_93 = 0.00 (from d_78)
 [S11 Area Sync] Triggering recalculation...
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
 [S10DISPLAY] Display (target) j_74 = 0.55%
 [S10DISPLAY] Display (target) j_75 = 1.53%
 [S10DISPLAY] Display (target) j_76 = 58.42%
 [S10DISPLAY] Display (target) j_77 = 13.52%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 93.85%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 111,989.54
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 S10: Target utilization factor dependency i_97 changed.
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
 [S10DISPLAY] Display (target) j_74 = 0.55%
 [S10DISPLAY] Display (target) j_75 = 1.53%
 [S10DISPLAY] Display (target) j_76 = 58.42%
 [S10DISPLAY] Display (target) j_77 = 13.52%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 93.85%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 111,989.54
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1299 [S01] j_32 listener: 132263.02130990976 → 132764.76546350977
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 132764.76546350977
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2749 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
 [S10DISPLAY] Display (target) j_74 = 0.55%
 [S10DISPLAY] Display (target) j_75 = 1.53%
 [S10DISPLAY] Display (target) j_76 = 58.42%
 [S10DISPLAY] Display (target) j_77 = 13.52%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.90%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 113,237.59
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 S10: Target utilization factor dependency i_98 changed.
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
 [S10DISPLAY] Display (target) j_74 = 0.55%
 [S10DISPLAY] Display (target) j_75 = 1.53%
 [S10DISPLAY] Display (target) j_76 = 58.42%
 [S10DISPLAY] Display (target) j_77 = 13.52%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.90%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 113,237.59
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1299 [S01] j_32 listener: 132764.76546350977 → 135273.48623150977
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135273.48623150977
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1223 [S11 Area Sync] Sync completed successfully
4012-Section11.js:1950 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1431 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1503 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1686 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1436 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section01.js:1202 [S01DB] upstream snapshot {ref_j_32: '448394.0938117469', ref_k_32: '22868.09878439909', j_32: '135273.48623150977', k_32: '6898.947797806999', ref_h_15: '1427.20', …}
4012-Section01.js:753 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=94.78243149629328, useType=Utility Bills
4012-Section01.js:823 🔍 [S01] T.1 Calculation: e_6=29 (ref), h_6=11.7 (target) → reduction should be 60%
4012-Section01.js:915 🔍 [S01DB] UPDATING h_10: 94.8 (from j_32=135273.48623150977, area=1427.2)
4012-Section01.js:509 🔍 [S01] h_6 explanation: target=11.7, ref=29, reduction=0.596551724137931, percent=60%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 6869ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 6869ms (interaction → h_10 settlement)
4012-Section01.js:1220 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 [S12] U-agg REF: TB%=50 → g_101=0.398348, g_102=0.405405
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.3983478705728567*24)/1000 = 43.97760491124338
 [S12DB] REF i_101 result: 43.97760491124338 * 2569.1199999999994 = 112983.74432957357
 [S12DB] REF g_104 calc: (0.3983478705728567*2569.1199999999994 + 0.4054054054054054*1100.42)/3669.5400009999994 = 0.4004642808259045
 [S12DB] REF ROW104: i_101=112983.74432957357, i_102=20985.306810810813, i_103=36440.07984031936 → i_104=170409.13098070375
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12DB] STORED for S15: ref_d_101=2569.1199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0.3983478705728567
 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
 [S12DB] STORED for S15: ref_g_104=0.4004642808259045
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
 [S10DISPLAY] Display (target) j_74 = 0.55%
 [S10DISPLAY] Display (target) j_75 = 1.53%
 [S10DISPLAY] Display (target) j_76 = 58.42%
 [S10DISPLAY] Display (target) j_77 = 13.52%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.90%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 113,237.59
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
 [S10DISPLAY] Display (target) j_74 = 0.55%
 [S10DISPLAY] Display (target) j_75 = 1.53%
 [S10DISPLAY] Display (target) j_76 = 58.42%
 [S10DISPLAY] Display (target) j_77 = 13.52%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.90%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 113,237.59
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 [S12DB] STORED for S15: ref_i_101=112983.74432957357
 [S12DB] STORED for S15: ref_i_102=20985.306810810813
 [S12DB] STORED for S15: ref_i_104=170409.13098070375
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.307204, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
 [S10DISPLAY] Display (target) k_73 = 0.00
 [S10DISPLAY] Display (target) k_74 = 0.00
 [S10DISPLAY] Display (target) k_75 = 0.00
 [S10DISPLAY] Display (target) k_76 = 0.00
 [S10DISPLAY] Display (target) k_77 = 130.15
 [S10DISPLAY] Display (target) k_78 = 0.00
 [S10DISPLAY] Display (target) k_79 = 130.15
 [S10DISPLAY] Display (target) j_73 = 25.97%
 [S10DISPLAY] Display (target) j_74 = 0.55%
 [S10DISPLAY] Display (target) j_75 = 1.53%
 [S10DISPLAY] Display (target) j_76 = 58.42%
 [S10DISPLAY] Display (target) j_77 = 13.52%
 [S10DISPLAY] Display (target) j_78 = 0.00%
 [S10DISPLAY] Display (target) j_79 = 100.00%
 [S10DISPLAY] Display (target) l_73 = 0.00%
 [S10DISPLAY] Display (target) l_74 = 0.00%
 [S10DISPLAY] Display (target) l_75 = 0.00%
 [S10DISPLAY] Display (target) l_76 = 0.00%
 [S10DISPLAY] Display (target) l_77 = 100.00%
 [S10DISPLAY] Display (target) l_78 = 0.00%
 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.99%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 113,342.54
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 S10: Target utilization factor dependency i_103 changed.
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
 [S10DISPLAY] Display (target) m_78 = 75.00
 [S10DISPLAY] Display (target) i_73 = 5,000.00
 [S10DISPLAY] Display (target) i_74 = 106.29
 [S10DISPLAY] Display (target) i_75 = 294.68
 [S10DISPLAY] Display (target) i_76 = 11,247.66
 [S10DISPLAY] Display (target) i_77 = 2,603.07
 [S10DISPLAY] Display (target) i_78 = 0.00
 [S10DISPLAY] Display (target) i_79 = 19,251.70
4012-Section10.js:530 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:530 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:530 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:530 [S10DISPLAY] Display (target) j_73 = 25.97%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_74 = 0.55%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_75 = 1.53%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_76 = 58.42%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_77 = 13.52%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 119,323.95
 [S10DISPLAY] Display (target) e_81 = 119,323.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.99%
 [S10DISPLAY] Display (target) i_80 = 47,729.58
 [S10DISPLAY] Display (target) i_81 = 113,342.54
 [S10DISPLAY] Display (target) i_82 = 71,594.37
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S01] j_32 listener: 135273.48623150977 → 135420.51159418584
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135420.51159418584
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S01] j_32 listener: 135420.51159418584 → 135656.81205933937
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135656.81205933937
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=8436.705094456594, E37_daily=43.04441374722752, E45(d_21)=196, E50=8436.705094456594, E51=67734.01555200001, E52=-59297.31045754342, E54(m_19)=120, E55(result)=-20.589343908869242
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.30720442897743927*24)/1000 = 33.915368959109294
 [S12DB] TGT i_101 result: 33.915368959109294 * 2569.1199999999994 = 87132.65270022686
 [S12DB] TGT g_104 calc: (0.30720442897743927*2569.1199999999994 + 0.3243243243243243*1100.42)/3669.5400009999994 = 0.31233833538676603
 [S12DB] TGT ROW104: i_101=87132.65270022686, i_102=16788.24544864865, i_103=24044.083324167663 → i_104=127964.98147304317
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-2901.9613790538333 → k_104=-2901.9613790538333
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8436.705094456594, E37_daily=43.04441374722752, E45(d_21)=196, E50=8436.705094456594, E51=67734.01555200001, E52=-59297.31045754342, E54(m_19)=120, E55(result)=-20.589343908869242
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1299 [S01] j_32 listener: 135656.81205933937 → 135670.66061595548
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135670.66061595548
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8473.591285115277, E37_daily=43.23260859752693, E45(d_21)=196, E50=8473.591285115277, E51=67734.01555200001, E52=-59260.42426688474, E54(m_19)=120, E55(result)=-20.576536203779423
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8473.591285115277, E37_daily=43.23260859752693, E45(d_21)=196, E50=8473.591285115277, E51=67734.01555200001, E52=-59260.42426688474, E54(m_19)=120, E55(result)=-20.576536203779423
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1299 [S01] j_32 listener: 135670.66061595548 → 135817.68597863155
4012-Section01.js:1300 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 135817.68597863155
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=8865.199285115285, E37_daily=45.23060859752696, E45(d_21)=196, E50=8865.199285115285, E51=67734.01555200001, E52=-58868.81626688473, E54(m_19)=120, E55(result)=-20.44056120377942
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.3123383354718825
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section01.js:1202 [S01DB] upstream snapshot {ref_j_32: '466248.22226603696', ref_k_32: '23778.659335567885', j_32: '135817.68597863155', k_32: '6926.701984910209', ref_h_15: '1427.20', …}
4012-Section01.js:753 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=95.16373737292008, useType=Utility Bills
4012-Section01.js:823 🔍 [S01] T.1 Calculation: e_6=29.7 (ref), h_6=11.8 (target) → reduction should be 60%
4012-Section01.js:915 🔍 [S01DB] UPDATING h_10: 95.2 (from j_32=135817.68597863155, area=1427.2)
4012-Section01.js:509 🔍 [S01] h_6 explanation: target=11.8, ref=29.7, reduction=0.6026936026936027, percent=60%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 7113ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 7113ms (interaction → h_10 settlement)
4012-Section01.js:1220 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10