4011-MobileDetect.js:113 Desktop device detected
4012-Section02.js:1653 S02: Target defaults set from field definitions - single source of truth
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1788
onSectionRendered @ 4012-Section02.js:1263
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481
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
setCalculatedValue @ 4012-Section12.js:1213
calculateVolumeMetrics @ 4012-Section12.js:1421
calculateTargetModel @ 4012-Section12.js:2347
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: d_102
setCalculatedValue @ 4012-Section12.js:1213
calculateVolumeMetrics @ 4012-Section12.js:1427
calculateTargetModel @ 4012-Section12.js:2347
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1213
calculateCombinedUValue @ 4012-Section12.js:1603
calculateTargetModel @ 4012-Section12.js:2348
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: g_102
setCalculatedValue @ 4012-Section12.js:1213
calculateCombinedUValue @ 4012-Section12.js:1604
calculateTargetModel @ 4012-Section12.js:2348
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: i_110
setCalculatedValue @ 4012-Section12.js:1213
calculateNFactor @ 4012-Section12.js:1787
calculateTargetModel @ 4012-Section12.js:2350
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: g_110
setCalculatedValue @ 4012-Section12.js:1213
calculateNFactor @ 4012-Section12.js:1835
calculateTargetModel @ 4012-Section12.js:2350
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: g_108
setCalculatedValue @ 4012-Section12.js:1213
calculateACH50Target @ 4012-Section12.js:1698
calculateTargetModel @ 4012-Section12.js:2351
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:1985
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:1991
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:1997
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2003
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: h_102
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2009
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: i_102
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2015
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: j_102
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2021
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: k_102
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2027
calculateTargetModel @ 4012-Section12.js:2359
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeTotals @ 4012-Section12.js:2182
calculateTargetModel @ 4012-Section12.js:2364
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: l_102
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeTotals @ 4012-Section12.js:2183
calculateTargetModel @ 4012-Section12.js:2364
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2733
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
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
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1213
calculateCombinedUValue @ 4012-Section12.js:1605
calculateTargetModel @ 4012-Section12.js:2348
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2735
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1213
calculateAirLeakageHeatLoss @ 4012-Section12.js:1892
calculateTargetModel @ 4012-Section12.js:2353
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2735
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1213
calculateAirLeakageHeatLoss @ 4012-Section12.js:1898
calculateTargetModel @ 4012-Section12.js:2353
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2735
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeTotals @ 4012-Section12.js:2162
calculateTargetModel @ 4012-Section12.js:2364
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2735
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeTotals @ 4012-Section12.js:2168
calculateTargetModel @ 4012-Section12.js:2364
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2735
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeTotals @ 4012-Section12.js:2184
calculateTargetModel @ 4012-Section12.js:2364
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2735
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1213
calculateEnvelopeTotals @ 4012-Section12.js:2185
calculateTargetModel @ 4012-Section12.js:2364
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2735
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
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
 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1213
calculateVolumeMetrics @ 4012-Section12.js:1433
calculateTargetModel @ 4012-Section12.js:2347
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2736
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1213
calculateVolumeMetrics @ 4012-Section12.js:1439
calculateTargetModel @ 4012-Section12.js:2347
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2736
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1213
calculateVolumeMetrics @ 4012-Section12.js:1445
calculateTargetModel @ 4012-Section12.js:2347
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2736
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1213
calculateWWR @ 4012-Section12.js:1631
calculateTargetModel @ 4012-Section12.js:2349
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2736
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1213
calculateWWR @ 4012-Section12.js:1638
calculateTargetModel @ 4012-Section12.js:2349
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2736
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
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
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1213
calculateACH50Target @ 4012-Section12.js:1712
calculateTargetModel @ 4012-Section12.js:2351
calculateAll @ 4012-Section12.js:2202
(anonymous) @ 4012-Section12.js:2737
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2582
registerWithStateManager @ 4012-Section12.js:2570
onSectionRendered @ 4012-Section12.js:2551
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
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
setCalculatedValue @ 4012-Section12.js:1213
calculateACH50Target @ 4012-Section12.js:1726
calculateTargetModel @ 4012-Section12.js:2351
calculateAll @ 4012-Section12.js:2202
onSectionRendered @ 4012-Section12.js:2555
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1213
calculateAe10 @ 4012-Section12.js:1753
calculateTargetModel @ 4012-Section12.js:2352
calculateAll @ 4012-Section12.js:2202
onSectionRendered @ 4012-Section12.js:2555
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1213
calculateAe10 @ 4012-Section12.js:1760
calculateTargetModel @ 4012-Section12.js:2352
calculateAll @ 4012-Section12.js:2202
onSectionRendered @ 4012-Section12.js:2555
calculateTargetModel @ 4012-Section03.js:1743
calculateAll @ 4012-Section03.js:1699
(anonymous) @ 4012-Section03.js:2447
checkData @ 4012-Section03.js:489
ensureAvailable @ 4012-Section03.js:505
onSectionRendered @ 4012-Section03.js:2434
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
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
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section12.js:1589 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1964 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section03.js:1844 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2449 S03: Self-Contained State Module initialization complete
4012-Section04.js:1323 [S04-RF] Added 30 clean dependency listeners
4012-Section04.js:1326 S04-RF: Event handlers initialized with proper Enter key handling
4012-Section04.js:1225 S04-RF: Section rendered - initializing Excel-compliant Pattern A module
4012-Section04.js:678 S04-RF: Initializing Pattern A ModeManager
4012-Section04.js:543 S04-RF: Target defaults set from field definitions - single source of truth
4012-Section04.js:618 S04-RF: Reference defaults set from field definitions - single source of truth
4012-Section04.js:1221 S04-RF: Header controls injected
4012-Section04.js:1323 [S04-RF] Added 30 clean dependency listeners
4012-Section04.js:1326 S04-RF: Event handlers initialized with proper Enter key handling
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: null → 0
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 0
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:719 [S04-RF] Refreshing UI for TARGET mode
 S04-RF: Excel-compliant initialization complete
 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization starting...
 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔄 [S06] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization complete.
 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
 🔧 [S07] TargetState.setDefaults: Initializing from FieldDefinitions
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 ✅ [S07] TargetState.setDefaults: d_49="User Defined", d_51="Heatpump"
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🌐 [S07] TargetState.setDefaults: Published to StateManager
 🔧 [S07] ReferenceState.setDefaults: Initializing Reference-specific defaults
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 ✅ [S07] ReferenceState.setDefaults: d_49="User Defined", d_51="Electric", d_52="90"
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:681
calculateReferenceModel @ 4012-Section07.js:1011
calculateAll @ 4012-Section07.js:1054
onSectionRendered @ 4012-Section07.js:1456
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1481Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: Target defaults loaded from field definitions
 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:480 S09: Header controls injected successfully
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:389 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 S10: Section rendered - initializing Self-Contained State Module.
 S10: TargetState defaults loaded from field definitions (single source of truth)
 [S10 REF DEFAULTS] Published ref_d_73=5.00 to StateManager
 [S10 REF DEFAULTS] Published ref_d_74=60.00 to StateManager
 [S10 REF DEFAULTS] Published ref_d_75=2.50 to StateManager
 [S10 REF DEFAULTS] Published ref_d_76=159.00 to StateManager
 [S10 REF DEFAULTS] Published ref_d_77=100.66 to StateManager
 [S10 REF DEFAULTS] Published ref_d_78=0.00 to StateManager
 [S10 REF DEFAULTS] Published ref_e_73=Average to StateManager
 [S10 REF DEFAULTS] Published ref_e_74=North to StateManager
 [S10 REF DEFAULTS] Published ref_e_75=East to StateManager
 [S10 REF DEFAULTS] Published ref_e_76=South to StateManager
 [S10 REF DEFAULTS] Published ref_e_77=West to StateManager
 [S10 REF DEFAULTS] Published ref_e_78=Skylight to StateManager
 [S10 REF DEFAULTS] Published ref_d_80=NRC 40% to StateManager
 S10: ReferenceState defaults loaded from field definitions with Reference overrides
 S10: Simplified global StateManager listeners added
 S10: ModeManager exposed globally for cross-section integration.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_88=8.50 to StateManager
 [S11 REF DEFAULTS] Published ref_d_89=82.14 to StateManager
 [S11 REF DEFAULTS] Published ref_d_90=4.83 to StateManager
 [S11 REF DEFAULTS] Published ref_d_91=160.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_92=101.66 to StateManager
 [S11 REF DEFAULTS] Published ref_d_93=1.00 to StateManager
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
 [S10REF] Complete: g_80=0.4, g_81=0.29529481756871045, i_80=49282.218048, i_81=36381.95896966392
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9155796636659828, i_80=49282.218048, i_81=112804.49156275365
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
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9733965895980725, i_80=49282.218048, i_81=119927.85743937944
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
 [S10DISPLAY] Display (target) g_81 = 100.00%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,698.95
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S12] Listener: ref_f_85 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=36440.07984031935
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section12.js:2690 [S12] Listener: ref_f_94 changed → recalc
4012-Section12.js:1589 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1964 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=36440.07984031935
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section12.js:2690 [S12] Listener: ref_f_95 changed → recalc
4012-Section12.js:1589 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1964 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=36440.07984031935
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section12.js:1589 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1964 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=36440.07984031935
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section12.js:1589 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1964 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=36440.07984031935
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
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
 [S10REF] Complete: g_80=0.4, g_81=0.9733965895980725, i_80=49282.218048, i_81=119927.85743937944
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
 [S10REF] Complete: g_80=0.4, g_81=0.9733965895980725, i_80=49282.218048, i_81=119927.85743937944
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
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
 [S12] Listener: ref_f_85 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
4012-Section11.js:225 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section11.js:2048 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
4012-Section12.js:2690 [S12] Listener: ref_f_85 changed → recalc
4012-Section12.js:1589 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1964 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=36440.07984031935
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1971 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section12.js:2690 [S12] Listener: ref_f_86 changed → recalc
4012-Section12.js:1589 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:1964 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=36440.07984031935
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12] Listener: ref_g_92 changed → recalc
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2482.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2482.6199999999994 + 0*1100.42)/3583.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.07984031935 → i_104=36440.07984031935
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1852.6412868093894 → k_104=0
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1100.42
 [S12DB] STORED for S15: ref_g_101=0
 [S12DB] STORED for S15: ref_g_102=0
 [S12DB] STORED for S15: ref_g_104=0
 [S12DB] STORED for S15: ref_i_101=0
 [S12DB] STORED for S15: ref_i_102=0
 [S12DB] STORED for S15: ref_i_104=36440.07984031935
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
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9984451612323058, i_80=49282.218048, i_81=123013.98036205252
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
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 73.51%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 84,319.86
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2667 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9984451612323058, i_80=49282.218048, i_81=123013.98036205252
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
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
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1441 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1450 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1441 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=9572.242304946165, E37_daily=48.83797094360288, E45(d_21)=196, E50=9572.242304946165, E51=67734.01555200001, E52=-58161.77324705385, E54(m_19)=120, E55(result)=-20.19506015522703
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section14.js:1478 S14: Pattern A initialization complete.
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: 0 → 88276.54154011652
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 88276.54154011652
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=88276.54154011652, k_32=4502.103618545943 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=332279.17112565256, k_32=16946.23772740828 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=88276.54154011652, k_32=4502.103618545943 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=332279.17112565256, k_32=16946.23772740828 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=332279.17112565256, k_32=16946.23772740828 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=88276.54154011652, k_32=4502.103618545943 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=332279.17112565256, k_32=16946.23772740828 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section15.js:494 ✅ S15: Header controls injected successfully
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section02.js:1653 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1605 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1744 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1788
onSectionRendered @ 4012-Section02.js:1263
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990
4012-Section02.js:1441 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
 [S12] U-agg TGT: TB%=20 → g_101=0.369134, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.3691338043682594*24)/1000 = 40.75237200225583
 [S12DB] TGT i_101 result: 40.75237200225583 * 2476.6199999999994 = 100928.13954822681
 [S12DB] TGT g_104 calc: (0.3691338043682594*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.3553488737034371
 [S12DB] TGT ROW104: i_101=100928.13954822681, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=140894.77200966587
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0.3553488738027787
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
 [S04-RF] Added 30 clean dependency listeners
 S04-RF: Event handlers initialized with proper Enter key handling
 S04-RF: Section rendered - initializing Excel-compliant Pattern A module
 S04-RF: Initializing Pattern A ModeManager
 S04-RF: Target defaults set from field definitions - single source of truth
 S04-RF: Reference defaults set from field definitions - single source of truth
 [S04-RF] Added 30 clean dependency listeners
 S04-RF: Event handlers initialized with proper Enter key handling
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Refreshing UI for TARGET mode
 S04-RF: Excel-compliant initialization complete
 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization starting...
 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
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
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:681
calculateReferenceModel @ 4012-Section07.js:1011
calculateAll @ 4012-Section07.js:1054
onSectionRendered @ 4012-Section07.js:1456
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
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
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_88=8.50 to StateManager
 [S11 REF DEFAULTS] Published ref_d_89=82.14 to StateManager
 [S11 REF DEFAULTS] Published ref_d_90=4.83 to StateManager
 [S11 REF DEFAULTS] Published ref_d_91=160.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_92=101.66 to StateManager
 [S11 REF DEFAULTS] Published ref_d_93=1.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8224037024270119, i_80=49282.218048, i_81=101324.69646622626
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2688 S10: Target utilization factor dependency i_98 changed.
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10559.843142882455, E37_daily=53.87675072899212, E45(d_21)=196, E50=10559.843142882455, E51=67734.01555200001, E52=-57174.17240911756, E54(m_19)=120, E55(result)=-19.852143197610264
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section14.js:1478 S14: Pattern A initialization complete.
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: 0 → 134004.53546146475
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134004.53546146475
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1795
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
onSectionRendered @ 4012-Section15.js:2265
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1142 Section03: Province selected: ON
4012-Section03.js:1203 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:990Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1788
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
 [S12] U-agg TGT: TB%=20 → g_101=0.369134, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.3691338043682594*24)/1000 = 40.75237200225583
 [S12DB] TGT i_101 result: 40.75237200225583 * 2476.6199999999994 = 100928.13954822681
 [S12DB] TGT g_104 calc: (0.3691338043682594*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.3553488737034371
 [S12DB] TGT ROW104: i_101=100928.13954822681, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=140894.77200966587
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0.3553488738027787
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
 [S04-RF] Added 30 clean dependency listeners
 S04-RF: Event handlers initialized with proper Enter key handling
 S04-RF: Section rendered - initializing Excel-compliant Pattern A module
 S04-RF: Initializing Pattern A ModeManager
 S04-RF: Target defaults set from field definitions - single source of truth
 S04-RF: Reference defaults set from field definitions - single source of truth
 [S04-RF] Added 30 clean dependency listeners
 S04-RF: Event handlers initialized with proper Enter key handling
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Refreshing UI for TARGET mode
 S04-RF: Excel-compliant initialization complete
 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization starting...
 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
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
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:681
calculateReferenceModel @ 4012-Section07.js:1011
calculateAll @ 4012-Section07.js:1054
onSectionRendered @ 4012-Section07.js:1456
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
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
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_88=8.50 to StateManager
 [S11 REF DEFAULTS] Published ref_d_89=82.14 to StateManager
 [S11 REF DEFAULTS] Published ref_d_90=4.83 to StateManager
 [S11 REF DEFAULTS] Published ref_d_91=160.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_92=101.66 to StateManager
 [S11 REF DEFAULTS] Published ref_d_93=1.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8224037024270119, i_80=49282.218048, i_81=101324.69646622626
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2688 S10: Target utilization factor dependency i_98 changed.
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
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
 S11: ModeManager exposed globally for cross-section integration.
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10559.843142882455, E37_daily=53.87675072899212, E45(d_21)=196, E50=10559.843142882455, E51=67734.01555200001, E52=-57174.17240911756, E54(m_19)=120, E55(result)=-19.852143197610264
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S04-RF] Starting complete Excel-compliant calculations
 [S01] j_32 listener: 0 → 134004.53546146475
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134004.53546146475
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1795
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for reference mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for reference mode
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
onSectionRendered @ 4012-Section15.js:2265
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
calculateReferenceModel @ 4012-Section15.js:1391
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
initialize @ 4012-Section02.js:1788
onSectionRendered @ 4012-Section02.js:1263
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052
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
 [S12] U-agg TGT: TB%=20 → g_101=0.369134, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.3691338043682594*24)/1000 = 40.75237200225583
 [S12DB] TGT i_101 result: 40.75237200225583 * 2476.6199999999994 = 100928.13954822681
 [S12DB] TGT g_104 calc: (0.3691338043682594*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.3553488737034371
 [S12DB] TGT ROW104: i_101=100928.13954822681, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=140894.77200966587
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0.3553488738027787
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
 [S04-RF] Added 30 clean dependency listeners
4012-Section04.js:1326 S04-RF: Event handlers initialized with proper Enter key handling
4012-Section04.js:1225 S04-RF: Section rendered - initializing Excel-compliant Pattern A module
4012-Section04.js:678 S04-RF: Initializing Pattern A ModeManager
4012-Section04.js:543 S04-RF: Target defaults set from field definitions - single source of truth
4012-Section04.js:618 S04-RF: Reference defaults set from field definitions - single source of truth
4012-Section04.js:1323 [S04-RF] Added 30 clean dependency listeners
4012-Section04.js:1326 S04-RF: Event handlers initialized with proper Enter key handling
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:719 [S04-RF] Refreshing UI for TARGET mode
4012-Section04.js:1232 S04-RF: Excel-compliant initialization complete
4012-Section05.js:103 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
24012-Section02.js:847 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:847 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:729 S06: Pattern A initialization starting...
4012-Section06.js:97 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:504 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section06.js:499 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section06.js:229 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:749 S06: Pattern A initialization complete.
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
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:681
calculateReferenceModel @ 4012-Section07.js:1011
calculateAll @ 4012-Section07.js:1054
onSectionRendered @ 4012-Section07.js:1456
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
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
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S09] 🔗 Published initial ref_d_63=126 for S07
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: UI refreshed for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
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
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_88=8.50 to StateManager
 [S11 REF DEFAULTS] Published ref_d_89=82.14 to StateManager
 [S11 REF DEFAULTS] Published ref_d_90=4.83 to StateManager
 [S11 REF DEFAULTS] Published ref_d_91=160.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_92=101.66 to StateManager
 [S11 REF DEFAULTS] Published ref_d_93=1.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8224037024270119, i_80=49282.218048, i_81=101324.69646622626
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 60.46%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 69,347.38
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
4012-Section10.js:2676 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
 [S10DISPLAY] Display (target) e_81 = 114,698.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
4012-Section11.js:225 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section11.js:2048 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section10.js:2676 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
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
 [Cooling m_124 COOLING-TARGET] m_129_annual=10559.843142882455, E37_daily=53.87675072899212, E45(d_21)=196, E50=10559.843142882455, E51=67734.01555200001, E52=-57174.17240911756, E54(m_19)=120, E55(result)=-19.852143197610264
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section14.js:1478 S14: Pattern A initialization complete.
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: 0 → 134004.53546146475
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134004.53546146475
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1795
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
onSectionRendered @ 4012-Section15.js:2265
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1142 Section03: Province selected: ON
4012-Section03.js:1203 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section03.js:1142 Section03: Province selected: ON
4012-Section03.js:1203 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
(anonymous) @ index.html:1052Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: default, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
initialize @ 4012-Section02.js:1788
onSectionRendered @ 4012-Section02.js:1263
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072
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
 [S12] U-agg TGT: TB%=20 → g_101=0.369134, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.3691338043682594*24)/1000 = 40.75237200225583
 [S12DB] TGT i_101 result: 40.75237200225583 * 2476.6199999999994 = 100928.13954822681
 [S12DB] TGT g_104 calc: (0.3691338043682594*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.3553488737034371
 [S12DB] TGT ROW104: i_101=100928.13954822681, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=140894.77200966587
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
 [S12DB] g_104 DISPLAY (target): 0.3553488738027787
 [Section12] Calculated display values updated for target mode
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 S03: Self-Contained State Module initialization complete
 [S04-RF] Added 30 clean dependency listeners
 S04-RF: Event handlers initialized with proper Enter key handling
 S04-RF: Section rendered - initializing Excel-compliant Pattern A module
 S04-RF: Initializing Pattern A ModeManager
 S04-RF: Target defaults set from field definitions - single source of truth
 S04-RF: Reference defaults set from field definitions - single source of truth
 [S04-RF] Added 30 clean dependency listeners
 S04-RF: Event handlers initialized with proper Enter key handling
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Refreshing UI for TARGET mode
 S04-RF: Excel-compliant initialization complete
 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
2 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization starting...
 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
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
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:681
calculateReferenceModel @ 4012-Section07.js:1011
calculateAll @ 4012-Section07.js:1054
onSectionRendered @ 4012-Section07.js:1456
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2441 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2279 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:314 S09: UI refreshed for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section09.js:389 [S09] Updated calculated display values for target mode
4012-Section10.js:2730 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2705 S10: Simplified global StateManager listeners added
4012-Section10.js:2754 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
 S11: Section rendered - initializing Self-Contained State Module.
 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_88=8.50 to StateManager
 [S11 REF DEFAULTS] Published ref_d_89=82.14 to StateManager
 [S11 REF DEFAULTS] Published ref_d_90=4.83 to StateManager
 [S11 REF DEFAULTS] Published ref_d_91=160.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_92=101.66 to StateManager
 [S11 REF DEFAULTS] Published ref_d_93=1.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
 [S11] Listener: ref_d_97 changed → recalculating (src=default)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.8224037024270119, i_80=49282.218048, i_81=101324.69646622626
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
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
 [S10DISPLAY] Display (target) g_81 = 60.46%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 69,347.38
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
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
 [S10DISPLAY] Display (target) g_81 = 70.55%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 80,918.20
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
4012-Section10.js:2688 S10: Target utilization factor dependency i_98 changed.
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
4012-Section11.js:218 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
4012-Section11.js:225 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section11.js:2048 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 94.43%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,308.11
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9472668950184051, i_80=49282.218048, i_81=116708.5341748724
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
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1441 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1450 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1441 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10559.843142882455, E37_daily=53.87675072899212, E45(d_21)=196, E50=10559.843142882455, E51=67734.01555200001, E52=-57174.17240911756, E54(m_19)=120, E55(result)=-19.852143197610264
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section14.js:1478 S14: Pattern A initialization complete.
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=0, k_32=0 (wood offset: 0 MT/yr)
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: 0 → 134004.53546146475
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134004.53546146475
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
calculateValues @ 4012-Section15.js:1795
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:843
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1074
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setTargetValue @ 4012-Section15.js:104
calculateValues @ 4012-Section15.js:1773
calculateTargetModel @ 4012-Section15.js:1623
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for reference mode
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:847
calculateRow32 @ 4012-Section04.js:1018
calculateAll @ 4012-Section04.js:1086
calculateAndRefresh @ 4012-Section04.js:1296
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setReferenceValue @ 4012-Section15.js:122
calculateReferenceModel @ 4012-Section15.js:1478
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=93496.43795200001, k_32=4768.3183355520005 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
initializeEventHandlers @ 4012-Section15.js:2239
onSectionRendered @ 4012-Section15.js:2265
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1142 Section03: Province selected: ON
4012-Section03.js:1203 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section03.js:1142 Section03: Province selected: ON
4012-Section03.js:1203 City dropdown updated for ON - selected: Alexandria
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
forceTEDITELIUpdate @ 4011-SectionIntegrator.js:305
initializeTEDITELIIntegration @ 4011-SectionIntegrator.js:241
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
index.html:1084 TEUI Calculator 4.011 initialization complete
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
4011-QCMonitor.js:40 [QCMonitor] QC monitoring disabled. Add ?qc=true to URL to activate.
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:1164 [S01DB] upstream snapshot {ref_j_32: '93496.43795200001', ref_k_32: '4768.3183355520005', j_32: '134004.53546146475', k_32: '6834.231308534702', ref_h_15: '1427.20', …}
 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.89331240293214, useType=Utility Bills
 🔍 [S01] T.1 Calculation: e_6=16.3 (ref), h_6=11.7 (target) → reduction should be 28%
 🔍 [S01DB] UPDATING h_10: 93.9 (from j_32=134004.53546146475, area=1427.2)
 🔍 [S01] h_6 explanation: target=11.7, ref=16.3, reduction=0.28220858895705525, percent=28%
 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1421
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1421
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1421
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1421
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1427
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1427
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1427
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateVolumeMetrics @ 4012-Section12.js:1427
calculateReferenceModel @ 4012-Section12.js:2229
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.347926, g_102=0.405405
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1603
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1603
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1603
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1603
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1604
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1604
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1604
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1604
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1605
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1605
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1605
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1170
calculateCombinedUValue @ 4012-Section12.js:1605
calculateReferenceModel @ 4012-Section12.js:2230
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9733965895980725, i_80=49282.218048, i_81=119927.85743937944
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
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2697 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0.34792632830961084*24)/1000 = 38.41106664538104
4012-Section12.js:1964 [S12DB] REF i_101 result: 38.41106664538104 * 2482.6199999999994 = 95360.08227515586
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0.34792632830961084*2482.6199999999994 + 0.4054054054054054*1100.42)/3583.0400009999994 = 0.365579250312205
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=95360.08227515586, i_102=20985.306810810813, i_103=36440.07984031935 → i_104=152785.46892628603
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1852.6412868093894 → k_104=-1852.6412868093894
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1170
calculateEnvelopeTotals @ 4012-Section12.js:2156
calculateReferenceModel @ 4012-Section12.js:2246
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1170
calculateEnvelopeTotals @ 4012-Section12.js:2156
calculateReferenceModel @ 4012-Section12.js:2246
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1170
calculateEnvelopeTotals @ 4012-Section12.js:2156
calculateReferenceModel @ 4012-Section12.js:2246
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1391 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1391
calculateAll @ 4012-Section15.js:1285
(anonymous) @ 4012-Section15.js:2084
(anonymous) @ 4011-StateManager.js:559
notifyListeners @ 4011-StateManager.js:557
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1170
calculateEnvelopeTotals @ 4012-Section12.js:2156
calculateReferenceModel @ 4012-Section12.js:2246
calculateAll @ 4012-Section12.js:2201
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1072Understand this warningAI
4012-Section15.js:1395 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=246281.90687828604, k_32=12560.37725079259 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=134004.53546146475, k_32=6834.231308534702 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=246281.90687828604, k_32=12560.37725079259 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
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
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: 134004.53546146475 → 132767.99730990978
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 132767.99730990978
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=132767.99730990978, k_32=6771.167862805399 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=246281.90687828604, k_32=12560.37725079259 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=132767.99730990978, k_32=6771.167862805399 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=246281.90687828604, k_32=12560.37725079259 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=11338.666473510437, E37_daily=57.85033915056346, E45(d_21)=196, E50=11338.666473510437, E51=67734.01555200001, E52=-56395.34907848958, E54(m_19)=120, E55(result)=-19.581718430031103
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0.2924870886396271
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4011-Clock.js:41 [CLOCK] Starting initial load timing
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1878 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1589 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0.27834106264768865*24)/1000 = 30.72885331630483
4012-Section12.js:1971 [S12DB] TGT i_101 result: 30.72885331630483 * 2476.6199999999994 = 76103.69270022685
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0.27834106264768865*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.29248708855785915
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=76103.69270022685, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166591
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0.2924870886396271
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1844 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section12.js:1589 [S12] U-agg REF: TB%=50 → g_101=0.347926, g_102=0.405405
4012-Section12.js:1859 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (4600*0.34792632830961084*24)/1000 = 38.41106664538104
4012-Section12.js:1964 [S12DB] REF i_101 result: 38.41106664538104 * 2482.6199999999994 = 95360.08227515586
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0.34792632830961084*2482.6199999999994 + 0.4054054054054054*1100.42)/3583.0400009999994 = 0.365579250312205
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=95360.08227515586, i_102=20985.306810810813, i_103=36440.07984031935 → i_104=152785.46892628603
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1852.6412868093894 → k_104=-1852.6412868093894
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
4012-Section12.js:2328 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_101=0.34792632830961084
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
4012-Section12.js:2328 [S12DB] STORED for S15: ref_g_104=0.365579250312205
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_101=95360.08227515586
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_102=20985.306810810813
4012-Section12.js:2328 [S12DB] STORED for S15: ref_i_104=152785.46892628603
4012-Section12.js:2333 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1589 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1866 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (4600*0.27834106264768865*24)/1000 = 30.72885331630483
4012-Section12.js:1971 [S12DB] TGT i_101 result: 30.72885331630483 * 2476.6199999999994 = 76103.69270022685
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0.27834106264768865*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.29248708855785915
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=76103.69270022685, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166591
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:266 [S12DB] g_104 DISPLAY (target): 0.2924870886396271
4012-Section12.js:270 [Section12] Calculated display values updated for target mode
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9733965895980725, i_80=49282.218048, i_81=119927.85743937944
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:864 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=67734.01555200001, E52=-59688.91845754341, E54(m_19)=120, E55(result)=-20.72531890886924
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section06.js:504 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:499 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=132767.99730990978, k_32=6771.167862805399 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=132938, g_32=6779.838, j_32=246281.90687828604, k_32=12560.37725079259 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:1164 [S01DB] upstream snapshot {ref_j_32: '246281.90687828604', ref_k_32: '12560.37725079259', j_32: '132767.99730990978', k_32: '6771.167862805399', ref_h_15: '1427.20', …}
4012-Section01.js:715 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.02690394472378, useType=Utility Bills
4012-Section01.js:785 🔍 [S01] T.1 Calculation: e_6=21.8 (ref), h_6=11.6 (target) → reduction should be 47%
4012-Section01.js:877 🔍 [S01DB] UPDATING h_10: 93.0 (from j_32=132767.99730990978, area=1427.2)
4012-Section01.js:489 🔍 [S01] h_6 explanation: target=11.6, ref=21.8, reduction=0.4678899082568808, percent=47%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 551ms (all calculations finalized)
4012-Section01.js:1182 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
index.html#:1 Blocked aria-hidden on an element because its descendant retained focus. The focus must not be hidden from assistive technology users. Avoid using aria-hidden on a focused element or its ancestor. Consider using the inert attribute instead, which will also prevent focus. For more details, see the aria-hidden section of the WAI-ARIA specification at https://w3c.github.io/aria/#aria-hidden.
Element with focus: button
Ancestor with aria-hidden:  <div class=​"modal fade" id=​"disclaimerModal" tabindex=​"-1" aria-labelledby=​"disclaimerModalLabel" style=​"display:​ none;​ padding-left:​ 0px;​" aria-hidden=​"true">​…​</div>​Understand this errorAI
4011-FileHandler.js:77 Detected Excel file.
4011-ExcelMapper.js:367 🔍 [ExcelMapper] Reading REPORT sheet location cells:
4011-ExcelMapper.js:368   D19 cell object: {t: 's', v: 'ON', r: '<t>ON</t>', h: 'ON', w: 'ON'}
4011-ExcelMapper.js:369   H19 cell object: {t: 's', v: 'Milton', r: '<t>Milton</t>', h: 'Milton', w: 'Milton'}
   D19 value: ON
   H19 value: Milton
 [FileHandler] 🔍 REPORT sheet imported data: {d_12: 'A-Assembly', d_13: 'OBC SB10 5.5-6 Z5 (2010)', d_14: 'Utility Bills', d_15: 'Not Reported', h_12: 2023, …}
 [FileHandler] 🔍 d_19 in importedData? true Value: ON
 [FileHandler] 🔍 h_19 in importedData? true Value: Milton
 [FileHandler] 🎯 TARGET Location from REPORT sheet: Province="ON", City="Milton"
 [FileHandler] 🔒 IMPORT QUARANTINE START - Muting listeners
 [StateManager] 🔒 Listeners MUTED (import quarantine active)
 [FileHandler DEBUG] updateStateFromImportData CALLED with 124 fields, skipRecalculation= false
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
 [StateManager] Skipped listener for d_27 (quarantine active)
 [StateManager] Skipped listener for d_28 (quarantine active)
 [StateManager] Skipped listener for d_29 (quarantine active)
 [StateManager] Skipped listener for d_30 (quarantine active)
 [StateManager] Skipped listener for d_31 (quarantine active)
 [StateManager] Skipped listener for l_27 (quarantine active)
 Skipping import for unknown fieldId: l_28
(anonymous) @ 4011-FileHandler.js:326
updateStateFromImportData @ 4011-FileHandler.js:318
processImportedExcel @ 4011-FileHandler.js:147
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 Skipping import for unknown fieldId: l_29
(anonymous) @ 4011-FileHandler.js:326
updateStateFromImportData @ 4011-FileHandler.js:318
processImportedExcel @ 4011-FileHandler.js:147
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 Skipping import for unknown fieldId: l_30
(anonymous) @ 4011-FileHandler.js:326
updateStateFromImportData @ 4011-FileHandler.js:318
processImportedExcel @ 4011-FileHandler.js:147
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 Skipping import for unknown fieldId: l_31
(anonymous) @ 4011-FileHandler.js:326
updateStateFromImportData @ 4011-FileHandler.js:318
processImportedExcel @ 4011-FileHandler.js:147
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
 [StateManager] Skipped listener for i_45 (quarantine active)
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
 [StateManager] Skipped listener for d_63 (quarantine active)
 [StateManager] Skipped listener for g_63 (quarantine active)
 [StateManager] Skipped listener for d_64 (quarantine active)
 [StateManager] Skipped listener for d_65 (quarantine active)
 [StateManager] Skipped listener for d_66 (quarantine active)
 [StateManager] Skipped listener for d_67 (quarantine active)
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
(anonymous) @ 4011-StateManager.js:1450
loadReferenceData @ 4011-StateManager.js:1433
updateStateFromImportData @ 4011-FileHandler.js:434
processImportedExcel @ 4011-FileHandler.js:147
reader.onload @ 4011-FileHandler.js:80
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
 [StateManager] Checking field: t_66, value: 2.0
 [StateManager] Standard OBC SB10 5.5-6 Z5 (2010) defines field t_66 not in known user-editable fields
(anonymous) @ 4011-StateManager.js:1450
loadReferenceData @ 4011-StateManager.js:1433
updateStateFromImportData @ 4011-FileHandler.js:434
processImportedExcel @ 4011-FileHandler.js:147
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
 [StateManager] Checking field: g_88, value: 2.560
 [StateManager] Applying g_88 = 2.560
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
 [StateManager] Final activeReferenceDataSet keys: 130
 [FileHandler] loadReferenceData finished after import.
 [FileHandler] Target import complete. 120 fields updated. 4 rows/fields skipped.
 [FileHandler] Imported 124 Target values
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
 [FileHandler DEBUG] mapExcelToReferenceModel returned, keys: 124
 [FileHandler DEBUG] About to call updateStateFromImportData for 124 reference fields
 [FileHandler DEBUG] First 5 reference fields: (5) ['ref_d_12', 'ref_d_13', 'ref_d_14', 'ref_d_15', 'ref_h_12']
 [FileHandler DEBUG] updateStateFromImportData CALLED with 124 fields, skipRecalculation= true
 [FileHandler DEBUG] stateManager exists: true fieldManager exists: true
 [FileHandler DEBUG] Passed validation checks, starting forEach loop...
 [StateManager] Skipped listener for ref_d_12 (quarantine active)
 [FileHandler] Reference field imported: ref_d_12 = A-Assembly
 [StateManager] Skipped listener for ref_d_13 (quarantine active)
 [FileHandler] Reference field imported: ref_d_13 = OBC SB10 5.5-6 Z5 (2010)
 [StateManager] Skipped listener for ref_d_14 (quarantine active)
 [FileHandler] Reference field imported: ref_d_14 = Targeted Use
 [StateManager] Skipped listener for ref_d_15 (quarantine active)
 [FileHandler] Reference field imported: ref_d_15 = Not Reported
 [StateManager] Skipped listener for ref_h_12 (quarantine active)
 [FileHandler] Reference field imported: ref_h_12 = 2023
 [StateManager] Skipped listener for ref_h_13 (quarantine active)
 [FileHandler] Reference field imported: ref_h_13 = 50
 [StateManager] Skipped listener for ref_h_14 (quarantine active)
 [FileHandler] Reference field imported: ref_h_14 = Sherwood CC
 [StateManager DEBUG] ref_h_15 setValue: "11167" (state: imported, prev: 1427.20)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4011-FileHandler.js:338
updateStateFromImportData @ 4011-FileHandler.js:318
processImportedExcelReference @ 4011-FileHandler.js:204
processImportedExcel @ 4011-FileHandler.js:152
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
 [FileHandler] Reference field imported: ref_d_39 = Pt.3 Mass Timber
 [StateManager] Skipped listener for ref_i_41 (quarantine active)
 [FileHandler] Reference field imported: ref_i_41 = 350
 [StateManager] Skipped listener for ref_d_44 (quarantine active)
 [FileHandler] Reference field imported: ref_d_44 = 0
 [StateManager] Skipped listener for ref_d_45 (quarantine active)
 [FileHandler] Reference field imported: ref_d_45 = 0
 [StateManager] Skipped listener for ref_d_46 (quarantine active)
 [FileHandler] Reference field imported: ref_d_46 = 0
 [StateManager] Skipped listener for ref_i_45 (quarantine active)
 [FileHandler] Reference field imported: ref_i_45 = 0
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
 [FileHandler] Reference field imported: ref_d_56 = 150
 [StateManager] Skipped listener for ref_d_57 (quarantine active)
 [FileHandler] Reference field imported: ref_d_57 = 1000
 [StateManager] Skipped listener for ref_d_58 (quarantine active)
 [FileHandler] Reference field imported: ref_d_58 = 150
 [StateManager] Skipped listener for ref_d_59 (quarantine active)
 [FileHandler] Reference field imported: ref_d_59 = 45
 [StateManager] Skipped listener for ref_d_63 (quarantine active)
 [FileHandler] Reference field imported: ref_d_63 = 2400
 [StateManager] Skipped listener for ref_g_63 (quarantine active)
 [FileHandler] Reference field imported: ref_g_63 = 10
 [StateManager] Skipped listener for ref_d_64 (quarantine active)
 [FileHandler] Reference field imported: ref_d_64 = Active
 [StateManager] Skipped listener for ref_d_65 (quarantine active)
 [FileHandler] Reference field imported: ref_d_65 = 7
 [StateManager] Skipped listener for ref_d_66 (quarantine active)
 [FileHandler] Reference field imported: ref_d_66 = 2
 [StateManager] Skipped listener for ref_d_67 (quarantine active)
 [FileHandler] Reference field imported: ref_d_67 = 7
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
 [FileHandler] Reference field imported: ref_d_80 = NRC 50%
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
 [FileHandler] Reference field imported: ref_d_142 = 30000
 [FileHandler] Reference data import complete. 124 fields updated. Skipping recalculation.
 [FileHandler DEBUG] Returned from updateStateFromImportData
 [FileHandler DEBUG] Returned from processImportedExcelReference
 [FileHandler] 🔧 Syncing all Pattern A sections after BOTH imports complete...
 [FileHandler] 🔧 PHASE 2: Syncing Pattern A sections from global StateManager...
 [FileHandler] Syncing S02 TargetState...
 S02 TargetState: Synced d_12 = A-Assembly from global StateManager
 S02 TargetState: Synced d_13 = OBC SB10 5.5-6 Z5 (2010) from global StateManager
 S02 TargetState: Synced d_14 = Utility Bills from global StateManager
 S02 TargetState: Synced d_15 = Not Reported from global StateManager
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
 S02 ReferenceState: Synced d_15 = Not Reported from global StateManager (ref_d_15)
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
 S04 TargetState: Synced d_27 = 2000299 from global StateManager
 S04 TargetState: Synced d_28 = 355013 from global StateManager
 S04 TargetState: Synced d_29 = 0 from global StateManager
 S04 TargetState: Synced d_30 = 0 from global StateManager
 S04 TargetState: Synced d_31 = 0 from global StateManager
 S04 TargetState: Synced h_35 = 1 from global StateManager
 [FileHandler] Syncing S04 ReferenceState...
 S04 ReferenceState: Synced d_27 = 2000299 from global StateManager (ref_d_27)
 S04 ReferenceState: Synced d_28 = 355013 from global StateManager (ref_d_28)
 S04 ReferenceState: Synced d_29 = 0 from global StateManager (ref_d_29)
 S04 ReferenceState: Synced d_30 = 0 from global StateManager (ref_d_30)
 S04 ReferenceState: Synced d_31 = 0 from global StateManager (ref_d_31)
 S04 ReferenceState: Synced h_35 = 1 from global StateManager (ref_h_35)
 [FileHandler] S05 TargetState.syncFromGlobalState() not available (not yet implemented)
 [FileHandler] S06 TargetState.syncFromGlobalState() not available (not yet implemented)
 [FileHandler] S08 TargetState.syncFromGlobalState() not available (not yet implemented)
 [FileHandler] S15 TargetState.syncFromGlobalState() not available (not yet implemented)
 [FileHandler] ✅ PHASE 2: Pattern A section sync complete
 [FileHandler] ✅ Pattern A sections synced with imported values
 [StateManager] 🔓 Listeners UNMUTED (import quarantine ended)
 [FileHandler] 🔓 IMPORT QUARANTINE END - Unmuting listeners
 [FileHandler] Triggering post-import calculation with fresh values...
 [CLOCK] Starting current calculation timing
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9733965895980725, i_80=49282.218048, i_81=119927.85743937944
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
 [S10DISPLAY] Display (target) g_81 = 94.20%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,049.63
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
 [S10DISPLAY] Display (target) g_81 = 94.20%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,049.63
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=10351.065635574147, E37_daily=52.81155936517422, E45(d_21)=196, E50=10351.065635574147, E51=67734.01555200001, E52=-57382.94991642587, E54(m_19)=120, E55(result)=-19.92463538764787
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999996016761064, i_80=49282.218048, i_81=123205.49604428755
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
 [S10DISPLAY] Display (target) g_81 = 94.20%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 108,049.63
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
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 94.20%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 108,049.63
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Starting complete Excel-compliant calculations
 [S01] j_32 listener: 132767.99730990978 → 900238.932386255
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 900238.932386255
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=900238.932386255, k_32=60316.00846987908 (wood offset: 0 MT/yr)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=900238.932386255, k_32=60316.00846987908 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=132767.99730990978, k_32=8895.455819763954 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=900238.932386255, k_32=60316.00846987908 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
2 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999996016761064, i_80=49282.218048, i_81=123205.49604428755
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
 [S10DISPLAY] Display (target) g_81 = 99.97%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,665.89
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
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 99.97%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 114,665.89
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=8045.097094456602, E37_daily=41.04641374722756, E45(d_21)=196, E50=8045.097094456602, E51=722392.6739567379, E52=-714347.5768622813, E54(m_19)=120, E55(result)=-248.037353077181
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1414 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: 900238.932386255 → 906851.5770443389
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 906851.5770443389
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=906851.5770443389, k_32=60759.055661970706 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=906851.5770443389, k_32=60759.055661970706 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Cooling.js:427 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S04-RF] Starting complete Excel-compliant calculations
 [S01] j_32 listener: 906851.5770443389 → 897218.48
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 897218.48
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=897218.48, k_32=60113.638159999995 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=897218.48, k_32=60113.638159999995 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=942778.656, k_32=63166.169952 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=25658.143592893175, E37_daily=130.90889588210803, E45(d_21)=196, E50=25658.143592893175, E51=722392.6739567379, E52=-696734.5303638447, E54(m_19)=120, E55(result)=-241.9217119318905
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999996016761064, i_80=49282.218048, i_81=123205.49604428755
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
4012-Section10.js:448 [S10DISPLAY] Display (target) m_74 = 1.31
4012-Section10.js:448 [S10DISPLAY] Display (target) m_75 = 76.94
4012-Section10.js:448 [S10DISPLAY] Display (target) m_76 = 70.74
4012-Section10.js:448 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
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
 [S10DISPLAY] Display (target) g_81 = 99.97%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,663.14
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
 [S10DISPLAY] Display (target) g_81 = 99.97%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,663.14
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
2 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Target listener triggered by j_19, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999996016761064, i_80=49282.218048, i_81=123205.49604428755
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
 [S10DISPLAY] Display (target) g_81 = 99.97%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,663.14
 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9999996016761064, i_80=49282.218048, i_81=123205.49604428755
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2040 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2054 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2091 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9999996016761064, i_80=49282.218048, i_81=123205.49604428755
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg TGT: TB%=30 → g_101=0.175121, g_102=0.351349
 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999996016761064, i_80=49282.218048, i_81=123205.49604428755
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section12.js:1944 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:1968 [S12DB] TGT h_101 calc: (3920*0.17512139849145733*24)/1000 = 16.475421170076306
4012-Section12.js:1971 [S12DB] TGT i_101 result: 16.475421170076306 * 14260.13 = 234941.6476900402
4012-Section12.js:2120 [S12DB] TGT g_104 calc: (0.17512139849145733*14260.13 + 0.35134899181057844*11168)/25428.130000999998 = 0.25252031700946964
4012-Section12.js:2147 [S12DB] TGT ROW104: i_101=234941.6476900402, i_102=184578.63502702702, i_103=113730.13491839998 → i_104=533250.4176354673
4012-Section12.js:2150 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-343.17259683489374 → k_104=-343.17259683489374
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S12DB] g_104 DISPLAY (target): 0.25252031701940036
 [Section12] Calculated display values updated for target mode
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=60034.05, ref_k_97=-926.32
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=60034.05, ref_k_97=-926.32
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999995882101661, i_80=49282.218048, i_81=123205.49438520904
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=-926.32
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999995812725916, i_80=49282.218048, i_81=123205.49353046139
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
 [S10DISPLAY] Display (target) i_82 = 68,819.37
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=-926.32
 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=-926.32
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999991410084376, i_80=49282.218048, i_81=123205.43928747629
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
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 114,698.95
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 114,698.95
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 99.98%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 114,681.61
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2697 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:341 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
4012-Section10.js:448 [S10DISPLAY] Display (target) m_73 = 50.00
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=1522.55
 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=1522.55
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=1522.55
 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=1522.55
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
2 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 S10: Reference listener triggered by ref_j_19, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
 [S10REF] Complete: g_80=0.4, g_81=0.9999991410084376, i_80=49282.218048, i_81=123205.43928747629
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10DISPLAY] updateCalculatedDisplayValues() called in target mode
 [S10DISPLAY] Display (target) m_73 = 50.00
 [S10DISPLAY] Display (target) m_74 = 1.31
 [S10DISPLAY] Display (target) m_75 = 76.94
 [S10DISPLAY] Display (target) m_76 = 70.74
 [S10DISPLAY] Display (target) m_77 = 25.86
4012-Section10.js:448 [S10DISPLAY] Display (target) m_78 = 75.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_73 = 375.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_74 = 106.29
4012-Section10.js:448 [S10DISPLAY] Display (target) i_75 = 294.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_76 = 11,247.66
4012-Section10.js:448 [S10DISPLAY] Display (target) i_77 = 2,603.07
4012-Section10.js:448 [S10DISPLAY] Display (target) i_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) i_79 = 14,626.70
4012-Section10.js:448 [S10DISPLAY] Display (target) k_73 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_74 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_75 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_76 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_77 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) k_78 = 0.00
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
 [S10DISPLAY] Display (target) e_80 = 114,698.95
 [S10DISPLAY] Display (target) e_81 = 114,698.95
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=1522.55
 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=1522.55
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
2 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=1522.55
 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=1522.55
2 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=1522.55
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=1522.55
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=1522.55
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=1522.55
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=897218.48, k_32=60113.638159999995 (wood offset: 0 MT/yr)
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=897218.48, k_32=60113.638159999995 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 S10: Reference listener triggered by ref_i_71, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
 [S10REF] Complete: g_80=0.4, g_81=0.9984834468987388, i_80=232546.294848, i_81=580484.0651084036
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
 [S10DISPLAY] Display (target) g_81 = 99.98%
 [S10DISPLAY] Display (target) i_80 = 45,879.58
 [S10DISPLAY] Display (target) i_81 = 114,681.61
 [S10DISPLAY] Display (target) i_82 = 68,819.37
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=897218.48, k_32=60113.638159999995 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=897218.48, k_32=60113.638159999995 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S01] j_32 listener: 897218.48 → 884390.336
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 884390.336
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=884390.336, k_32=59254.152512 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=884390.336, k_32=59254.152512 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87589.5223336692, k_54=0 (cleared)
 [S04-RF] Starting complete Excel-compliant calculations
 [S01] j_32 listener: 884390.336 → 1791915.1816702767
 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 1791915.1816702767
2 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1791915.1816702767, k_32=227513.62491497854 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
 [S04-RF] Starting complete Excel-compliant calculations
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1791915.1816702767, k_32=227513.62491497854 (wood offset: 0 MT/yr)
 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1625343.8399999999, k_32=108898.03727999999 (wood offset: 0 MT/yr)
 [S04-RF] ✅ Complete dual-engine calculations finished
 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Gas" (REF)
4012-Section07.js:853 [S07] 🔥 Gas calc: demand=42760.48, afue=0.9 → e_51=4598.449922517634, k_54=0 (cleared)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1791915.1816702767, k_32=227513.62491497854 (wood offset: 0 MT/yr)
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1672988.8943976895, k_32=117731.65958115636 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1791915.1816702767, k_32=227513.62491497854 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1672988.8943976895, k_32=117731.65958115636 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section01.js:1261 [S01] j_32 listener: 1791915.1816702767 → 2367829.5556702767
4012-Section01.js:1262 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2367829.5556702767
24012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=2367829.5556702767, k_32=266099.8879729785 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1672988.8943976895, k_32=117731.65958115636 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=2367829.5556702767, k_32=266099.8879729785 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1672988.8943976895, k_32=117731.65958115636 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section10.js:2667 S10: Target listener triggered by i_71, recalculating all.
4012-Section10.js:1819 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
 [S10REF] Complete: g_80=0.4, g_81=0.9984834468987388, i_80=232546.294848, i_81=580484.0651084036
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
 [S10DISPLAY] Display (target) e_80 = 501,271.61
 [S10DISPLAY] Display (target) e_81 = 501,271.61
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 91.72%
 [S10DISPLAY] Display (target) i_80 = 200,508.64
 [S10DISPLAY] Display (target) i_81 = 459,741.68
 [S10DISPLAY] Display (target) i_82 = 300,762.97
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S12] U-agg REF: TB%=50 → g_101=0.202063, g_102=0.405403
 [S12] 🔵 REF CLIMATE READ: d_20=3920, d_21=410
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
 [S10REF] Complete: g_80=0.4, g_81=0.9984644371090177, i_80=232546.294848, i_81=580473.0134679899
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
 [S10DISPLAY] Display (target) e_80 = 501,271.61
 [S10DISPLAY] Display (target) e_81 = 501,271.61
 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
 [S10DISPLAY] Display (target) g_80 = 40.00%
 [S10DISPLAY] Display (target) g_81 = 91.72%
 [S10DISPLAY] Display (target) i_80 = 200,508.64
 [S10DISPLAY] Display (target) i_81 = 459,741.68
 [S10DISPLAY] Display (target) i_82 = 300,762.97
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
4012-Section10.js:448 [S10DISPLAY] Display (target) k_79 = 130.15
4012-Section10.js:448 [S10DISPLAY] Display (target) j_73 = 2.56%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_74 = 0.73%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_75 = 2.01%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_76 = 76.90%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_77 = 17.80%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) j_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_73 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_74 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_75 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_76 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_77 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_78 = 0.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) l_79 = 100.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:448 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:415 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:448 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:448 [S10DISPLAY] Display (target) g_81 = 91.72%
4012-Section10.js:448 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:448 [S10DISPLAY] Display (target) i_81 = 459,741.68
4012-Section10.js:448 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section12.js:1933 [S12DB] REF CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:1961 [S12DB] REF h_101 calc: (3920*0.20206315210552767*24)/1000 = 19.010101350088043
4012-Section12.js:1964 [S12DB] REF i_101 result: 19.010101350088043 * 2482.6199999999994 = 47194.85781375557
4012-Section12.js:2116 [S12DB] REF g_104 calc: (0.20206315210552767*2482.6199999999994 + 0.4054026828583597*1101.42)/3584.0400009999994 = 0.2645519149812859
4012-Section12.js:2140 [S12DB] REF ROW104: i_101=47194.85781375557, i_102=21004.23602374932, i_103=31053.285429141713 → i_104=99252.3792666466
4012-Section12.js:2143 [S12DB] REF ROW104: h_21="Capacitance", k_98=3045.0958224905635 → k_104=3045.0958224905635
 [S12DB] STORED for S15: ref_d_101=2482.6199999999994
 [S12DB] STORED for S15: ref_d_102=1101.42
 [S12DB] STORED for S15: ref_g_101=0.20206315210552767
 [S12DB] STORED for S15: ref_g_102=0.4054026828583597
 [S12DB] STORED for S15: ref_g_104=0.2645519149812859
 [S12DB] STORED for S15: ref_i_101=47194.85781375557
 [S12DB] STORED for S15: ref_i_102=21004.23602374932
 [S12DB] STORED for S15: ref_i_104=99252.3792666466
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=30 → g_101=0.175121, g_102=0.351349
 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (3920*0.17512139849145733*24)/1000 = 16.475421170076306
 [S12DB] TGT i_101 result: 16.475421170076306 * 14260.13 = 234941.6476900402
 [S12DB] TGT g_104 calc: (0.17512139849145733*14260.13 + 0.35134899181057844*11168)/25428.130000999998 = 0.25252031700946964
 [S12DB] TGT ROW104: i_101=234941.6476900402, i_102=184578.63502702702, i_103=113730.13491839998 → i_104=533250.4176354673
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-343.17259683489374 → k_104=-343.17259683489374
 [S12DB] g_104 DISPLAY (target): 0.25252031701940036
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
 [S10REF] Using utilization method: NRC 40%
 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
4012-Section10.js:2134 [S10REF] Complete: g_80=0.4, g_81=0.9984644371090177, i_80=232546.294848, i_81=580473.0134679899
4012-Section10.js:1827 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1717 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1198 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1270 [S11] REF TB%=50% → ref_i_97=52252.60, ref_k_97=1522.55
4012-Section11.js:1453 [S11] Writing ref penalty: ref_i_97=52252.60, ref_k_97=1522.55
24012-Section11.js:1203 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
4012-Section07.js:853 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87589.5223336692, k_54=0 (cleared)
4012-Section07.js:829 [S07] calculateEmissionsAndLosses: systemType="Gas" (REF)
4012-Section07.js:853 [S07] 🔥 Gas calc: demand=42760.48, afue=0.9 → e_51=4598.449922517634, k_54=0 (cleared)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:432 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:282 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:383 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:342 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=410, E50=0, E51=1511127.5322564414, E52=-1511127.5322564414, E54(m_19)=120, E55(result)=-524.6970598112644
4012-Cooling.js:502 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section06.js:504 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:499 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=2367829.5556702767, k_32=266099.8879729785 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1672988.8943976895, k_32=117731.65958115636 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section03.js:1142 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=2367829.5556702767, k_32=266099.8879729785 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1672988.8943976895, k_32=117731.65958115636 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section04.js:1064 [S04-RF] Starting complete Excel-compliant calculations
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=2367829.5556702767, k_32=266099.8879729785 (wood offset: 0 MT/yr)
4012-Section04.js:1020 [S04-RF] Row 32 subtotals: f_32=5678628.43315522, g_32=816000.006, j_32=1672988.8943976895, k_32=117731.65958115636 (wood offset: 0 MT/yr)
4012-Section04.js:1092 [S04-RF] ✅ Complete dual-engine calculations finished
4012-Section04.js:754 [S04-RF] 🔄 Updating calculated display values for target mode
4012-Section03.js:1142 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1203 City dropdown updated for ON - selected: Milton
4012-Section03.js:1142 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1203 City dropdown updated for ON - selected: Milton
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1203 City dropdown updated for ON - selected: Milton
4011-FileHandler.js:174 [FileHandler] ✅ S03 UI refreshed after calculateAll()
4012-Section01.js:1164 [S01DB] upstream snapshot {ref_j_32: '1672988.8943976895', ref_k_32: '117731.65958115636', j_32: '2367829.5556702767', k_32: '266099.8879729785', ref_h_15: 11167, …}
4012-Section01.js:715 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=130.76965254768513, useType=Utility Bills
4012-Section01.js:785 🔍 [S01] T.1 Calculation: e_6=23.5 (ref), h_6=35.8 (target) → reduction should be -52%
4012-Section01.js:877 🔍 [S01DB] UPDATING h_10: 212.0 (from j_32=2367829.5556702767, area=11167)
4012-Section01.js:489 🔍 [S01] h_6 explanation: target=35.8, ref=23.5, reduction=-0.5234042553191489, percent=-52%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 39ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 39ms (interaction → h_10 settlement)
4012-Section01.js:1182 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section02.js:1802 [S02] Switched to REFERENCE mode
4012-Section02.js:1838 [S02] Refreshing UI for REFERENCE mode
4012-Section02.js:1896 [S02] Updated h_12 (reporting year) slider = "2023" (reference mode)
4012-Section02.js:1913 [S02] Updated h_13 (service life) slider = "50" (reference mode)
4012-Section02.js:1963 [S02] Updated h_15 = "11,167.00" (reference mode)
4012-Section02.js:1963 [S02] Updated i_17 = "XXXX" (reference mode)
4012-Section02.js:1963 [S02] Updated l_12 = "$0.1300" (reference mode)
4012-Section02.js:1963 [S02] Updated l_13 = "$0.5070" (reference mode)
4012-Section02.js:1963 [S02] Updated l_14 = "$1.6200" (reference mode)
4012-Section02.js:1963 [S02] Updated l_15 = "$180.00" (reference mode)
4012-Section02.js:1963 [S02] Updated l_16 = "$1.5000" (reference mode)
4012-Section02.js:1802 [S02] Switched to TARGET mode
4012-Section02.js:1838 [S02] Refreshing UI for TARGET mode
4012-Section02.js:1896 [S02] Updated h_12 (reporting year) slider = "2023" (target mode)
4012-Section02.js:1913 [S02] Updated h_13 (service life) slider = "50" (target mode)
4012-Section02.js:1963 [S02] Updated h_15 = "11,167.00" (target mode)
4012-Section02.js:1963 [S02] Updated i_17 = "XXXX" (target mode)
4012-Section02.js:1963 [S02] Updated l_12 = "$0.1300" (target mode)
4012-Section02.js:1963 [S02] Updated l_13 = "$0.5070" (target mode)
4012-Section02.js:1963 [S02] Updated l_14 = "$1.6200" (target mode)
4012-Section02.js:1963 [S02] Updated l_15 = "$180.00" (target mode)
4012-Section02.js:1963 [S02] Updated l_16 = "$1.5000" (target mode)
4012-Section05.js:200 S05: Switched to REFERENCE mode
4012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=reference
4012-Section05.js:200 S05: Switched to TARGET mode
4012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:200 S05: Switched to REFERENCE mode
4012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=reference
4012-Section05.js:200 S05: Switched to TARGET mode
4012-Section05.js:256 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:187 S06: Switched to REFERENCE mode
4012-Section06.js:229 🔄 [S06] updateCalculatedDisplayValues: mode=reference
4012-Section06.js:187 S06: Switched to TARGET mode
4012-Section06.js:229 🔄 [S06] updateCalculatedDisplayValues: mode=target