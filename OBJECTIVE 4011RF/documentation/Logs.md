4011-MobileDetect.js:113 Desktop device detected
RH-DEBUG-SCRIPT.js:56 ✅ RH-DEBUG-SCRIPT.js loaded. Use `TEUI.diag.checkRHState()` and `TEUI.diag.checkCoolingState()` to debug.
 S02: Target defaults set from field definitions - single source of truth
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
setCalculatedValue @ 4012-Section12.js:1248
calculateVolumeMetrics @ 4012-Section12.js:1456
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_102
setCalculatedValue @ 4012-Section12.js:1248
calculateVolumeMetrics @ 4012-Section12.js:1462
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
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
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1248
calculateCombinedUValue @ 4012-Section12.js:1639
calculateTargetModel @ 4012-Section12.js:2384
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_102
setCalculatedValue @ 4012-Section12.js:1248
calculateCombinedUValue @ 4012-Section12.js:1640
calculateTargetModel @ 4012-Section12.js:2384
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_110
setCalculatedValue @ 4012-Section12.js:1248
calculateNFactor @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2386
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_110
setCalculatedValue @ 4012-Section12.js:1248
calculateNFactor @ 4012-Section12.js:1871
calculateTargetModel @ 4012-Section12.js:2386
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_108
setCalculatedValue @ 4012-Section12.js:1248
calculateACH50Target @ 4012-Section12.js:1734
calculateTargetModel @ 4012-Section12.js:2387
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
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
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2021
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2027
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2033
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2039
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: h_102
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2045
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_102
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2051
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_102
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2057
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_102
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2063
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeTotals @ 4012-Section12.js:2218
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_102
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2781
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 DOM element not found for calculated field: d_105
setCalculatedValue @ 4012-Section12.js:1248
calculateVolumeMetrics @ 4012-Section12.js:1488
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2779
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
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
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
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
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1248
calculateVolumeMetrics @ 4012-Section12.js:1468
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1248
calculateVolumeMetrics @ 4012-Section12.js:1474
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1248
calculateVolumeMetrics @ 4012-Section12.js:1480
calculateTargetModel @ 4012-Section12.js:2383
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1248
calculateCombinedUValue @ 4012-Section12.js:1641
calculateTargetModel @ 4012-Section12.js:2384
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1248
calculateWWR @ 4012-Section12.js:1667
calculateTargetModel @ 4012-Section12.js:2385
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1248
calculateWWR @ 4012-Section12.js:1674
calculateTargetModel @ 4012-Section12.js:2385
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1248
calculateAirLeakageHeatLoss @ 4012-Section12.js:1928
calculateTargetModel @ 4012-Section12.js:2389
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1248
calculateAirLeakageHeatLoss @ 4012-Section12.js:1934
calculateTargetModel @ 4012-Section12.js:2389
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
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
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeTotals @ 4012-Section12.js:2198
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeTotals @ 4012-Section12.js:2220
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1248
calculateEnvelopeTotals @ 4012-Section12.js:2221
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1248
calculateACH50Target @ 4012-Section12.js:1748
calculateTargetModel @ 4012-Section12.js:2387
calculateAll @ 4012-Section12.js:2238
(anonymous) @ 4012-Section12.js:2783
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2635
registerWithStateManager @ 4012-Section12.js:2623
onSectionRendered @ 4012-Section12.js:2604
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
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
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: l_109
setCalculatedValue @ 4012-Section12.js:1248
calculateACH50Target @ 4012-Section12.js:1762
calculateTargetModel @ 4012-Section12.js:2387
calculateAll @ 4012-Section12.js:2238
onSectionRendered @ 4012-Section12.js:2608
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1248
calculateAe10 @ 4012-Section12.js:1789
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2238
onSectionRendered @ 4012-Section12.js:2608
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1248
calculateAe10 @ 4012-Section12.js:1796
calculateTargetModel @ 4012-Section12.js:2388
calculateAll @ 4012-Section12.js:2238
onSectionRendered @ 4012-Section12.js:2608
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
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
4012-Section12.js:1625 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1895 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1969 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1997 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2000 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1625 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2007 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2483 S03: Self-Contained State Module initialization complete
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
 [S09] Updated calculated display values for target mode
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
4012-Section12.js:1997 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2000 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1625 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2007 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section12.js:1625 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1895 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1969 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1997 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2000 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1625 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2007 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
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
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
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
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2007 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section12.js:1625 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1895 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1969 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1997 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2000 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1625 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2007 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
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
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1625 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2007 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2344 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1204 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1229 [S11 Area Sync] d_73 is null/undefined, skipping d_88
(anonymous) @ 4012-Section11.js:1229
syncAreasFromS10 @ 4012-Section11.js:1206
onSectionRendered @ 4012-Section11.js:2356
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1229 [S11 Area Sync] d_74 is null/undefined, skipping d_89
(anonymous) @ 4012-Section11.js:1229
syncAreasFromS10 @ 4012-Section11.js:1206
onSectionRendered @ 4012-Section11.js:2356
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1229 [S11 Area Sync] d_75 is null/undefined, skipping d_90
(anonymous) @ 4012-Section11.js:1229
syncAreasFromS10 @ 4012-Section11.js:1206
onSectionRendered @ 4012-Section11.js:2356
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1229 [S11 Area Sync] d_76 is null/undefined, skipping d_91
(anonymous) @ 4012-Section11.js:1229
syncAreasFromS10 @ 4012-Section11.js:1206
onSectionRendered @ 4012-Section11.js:2356
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1229 [S11 Area Sync] d_77 is null/undefined, skipping d_92
(anonymous) @ 4012-Section11.js:1229
syncAreasFromS10 @ 4012-Section11.js:1206
onSectionRendered @ 4012-Section11.js:2356
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1229 [S11 Area Sync] d_78 is null/undefined, skipping d_93
(anonymous) @ 4012-Section11.js:1229
syncAreasFromS10 @ 4012-Section11.js:1206
onSectionRendered @ 4012-Section11.js:2356
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1236 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1240 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1243 [S11 Area Sync] Sync completed successfully
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
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=0, l_119=None, A28=0, A29=0, A30=0, A16=3.5700000000000003, A31=0, A32=0, A33=0
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=0, E52=0, E54(m_19)=120, E55(result)=0
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2803 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency m_121 changed.
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
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=32687.68070885238, E37_daily=166.77388116761418, E45(d_21)=196, E50=32687.68070885238, E51=67734.01555200001, E52=-35046.33484314763, E54(m_19)=120, E55(result)=-12.168866264981817
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=12985.921138817206, E37_daily=66.25469968784289, E45(d_21)=196, E50=12985.921138817206, E51=67734.01555200001, E52=-54748.09441318281, E54(m_19)=120, E55(result)=-19.009755004577364
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=12985.921138817206, E37_daily=66.25469968784289, E45(d_21)=196, E50=12985.921138817206, E51=67734.01555200001, E52=-54748.09441318281, E54(m_19)=120, E55(result)=-19.009755004577364
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
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
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2483 S03: Self-Contained State Module initialization complete
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
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
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section10.js:2866 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2841 S10: Simplified global StateManager listeners added
4012-Section10.js:2890 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1273 [S11] Setting up S10 area listeners...
4012-Section11.js:1306 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2312 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1273 [S11] Setting up S10 area listeners...
4012-Section11.js:1306 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2334 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_97 changed.
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2217 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2344 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1204 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1225 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1225 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1225 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1225 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1225 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1225 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1236 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1240 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1243 [S11 Area Sync] Sync completed successfully
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
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
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=67890.0732373953, E37_daily=346.3779246805883, E45(d_21)=196, E50=67890.0732373953, E51=67734.01555200001, E52=156.05768539529527, E54(m_19)=120, E55(result)=0.054186696317810853
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=74970.2853340133, E37_daily=382.5014557857821, E45(d_21)=196, E50=74970.2853340133, E51=67734.01555200001, E52=7236.269782013289, E54(m_19)=120, E55(result)=2.5125936743101698
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [CLOCK] Performance monitoring initialized
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
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:2438 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:2452 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2424 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1625 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2007 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2483 S03: Self-Contained State Module initialization complete
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
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2217 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2217 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1243 [S11 Area Sync] Sync completed successfully
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2803 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency m_121 changed.
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
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=67890.0732373953, E37_daily=346.3779246805883, E45(d_21)=196, E50=67890.0732373953, E51=67734.01555200001, E52=156.05768539529527, E54(m_19)=120, E55(result)=0.054186696317810853
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=74970.2853340133, E37_daily=382.5014557857821, E45(d_21)=196, E50=74970.2853340133, E51=67734.01555200001, E52=7236.269782013289, E54(m_19)=120, E55(result)=2.5125936743101698
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
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
(anonymous) @ index.html:1066
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
4012-Section03.js:2452 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2424 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1625 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2007 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2483 S03: Self-Contained State Module initialization complete
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
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1071
calculateAll @ 4012-Section07.js:1114
onSectionRendered @ 4012-Section07.js:1516
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1066Understand this warningAI
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
4012-Section10.js:2866 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2841 S10: Simplified global StateManager listeners added
4012-Section10.js:2890 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1273 [S11] Setting up S10 area listeners...
4012-Section11.js:1306 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2312 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1273 [S11] Setting up S10 area listeners...
4012-Section11.js:1306 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2334 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_98 changed.
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_97 changed.
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2217 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2344 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1204 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1225 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1225 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1225 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1225 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1225 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1225 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1236 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1240 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1243 [S11 Area Sync] Sync completed successfully
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
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
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=67890.0732373953, E37_daily=346.3779246805883, E45(d_21)=196, E50=67890.0732373953, E51=67734.01555200001, E52=156.05768539529527, E54(m_19)=120, E55(result)=0.054186696317810853
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=74970.2853340133, E37_daily=382.5014557857821, E45(d_21)=196, E50=74970.2853340133, E51=67734.01555200001, E52=7236.269782013289, E54(m_19)=120, E55(result)=2.5125936743101698
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1066Understand this warningAI
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
(anonymous) @ index.html:1086
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
(anonymous) @ index.html:1086Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:707 [S08] S04 listeners setup complete
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
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] Setting up S10 area listeners...
4012-Section11.js:1306 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2312 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1273 [S11] Setting up S10 area listeners...
4012-Section11.js:1306 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2334 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2217 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2803 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_98 changed.
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2344 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1204 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1225 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1225 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1225 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1225 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1225 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1225 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1236 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1240 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1243 [S11 Area Sync] Sync completed successfully
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section10.js:2803 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
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
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=67890.0732373953, E37_daily=346.3779246805883, E45(d_21)=196, E50=67890.0732373953, E51=67734.01555200001, E52=156.05768539529527, E54(m_19)=120, E55(result)=0.054186696317810853
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=74970.2853340133, E37_daily=382.5014557857821, E45(d_21)=196, E50=74970.2853340133, E51=67734.01555200001, E52=7236.269782013289, E54(m_19)=120, E55(result)=2.5125936743101698
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
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
(anonymous) @ index.html:1086Understand this warningAI
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
(anonymous) @ index.html:1086Understand this warningAI
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
(anonymous) @ index.html:1086Understand this warningAI
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
(anonymous) @ index.html:1086Understand this warningAI
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
(anonymous) @ index.html:1086Understand this warningAI
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
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section18.js:1244 [S18] Notes section rendered
4012-Section18.js:21 [S18] Notes & QC Monitor section loaded
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
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
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
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
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
index.html:1098 TEUI Calculator 4.011 initialization complete
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_104
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section12.js:2599
setTimeout
onSectionRendered @ 4012-Section12.js:2598
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2471
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2458
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
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
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
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
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
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
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
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
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
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
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
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
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
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1066Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1066Understand this warningAI
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
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1456
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1456
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1456
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1456
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1462
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1462
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1462
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateVolumeMetrics @ 4012-Section12.js:1462
calculateReferenceModel @ 4012-Section12.js:2265
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
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
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1639
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1639
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1639
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1639
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1640
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1640
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1640
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1640
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1641
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1641
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1641
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1205
calculateCombinedUValue @ 4012-Section12.js:1641
calculateReferenceModel @ 4012-Section12.js:2266
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section12.js:1895 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:1969 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:1997 [S12DB] REF h_101 calc: (4600*0.6668795218521432*24)/1000 = 73.62349921247662
4012-Section12.js:2000 [S12DB] REF i_101 result: 73.62349921247662 * 2476.6199999999994 = 182337.4306196038
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0.6668795218521432*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5935677913147346
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=182337.4306196038, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=240961.97765992317
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2192
calculateReferenceModel @ 4012-Section12.js:2282
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2192
calculateReferenceModel @ 4012-Section12.js:2282
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2192
calculateReferenceModel @ 4012-Section12.js:2282
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2192
calculateReferenceModel @ 4012-Section12.js:2282
calculateAll @ 4012-Section12.js:2237
(anonymous) @ 4011-SectionIntegrator.js:656
setTimeout
forceVolumeMetricsUpdate @ 4011-SectionIntegrator.js:650
initializeVolumeMetricsIntegration @ 4011-SectionIntegrator.js:589
(anonymous) @ 4011-SectionIntegrator.js:187
initializeAllIntegrations @ 4011-SectionIntegrator.js:184
(anonymous) @ 4011-SectionIntegrator.js:106
renderAllSections @ 4011-FieldManager.js:474
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=74970.2853340133, E37_daily=382.5014557857821, E45(d_21)=196, E50=74970.2853340133, E51=67734.01555200001, E52=7236.269782013289, E54(m_19)=120, E55(result)=2.5125936743101698
 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 Starting cooling calculations (mode=target)...
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=56269.86025479061, E37_daily=287.0911237489317, E45(d_21)=196, E50=56269.86025479061, E51=67734.01555200001, E52=-11464.1552972094, E54(m_19)=120, E55(result)=-3.9806094781977084
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2007 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13973.521976753496, E37_daily=71.29347947323213, E45(d_21)=196, E50=13973.521976753496, E51=67734.01555200001, E52=-53760.49357524652, E54(m_19)=120, E55(result)=-18.666838046960596
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
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13973.521976753496, E37_daily=71.29347947323213, E45(d_21)=196, E50=13973.521976753496, E51=67734.01555200001, E52=-53760.49357524652, E54(m_19)=120, E55(result)=-18.666838046960596
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2351
setTimeout
onSectionRendered @ 4012-Section11.js:2350
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1086Understand this warningAI
4011-Clock.js:41 [CLOCK] Starting initial load timing
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Section12] Calculated display values updated for target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2007 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=31.3 (ref), h_6=11.7 (target) → reduction should be 63%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=31.3, reduction=0.6261980830670927, percent=63%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 597ms (all calculations finalized)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed g_118=Volume by Schedule through sect13 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.6 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.6, reduction=0.5760869565217392, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 97ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 97ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:44 [CLOCK] Starting current calculation timing
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1625 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2007 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=19166.126796895445, E37_daily=97.78636120865023, E45(d_21)=196, E50=19166.126796895445, E51=67734.01555200001, E52=-48567.88875510456, E54(m_19)=120, E55(result)=-16.863850262189086
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=19166.126796895445, E37_daily=97.78636120865023, E45(d_21)=196, E50=19166.126796895445, E51=67734.01555200001, E52=-48567.88875510456, E54(m_19)=120, E55(result)=-16.863850262189086
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=19166.126796895445, E37_daily=97.78636120865023, E45(d_21)=196, E50=19166.126796895445, E51=67734.01555200001, E52=-48567.88875510456, E54(m_19)=120, E55(result)=-16.863850262189086
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1995 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1462 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1534 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1718 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1467 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=19166.126796895445, E37_daily=97.78636120865023, E45(d_21)=196, E50=19166.126796895445, E51=67734.01555200001, E52=-48567.88875510456, E54(m_19)=120, E55(result)=-16.863850262189086
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:334 [DependencyGraph] Container has zero dimensions. Graph might not be visible.
setupSvg @ 4011-Dependency.js:334
initializeGraphInstanceAndUI @ 4011-Dependency.js:2055
calculateAll @ 4012-Section17.js:50
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ 4012-Section13.js:2242
setTimeout
handleDropdownChange @ 4012-Section13.js:2240Understand this warningAI
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=19166.126796895445, E37_daily=97.78636120865023, E45(d_21)=196, E50=19166.126796895445, E51=67734.01555200001, E52=-48567.88875510456, E54(m_19)=120, E55(result)=-16.863850262189086
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed d_116=Cooling through sect13 ModeManager
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=19166.126796895445, E37_daily=97.78636120865023, E45(d_21)=196, E50=19166.126796895445, E51=67734.01555200001, E52=-48567.88875510456, E54(m_19)=120, E55(result)=-16.863850262189086
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
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
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 80ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 80ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=46 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10816.556295508375, E37_daily=55.18651171177743, E45(d_21)=196, E50=10816.556295508375, E51=67734.01555200001, E52=-56917.45925649164, E54(m_19)=120, E55(result)=-19.76300668628182
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=47 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11615.573993544833, E37_daily=59.2631326201267, E45(d_21)=196, E50=11615.573993544833, E51=67734.01555200001, E52=-56118.441558455175, E54(m_19)=120, E55(result)=-19.485569985574713
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10953.24141724209, E37_daily=55.8838847818474, E45(d_21)=196, E50=10953.24141724209, E51=67734.01555200001, E52=-56780.77413475792, E54(m_19)=120, E55(result)=-19.715546574568723
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=49 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11654.560318039326, E37_daily=59.462042438976155, E45(d_21)=196, E50=11654.560318039326, E51=67734.01555200001, E52=-56079.45523396069, E54(m_19)=120, E55(result)=-19.47203306734746
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11226.856223859155, E37_daily=57.279878693158956, E45(d_21)=196, E50=11226.856223859155, E51=67734.01555200001, E52=-56507.15932814086, E54(m_19)=120, E55(result)=-19.620541433382243
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=52 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11732.60272310851, E37_daily=59.86021797504342, E45(d_21)=196, E50=11732.60272310851, E51=67734.01555200001, E52=-56001.4128288915, E54(m_19)=120, E55(result)=-19.44493501003177
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11637.890936596817, E37_daily=59.37699457447356, E45(d_21)=196, E50=11637.890936596817, E51=67734.01555200001, E52=-56096.1246154032, E54(m_19)=120, E55(result)=-19.477821047015
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=54 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=94.04421892440828, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 94.0 (from j_32=134219.9092489155, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 3ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 3ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11849.841033218923, E37_daily=60.4583726184639, E45(d_21)=196, E50=11849.841033218923, E51=67734.01555200001, E52=-55884.17451878109, E54(m_19)=120, E55(result)=-19.404227263465657
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11912.323267283085, E37_daily=60.77715952695452, E45(d_21)=196, E50=11912.323267283085, E51=67734.01555200001, E52=-55821.692284716926, E54(m_19)=120, E55(result)=-19.382532043304487
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=53 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11928.11661844876, E37_daily=60.857737849228364, E45(d_21)=196, E50=11928.11661844876, E51=67734.01555200001, E52=-55805.89893355125, E54(m_19)=120, E55(result)=-19.377048240816407
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11775.06613418628, E37_daily=60.076868031562654, E45(d_21)=196, E50=11775.06613418628, E51=67734.01555200001, E52=-55958.94941781373, E54(m_19)=120, E55(result)=-19.430190770074212
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=45 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11888.967140713183, E37_daily=60.657995615883586, E45(d_21)=196, E50=11888.967140713183, E51=67734.01555200001, E52=-55845.04841128683, E54(m_19)=120, E55(result)=-19.390641809474594
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=41 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11576.61089337439, E37_daily=59.06434129272648, E45(d_21)=196, E50=11576.61089337439, E51=67734.01555200001, E52=-56157.40465862562, E54(m_19)=120, E55(result)=-19.499098839800563
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10134.350592308672, E37_daily=51.7058703689218, E45(d_21)=196, E50=10134.350592308672, E51=67734.01555200001, E52=-57599.66495969134, E54(m_19)=120, E55(result)=-19.999883666559494
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=33 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.2904738160182, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.3 (from j_32=133144.16423022118, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 3ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 3ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11420.990321382185, E37_daily=58.27035878256217, E45(d_21)=196, E50=11420.990321382185, E51=67734.01555200001, E52=-56313.02523061783, E54(m_19)=120, E55(result)=-19.55313376063119
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=9047.032900960123, E37_daily=46.158331127347566, E45(d_21)=196, E50=9047.032900960123, E51=67734.01555200001, E52=-58686.982651039885, E54(m_19)=120, E55(result)=-20.377424531611073
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=34 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11110.85766169073, E37_daily=56.68804929434046, E45(d_21)=196, E50=11110.85766169073, E51=67734.01555200001, E52=-56623.15789030928, E54(m_19)=120, E55(result)=-19.660818711912945
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=9182.665160338545, E37_daily=46.850332450706865, E45(d_21)=196, E50=9182.665160338545, E51=67734.01555200001, E52=-58551.350391661465, E54(m_19)=120, E55(result)=-20.330329997104677
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=38 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11149.54368112707, E37_daily=56.88542694452587, E45(d_21)=196, E50=11149.54368112707, E51=67734.01555200001, E52=-56584.47187087294, E54(m_19)=120, E55(result)=-19.647386066275327
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=9726.000484076216, E37_daily=49.62245144936845, E45(d_21)=196, E50=9726.000484076216, E51=67734.01555200001, E52=-58008.0150679238, E54(m_19)=120, E55(result)=-20.141671898584654
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=40 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11304.517733693154, E37_daily=57.67611088618956, E45(d_21)=196, E50=11304.517733693154, E51=67734.01555200001, E52=-56429.49781830686, E54(m_19)=120, E55(result)=-19.593575631356547
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=9998.152924826827, E37_daily=51.01098431034095, E45(d_21)=196, E50=9998.152924826827, E51=67734.01555200001, E52=-57735.862627173185, E54(m_19)=120, E55(result)=-20.047174523324024
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=41 through sect08 ModeManager
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.57650430031137, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.6 (from j_32=133552.3869374044, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 10ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 10ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11382.14303213453, E37_daily=58.07215832721699, E45(d_21)=196, E50=11382.14303213453, E51=67734.01555200001, E52=-56351.87251986548, E54(m_19)=120, E55(result)=-19.56662240273107
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10134.350592308672, E37_daily=51.7058703689218, E45(d_21)=196, E50=10134.350592308672, E51=67734.01555200001, E52=-57599.66495969134, E54(m_19)=120, E55(result)=-19.999883666559494
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=42 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11420.990321382185, E37_daily=58.27035878256217, E45(d_21)=196, E50=11420.990321382185, E51=67734.01555200001, E52=-56313.02523061783, E54(m_19)=120, E55(result)=-19.55313376063119
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10270.629320904189, E37_daily=52.401170004613206, E45(d_21)=196, E50=10270.629320904189, E51=67734.01555200001, E52=-57463.38623109582, E54(m_19)=120, E55(result)=-19.95256466357494
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=43 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.64822478159647, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.6 (from j_32=133654.74640829448, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 3ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 3ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11459.860731470231, E37_daily=58.46867720137873, E45(d_21)=196, E50=11459.860731470231, E51=67734.01555200001, E52=-56274.15482052978, E54(m_19)=120, E55(result)=-19.539637090461728
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10406.989183002948, E37_daily=53.09688358674973, E45(d_21)=196, E50=10406.989183002948, E51=67734.01555200001, E52=-57327.02636899706, E54(m_19)=120, E55(result)=-19.905217489235092
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=44 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11498.754283046115, E37_daily=58.66711368901079, E45(d_21)=196, E50=11498.754283046115, E51=67734.01555200001, E52=-56235.261268953895, E54(m_19)=120, E55(result)=-19.526132385053437
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10543.430251080723, E37_daily=53.79301148510573, E45(d_21)=196, E50=10543.430251080723, E51=67734.01555200001, E52=-57190.58530091929, E54(m_19)=120, E55(result)=-19.85784211837475
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=45 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 2ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 2ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11537.670996781939, E37_daily=58.86566835092826, E45(d_21)=196, E50=11537.670996781939, E51=67734.01555200001, E52=-56196.34455521807, E54(m_19)=120, E55(result)=-19.512619637228497
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=46 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11576.61089337439, E37_daily=59.06434129272648, E45(d_21)=196, E50=11576.61089337439, E51=67734.01555200001, E52=-56157.40465862562, E54(m_19)=120, E55(result)=-19.499098839800563
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10816.556295508375, E37_daily=55.18651171177743, E45(d_21)=196, E50=10816.556295508375, E51=67734.01555200001, E52=-56917.45925649164, E54(m_19)=120, E55(result)=-19.76300668628182
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=47 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.79192224219041, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.8 (from j_32=133859.83142405417, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 3ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 3ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11615.573993544833, E37_daily=59.2631326201267, E45(d_21)=196, E50=11615.573993544833, E51=67734.01555200001, E52=-56118.441558455175, E54(m_19)=120, E55(result)=-19.485569985574713
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10953.24141724209, E37_daily=55.8838847818474, E45(d_21)=196, E50=10953.24141724209, E51=67734.01555200001, E52=-56780.77413475792, E54(m_19)=120, E55(result)=-19.715546574568723
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=46 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11654.560318039326, E37_daily=59.462042438976155, E45(d_21)=196, E50=11654.560318039326, E51=67734.01555200001, E52=-56079.45523396069, E54(m_19)=120, E55(result)=-19.47203306734746
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10816.556295508375, E37_daily=55.18651171177743, E45(d_21)=196, E50=10816.556295508375, E51=67734.01555200001, E52=-56917.45925649164, E54(m_19)=120, E55(result)=-19.76300668628182
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=45 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 2ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 2ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section08.js:118 S08: Switched to REFERENCE mode.
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 49 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=11615.573993544833, E37_daily=59.2631326201267, E45(d_21)=196, E50=11615.573993544833, E51=67734.01555200001, E52=-56118.441558455175, E54(m_19)=120, E55(result)=-19.485569985574713
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=49 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 57 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=57 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 61 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=61 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 64 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=64 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 69 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=69 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 71 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=71 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 3ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 3ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 70 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=70 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 65 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=65 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 60 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=60 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 57 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=57 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 56 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=56 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 52 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=52 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 48 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=48 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 47 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=47 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 46 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=46 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 47 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=47 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 60 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=60 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 67 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=67 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 68 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=68 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 72 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=72 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 77 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=77 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 81 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=81 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 82 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=82 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 84 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=84 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 83 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=83 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 80 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=80 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 79 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=79 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 75 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=75 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section08.js:399 S08 ReferenceState: Synced i_59 = 74 from global StateManager (ref_i_59)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=15402.054473443024, E37_daily=78.58191057879094, E45(d_21)=196, E50=15402.054473443024, E51=67734.01555200001, E52=-52331.96107855699, E54(m_19)=120, E55(result)=-18.1708198189434
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=10679.952597699661, E37_daily=54.48955406989623, E45(d_21)=196, E50=10679.952597699661, E51=67734.01555200001, E52=-57054.06295430035, E54(m_19)=120, E55(result)=-19.810438525798734
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4011-FieldManager.js:208 [FieldManager] Routed i_59=74 through sect08 ModeManager
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement