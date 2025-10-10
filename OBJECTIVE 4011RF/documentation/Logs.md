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
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:2423 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:50 S03: Target defaults set from field definitions - single source of truth
4012-Section03.js:129 S03: Reference defaults set from field definitions - single source of truth
4012-Section03.js:2140 S03: Header controls setup complete
4012-Section03.js:2437 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2409 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:2579 S12: Section rendered - initializing Pattern A Dual-State Module.
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_d_103=1 to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_g_103=Exposed to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_d_105=8200.00 to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_d_108=MEASURED to StateManager
4012-Section12.js:120 [S12 REF DEFAULTS] Published ref_g_109=2.00 to StateManager
4012-Section12.js:127 S12: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section12.js:2655 [S12] 🚀 INITIALIZING CLIMATE LISTENERS
4012-Section12.js:2797 [S12] ✅ CLIMATE LISTENERS ADDED - Ready for d_20/d_21 changes
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1253 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1253
calculateVolumeMetrics @ 4012-Section12.js:1461
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: d_102
setCalculatedValue @ 4012-Section12.js:1253
calculateVolumeMetrics @ 4012-Section12.js:1467
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1253 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1253
calculateCombinedUValue @ 4012-Section12.js:1651
calculateTargetModel @ 4012-Section12.js:2396
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: g_102
setCalculatedValue @ 4012-Section12.js:1253
calculateCombinedUValue @ 4012-Section12.js:1652
calculateTargetModel @ 4012-Section12.js:2396
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: i_110
setCalculatedValue @ 4012-Section12.js:1253
calculateNFactor @ 4012-Section12.js:1835
calculateTargetModel @ 4012-Section12.js:2398
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: g_110
setCalculatedValue @ 4012-Section12.js:1253
calculateNFactor @ 4012-Section12.js:1883
calculateTargetModel @ 4012-Section12.js:2398
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: g_108
setCalculatedValue @ 4012-Section12.js:1253
calculateACH50Target @ 4012-Section12.js:1746
calculateTargetModel @ 4012-Section12.js:2399
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:1253 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2033
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2039
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2045
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2051
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: h_102
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2057
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: i_102
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2063
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: j_102
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2069
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: k_102
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2075
calculateTargetModel @ 4012-Section12.js:2407
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:1253 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeTotals @ 4012-Section12.js:2230
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: l_102
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2792
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): null
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1253 DOM element not found for calculated field: d_105
setCalculatedValue @ 4012-Section12.js:1253
calculateVolumeMetrics @ 4012-Section12.js:1493
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2790
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): null
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): null
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1253 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1253
calculateVolumeMetrics @ 4012-Section12.js:1473
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1253
calculateVolumeMetrics @ 4012-Section12.js:1479
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1253
calculateVolumeMetrics @ 4012-Section12.js:1485
calculateTargetModel @ 4012-Section12.js:2395
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1253 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1253
calculateCombinedUValue @ 4012-Section12.js:1653
calculateTargetModel @ 4012-Section12.js:2396
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1253
calculateWWR @ 4012-Section12.js:1679
calculateTargetModel @ 4012-Section12.js:2397
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1253
calculateWWR @ 4012-Section12.js:1686
calculateTargetModel @ 4012-Section12.js:2397
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1253 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1253
calculateAirLeakageHeatLoss @ 4012-Section12.js:1940
calculateTargetModel @ 4012-Section12.js:2401
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1253
calculateAirLeakageHeatLoss @ 4012-Section12.js:1946
calculateTargetModel @ 4012-Section12.js:2401
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:1253 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeTotals @ 4012-Section12.js:2210
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeTotals @ 4012-Section12.js:2216
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeTotals @ 4012-Section12.js:2232
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1253
calculateEnvelopeTotals @ 4012-Section12.js:2233
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2793
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1253 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1253
calculateACH50Target @ 4012-Section12.js:1760
calculateTargetModel @ 4012-Section12.js:2399
calculateAll @ 4012-Section12.js:2250
(anonymous) @ 4012-Section12.js:2794
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section12.js:2637
registerWithStateManager @ 4012-Section12.js:2625
onSectionRendered @ 4012-Section12.js:2606
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1253 DOM element not found for calculated field: l_109
setCalculatedValue @ 4012-Section12.js:1253
calculateACH50Target @ 4012-Section12.js:1774
calculateTargetModel @ 4012-Section12.js:2399
calculateAll @ 4012-Section12.js:2250
onSectionRendered @ 4012-Section12.js:2610
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1253
calculateAe10 @ 4012-Section12.js:1801
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2250
onSectionRendered @ 4012-Section12.js:2610
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1253 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1253
calculateAe10 @ 4012-Section12.js:1808
calculateTargetModel @ 4012-Section12.js:2400
calculateAll @ 4012-Section12.js:2250
onSectionRendered @ 4012-Section12.js:2610
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2619 S12: Pattern A initialization complete.
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=0
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=0
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=0, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1e-7
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=0
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2465 S03: Self-Contained State Module initialization complete
4012-Section01.js:1301 [S01] j_32 listener: null → 0
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 0
4012-Section05.js:103 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:767 S06: Pattern A initialization complete.
4012-Section07.js:1495 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1069
calculateAll @ 4012-Section07.js:1112
onSectionRendered @ 4012-Section07.js:1514
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:694 [S08] S04 listeners setup complete
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:50 S09: Target defaults loaded from field definitions
4012-Section09.js:139 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:533 S09: Header controls injected successfully
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section10.js:2826 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2801 S10: Simplified global StateManager listeners added
4012-Section10.js:2850 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2265 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.2952948175687105, i_80=49282.218048, i_81=36381.95896966393
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_103 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_d_97 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7353865313303655, i_80=49282.218048, i_81=90603.69846646363
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 100.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 114,698.95
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section12.js:2747 [S12] Listener: ref_f_85 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_86 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_87 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_94 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_95 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_88 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_89 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_90 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_91 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_92 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_93 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_d_97 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2763 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 13.50%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 15,481.39
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 13.50%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 15,481.39
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 73.51%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 84,319.86
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 73.51%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 84,319.86
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_f_85 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_f_86 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_f_87 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_f_94 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_f_95 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_g_88 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_88=1.990 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_g_89 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_89=1.420 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_g_90 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_90=1.420 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_g_91 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_91=1.420 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_g_92 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_92=1.420 to StateManager
4012-Section12.js:2747 [S12] Listener: ref_g_93 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_93=1.420 to StateManager
4012-Section11.js:275 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2287 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section12.js:2747 [S12] Listener: ref_f_85 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_86 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_87 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_94 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_f_95 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_88 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_89 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_90 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_91 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_92 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section12.js:2747 [S12] Listener: ref_g_93 changed → recalc
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2297 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1189 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1214 [S11 Area Sync] d_73 is null/undefined, skipping d_88
(anonymous) @ 4012-Section11.js:1214
syncAreasFromS10 @ 4012-Section11.js:1191
onSectionRendered @ 4012-Section11.js:2309
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1214 [S11 Area Sync] d_74 is null/undefined, skipping d_89
(anonymous) @ 4012-Section11.js:1214
syncAreasFromS10 @ 4012-Section11.js:1191
onSectionRendered @ 4012-Section11.js:2309
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1214 [S11 Area Sync] d_75 is null/undefined, skipping d_90
(anonymous) @ 4012-Section11.js:1214
syncAreasFromS10 @ 4012-Section11.js:1191
onSectionRendered @ 4012-Section11.js:2309
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1214 [S11 Area Sync] d_76 is null/undefined, skipping d_91
(anonymous) @ 4012-Section11.js:1214
syncAreasFromS10 @ 4012-Section11.js:1191
onSectionRendered @ 4012-Section11.js:2309
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1214 [S11 Area Sync] d_77 is null/undefined, skipping d_92
(anonymous) @ 4012-Section11.js:1214
syncAreasFromS10 @ 4012-Section11.js:1191
onSectionRendered @ 4012-Section11.js:2309
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1214 [S11 Area Sync] d_78 is null/undefined, skipping d_93
(anonymous) @ 4012-Section11.js:1214
syncAreasFromS10 @ 4012-Section11.js:1191
onSectionRendered @ 4012-Section11.js:2309
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section11.js:1221 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1225 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1228 [S11 Area Sync] Sync completed successfully
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2012 [S12DB] REF i_101 result: 0 * 2124.49 = 0
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0*2124.49 + 0*1100.42)/3224.9100009999997 = 0
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2124.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=0
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=36440.079840319355
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2019 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=0, l_119=None, A28=0, A29=0, A30=0, A16=3.5700000000000003, A31=0, A32=0, A33=0
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=0, E52=0, E54(m_19)=120, E55(result)=0
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 73.51%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 84,319.86
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 73.51%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 84,319.86
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 90.82%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 104,171.66
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 90.82%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 104,171.66
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
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=32598.42244885239, E37_daily=166.31848188189994, E45(d_21)=196, E50=32598.422448852387, E51=67734.01555200001, E52=-35135.59310314762, E54(m_19)=120, E55(result)=-12.199858716370702
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=12985.921138817206, E37_daily=66.25469968784289, E45(d_21)=196, E50=12985.921138817206, E51=67734.01555200001, E52=-54748.09441318281, E54(m_19)=120, E55(result)=-19.009755004577364
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
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=12985.921138817206, E37_daily=66.25469968784289, E45(d_21)=196, E50=12985.921138817206, E51=67734.01555200001, E52=-54748.09441318281, E54(m_19)=120, E55(result)=-19.009755004577364
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section01.js:1301 [S01] j_32 listener: 0 → 89265.7720613605
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 89265.7720613605
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:2423 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:2437 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2409 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2019 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2465 S03: Self-Contained State Module initialization complete
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:767 S06: Pattern A initialization complete.
4012-Section07.js:1495 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1069
calculateAll @ 4012-Section07.js:1112
onSectionRendered @ 4012-Section07.js:1514
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:694 [S08] S04 listeners setup complete
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section10.js:2826 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2801 S10: Simplified global StateManager listeners added
4012-Section10.js:2850 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2265 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2763 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2287 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2297 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1189 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1210 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1210 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1210 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1210 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1210 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1210 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1221 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1225 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1228 [S11 Area Sync] Sync completed successfully
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency m_121 changed.
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
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=67800.8149773953, E37_daily=345.922525394874, E45(d_21)=196, E50=67800.8149773953, E51=67734.01555200001, E52=66.79942539529293, E54(m_19)=120, E55(result)=0.023194244928921155
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
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=74881.02707401331, E37_daily=382.04605650006795, E45(d_21)=196, E50=74881.02707401331, E51=67734.01555200001, E52=7147.011522013301, E54(m_19)=120, E55(result)=2.481601222921285
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
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section01.js:1301 [S01] j_32 listener: 0 → 134041.4959823222
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134041.4959823222
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:2423 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:2437 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2409 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2019 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2465 S03: Self-Contained State Module initialization complete
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:767 S06: Pattern A initialization complete.
4012-Section07.js:1495 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1069
calculateAll @ 4012-Section07.js:1112
onSectionRendered @ 4012-Section07.js:1514
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:694 [S08] S04 listeners setup complete
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section10.js:2826 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2801 S10: Simplified global StateManager listeners added
4012-Section10.js:2850 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2265 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2763 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2287 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2297 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1189 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1210 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1210 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1210 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1210 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1210 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1210 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1221 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1225 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1228 [S11 Area Sync] Sync completed successfully
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency m_121 changed.
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
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=67800.8149773953, E37_daily=345.922525394874, E45(d_21)=196, E50=67800.8149773953, E51=67734.01555200001, E52=66.79942539529293, E54(m_19)=120, E55(result)=0.023194244928921155
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
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=74881.02707401331, E37_daily=382.04605650006795, E45(d_21)=196, E50=74881.02707401331, E51=67734.01555200001, E52=7147.011522013301, E54(m_19)=120, E55(result)=2.481601222921285
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
(anonymous) @ 4011-init.js:879Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section01.js:1301 [S01] j_32 listener: 0 → 134041.4959823222
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134041.4959823222
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:2423 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:2437 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2409 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2019 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2465 S03: Self-Contained State Module initialization complete
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:767 S06: Pattern A initialization complete.
4012-Section07.js:1495 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1069
calculateAll @ 4012-Section07.js:1112
onSectionRendered @ 4012-Section07.js:1514
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:694 [S08] S04 listeners setup complete
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section10.js:2826 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2801 S10: Simplified global StateManager listeners added
4012-Section10.js:2850 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2265 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2763 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2287 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2297 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1189 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1210 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1210 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1210 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1210 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1210 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1210 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1221 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1225 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1228 [S11 Area Sync] Sync completed successfully
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency m_121 changed.
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
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=67800.8149773953, E37_daily=345.922525394874, E45(d_21)=196, E50=67800.8149773953, E51=67734.01555200001, E52=66.79942539529293, E54(m_19)=120, E55(result)=0.023194244928921155
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
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=74881.02707401331, E37_daily=382.04605650006795, E45(d_21)=196, E50=74881.02707401331, E51=67734.01555200001, E52=7147.011522013301, E54(m_19)=120, E55(result)=2.481601222921285
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
(anonymous) @ index.html:1067Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section01.js:1301 [S01] j_32 listener: 0 → 134041.4959823222
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134041.4959823222
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
(anonymous) @ index.html:1067Understand this warningAI
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
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:2423 S03: Section rendered - initializing Self-Contained State Module.
4012-Section03.js:2437 S03: ModeManager exposed globally for cross-section integration.
4012-Section03.js:481 S03: Checking climate data availability (attempt 1/10)
4012-Section03.js:489 S03: Climate data available (13) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'YT', 'NT', 'NU']
4012-Section03.js:2409 S03: Synced province "ON" to StateManager for cross-section communication
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:2258 S03: Sliders initialized via FieldManager
4012-Section03.js:1152 Section03: Province selected: ON
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2019 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.20649804662687998
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2465 S03: Self-Contained State Module initialization complete
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section06.js:740 S06: Pattern A initialization starting...
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:233 🔄 [S06] updateCalculatedDisplayValues: mode=target
4012-Section06.js:767 S06: Pattern A initialization complete.
4012-Section07.js:1495 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
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
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:739 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1069
calculateAll @ 4012-Section07.js:1112
onSectionRendered @ 4012-Section07.js:1514
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:694 [S08] S04 listeners setup complete
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2502 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2340 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section10.js:2826 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2801 S10: Simplified global StateManager listeners added
4012-Section10.js:2850 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=1, i_80=49282.218048, i_81=123205.54512
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2265 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.505329172217601, i_80=49282.218048, i_81=62259.35612810789
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 58.07%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 66,611.40
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2763 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 68.57%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 78,644.24
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1258 [S11] Setting up S10 area listeners...
4012-Section11.js:1291 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2287 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2297 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1189 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1210 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1210 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1210 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1210 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1210 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1210 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1221 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1225 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1228 [S11 Area Sync] Sync completed successfully
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.33, l_119=None, A28=3333.33, A29=3.33333, A30=4.01332932, A16=3.5700000000000003, A31=14399.223600762003, A32=1244092919.105837, A33=345.5813664182881
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67733.94781798447, E52=-67733.94781798447, E54(m_19)=120, E55(result)=-23.51873188124461
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2763 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.7106119952273561, i_80=49282.218048, i_81=87551.33824079724
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency m_121 changed.
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
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=67800.8149773953, E37_daily=345.922525394874, E45(d_21)=196, E50=67800.8149773953, E51=67734.01555200001, E52=66.79942539529293, E54(m_19)=120, E55(result)=0.023194244928921155
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
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=74881.02707401331, E37_daily=382.04605650006795, E45(d_21)=196, E50=74881.02707401331, E51=67734.01555200001, E52=7147.011522013301, E54(m_19)=120, E55(result)=2.481601222921285
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
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section01.js:1301 [S01] j_32 listener: 0 → 134041.4959823222
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134041.4959823222
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
(anonymous) @ index.html:1087Understand this warningAI
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
(anonymous) @ index.html:1087Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
index.html:1099 TEUI Calculator 4.011 initialization complete
4011-Clock.js:28 [CLOCK] Performance monitoring initialized
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: l_104
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section12.js:2601
setTimeout
onSectionRendered @ 4012-Section12.js:2600
calculateTargetModel @ 4012-Section03.js:1753
calculateAll @ 4012-Section03.js:1709
(anonymous) @ 4012-Section03.js:2456
checkData @ 4012-Section03.js:493
ensureAvailable @ 4012-Section03.js:509
onSectionRendered @ 4012-Section03.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4011-QCMonitor.js:40 [QCMonitor] QC monitoring disabled. Add ?qc=true to URL to activate.
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:1204 [S01DB] upstream snapshot {ref_j_32: '93496.43795200001', ref_k_32: '4768.3183355520005', j_32: '134041.4959823222', k_32: '6836.116295098433', ref_h_15: '1427.20', …}
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.91920962886925, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=16.3 (ref), h_6=11.7 (target) → reduction should be 28%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.9 (from j_32=134041.4959823222, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=16.3, reduction=0.28220858895705525, percent=28%
4012-Section01.js:1222 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1461
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1461
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1461
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1461
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1467
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1467
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1467
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateVolumeMetrics @ 4012-Section12.js:1467
calculateReferenceModel @ 4012-Section12.js:2277
calculateAll @ 4012-Section12.js:2249
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
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.405594, g_102=0.405405
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1651
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1651
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1651
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1651
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1652
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1652
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1652
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1652
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1653
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1653
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1653
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateCombinedUValue @ 4012-Section12.js:1653
calculateReferenceModel @ 4012-Section12.js:2278
calculateAll @ 4012-Section12.js:2249
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
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_103 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 107,846.19
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0.4055944265297311*24)/1000 = 44.77762468888231
4012-Section12.js:2012 [S12DB] REF i_101 result: 44.77762468888231 * 2476.6199999999994 = 110897.16085697968
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0.4055944265297311*2476.6199999999994 + 0.4054054054054054*1100.42)/3577.0400009999994 = 0.4055362770454741
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=110897.16085697968, i_102=20985.306810810813, i_103=36440.079840319355 → i_104=168322.54750810983
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1210
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateReferenceModel @ 4012-Section12.js:2294
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateReferenceModel @ 4012-Section12.js:2294
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateReferenceModel @ 4012-Section12.js:2294
calculateAll @ 4012-Section12.js:2249
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
setCalculatedValue @ 4012-Section12.js:1210
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateReferenceModel @ 4012-Section12.js:2294
calculateAll @ 4012-Section12.js:2249
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
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2476.6199999999994
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0.4055944265297311
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0.4055362770454741
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=110897.16085697968
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=20985.306810810813
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=168322.54750810983
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2763 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.8593292935835918, i_80=49282.218048, i_81=105874.13405355094
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2784 S10: Target utilization factor dependency i_103 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=74881.02707401331, E37_daily=382.04605650006795, E45(d_21)=196, E50=74881.02707401331, E51=67734.01555200001, E52=7147.011522013301, E54(m_19)=120, E55(result)=2.481601222921285
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 94.43%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 45,879.58
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 108,308.11
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 68,819.37
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1301 [S01] j_32 listener: 134041.4959823222 → 134941.04714766832
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134941.04714766832
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=56180.60199479062, E37_daily=286.63572446321746, E45(d_21)=196, E50=56180.601994790624, E51=67734.01555200001, E52=-11553.413557209387, E54(m_19)=120, E55(result)=-4.011601929586593
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=13833.103227384398, E37_daily=70.57705728257346, E45(d_21)=196, E50=13833.1032273844, E51=67734.01555200001, E52=-53900.91232461561, E54(m_19)=120, E55(result)=-18.715594557158198
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
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
4012-Section01.js:1301 [S01] j_32 listener: 134941.04714766832 → 134993.76598270872
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 134993.76598270872
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section01.js:1301 [S01] j_32 listener: 134993.76598270872 → 133757.22783115375
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 133757.22783115375
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4011-TooltipManager.js:605 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:605
(anonymous) @ 4011-TooltipManager.js:650
(anonymous) @ 4011-TooltipManager.js:644
applyTooltipsToSection @ 4011-TooltipManager.js:641
(anonymous) @ 4012-Section11.js:2304
setTimeout
onSectionRendered @ 4012-Section11.js:2303
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4011-Clock.js:41 [CLOCK] Starting initial load timing
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.347926, g_102=0.405405
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0.3479263283096109*24)/1000 = 38.41106664538104
4012-Section12.js:2012 [S12DB] REF i_101 result: 38.41106664538104 * 2476.6199999999994 = 95129.61587528358
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0.3479263283096109*2476.6199999999994 + 0.4054054054054054*1100.42)/3577.0400009999994 = 0.36560886069732407
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=95129.61587528358, i_102=20985.306810810813, i_103=36440.079840319355 → i_104=152555.00252641374
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=2476.6199999999994
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1100.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0.3479263283096109
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0.4054054054054054
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0.36560886069732407
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=95129.61587528358
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=20985.306810810813
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=152555.00252641374
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
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
4012-Section01.js:1204 [S01DB] upstream snapshot {ref_j_32: '448394.0938117469', ref_k_32: '22868.09878439909', j_32: '133757.22783115375', k_32: '6821.618619388841', ref_h_15: '1427.20', …}
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=29 (ref), h_6=11.7 (target) → reduction should be 60%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=29, reduction=0.596551724137931, percent=60%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 604ms (all calculations finalized)
4012-Section01.js:1222 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-FileHandler.js:71 Detected CSV file.
4011-FileHandler.js:371 [FileHandler DEBUG] updateStateFromImportData CALLED with 246 fields, skipRecalculation= false
4011-FileHandler.js:377 [FileHandler DEBUG] stateManager exists: true fieldManager exists: true
4011-FileHandler.js:395 [FileHandler DEBUG] Passed validation checks, starting forEach loop...
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section05.js:124 S05: Reference standard changed, reloading defaults
4012-Section05.js:103 S05: Reference defaults loaded from standard: OBC SB10 5.5-6 Z5 (2010)
4012-Section06.js:105 S06: Reference standard changed, reloading defaults
4012-Section06.js:99 S06: Reference defaults loaded from standard: OBC SB10 5.5-6 Z5 (2010)
4012-Section09.js:189 S09: Reference values updated for standard: OBC SB10 5.5-6 Z5 (2010), lighting: 2.0
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:189 S09: Reference values updated for standard: OBC SB10 5.5-6 Z5 (2010), lighting: 2.0
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:189 S09: Reference values updated for standard: OBC SB10 5.5-6 Z5 (2010), lighting: 2.0
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section11.js:282 S11: Reference standard changed, reloading defaults
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_85=1411.52 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_86=712.97 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_87=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_94=0.00 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_95=1100.42 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_96=29.70 to StateManager
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=default)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_85=5.30 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_86=4.10 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_87=6.60 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_94=1.80 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_f_95=3.50 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_88=2.560 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_89=2.560 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_90=2.560 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_91=2.560 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_92=2.560 to StateManager
4012-Section11.js:268 [S11 REF DEFAULTS] Published ref_g_93=2.560 to StateManager
4012-Section11.js:275 S11: Reference defaults loaded from standard: OBC SB10 5.5-6 Z5 (2010)
4012-Section11.js:306 S11: Reference standard updated, areas preserved, performance values updated
4012-Section14.js:1451 [Section14] d_13 changed - updating reference indicators
4012-Section14.js:85 S14: Reference standard changed, reloading defaults
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z5 (2010)
4012-Section14.js:1451 [Section14] d_13 changed - updating reference indicators
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
34012-Section09.js:442 [S09] Updated calculated display values for target mode
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section03.js:1152 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1152 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:1180 [S05→S02] Updated d_16 = 345.82 based on d_15 = Self Reported
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section01.js:1301 [S01] j_32 listener: 133757.22783115375 → 709671.6018311537
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 709671.6018311537
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2763 S10: Target listener triggered by i_71, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
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
4012-Section01.js:1301 [S01] j_32 listener: 709671.6018311537 → 667464.0523033458
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 667464.0523033458
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 32.84%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 164,622.13
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
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
34012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section03.js:1152 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1152 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1152 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
4012-Section03.js:1152 Section03: Province selected: ON
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section03.js:1213 City dropdown updated for ON - selected: Alexandria
34012-Section09.js:442 [S09] Updated calculated display values for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
4012-Section01.js:1301 [S01] j_32 listener: 667464.0523033458 → 738550.5313244725
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 738550.5313244725
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2320 S03: Capacitance dropdown updated via StateManager - bridged to DualState: Capacitance
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2320 S03: Capacitance dropdown updated via StateManager - bridged to DualState: Capacitance
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2320 S03: Capacitance dropdown updated via StateManager - bridged to DualState: Capacitance
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2320 S03: Capacitance dropdown updated via StateManager - bridged to DualState: Capacitance
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2310 S03: Capacitance slider updated via FieldManager - bridged to DualState: 50%
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2310 S03: Capacitance slider updated via FieldManager - bridged to DualState: 50%
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2310 S03: Capacitance slider updated via FieldManager - bridged to DualState: 50%
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2019 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.29248708863962714
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2310 S03: Capacitance slider updated via FieldManager - bridged to DualState: 50%
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section01.js:1301 [S01] j_32 listener: 738550.5313244725 → 1538550.5313244725
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 1538550.5313244725
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1301 [S01] j_32 listener: 1538550.5313244725 → 1525722.3873244724
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 1525722.3873244724
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
4012-Section07.js:911 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87589.5223336692, k_54=0 (cleared)
4012-Section01.js:1301 [S01] j_32 listener: 1525722.3873244724 → 2433247.232994749
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2433247.232994749
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:922 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
24012-Section11.js:1269 [S11 Listener] d_73 changed to 0 (Target mode)
24012-Section11.js:1269 [S11 Listener] d_74 changed to 914 (Target mode)
24012-Section11.js:1269 [S11 Listener] d_75 changed to 846 (Target mode)
24012-Section11.js:1269 [S11 Listener] d_76 changed to 845 (Target mode)
24012-Section11.js:1269 [S11 Listener] d_77 changed to 120 (Target mode)
24012-Section11.js:1269 [S11 Listener] d_78 changed to 0 (Target mode)
4012-Section11.js:2161 [S11] Listener: d_97 changed → recalculating (src=imported)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2161 [S11] Listener: d_97 changed → recalculating (src=imported)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section01.js:1301 [S01] j_32 listener: 2433247.232994749 → 2442925.7175989025
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2442925.7175989025
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2763 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 91.63%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 459,309.30
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2784 S10: Target utilization factor dependency m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 91.63%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 459,309.30
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=722392.6739567379, E52=-522371.0093590382, E54(m_19)=120, E55(result)=-181.37882269411048
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section01.js:1301 [S01] j_32 listener: 2442925.7175989025 → 2449538.362256986
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2449538.362256986
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section01.js:1301 [S01] j_32 listener: 2449538.362256986 → 2367829.5556702767
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2367829.5556702767
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=68915.37999915594, E37_daily=351.6090816283466, E45(d_21)=196, E50=68915.37999915594, E51=722392.6739567379, E52=-653477.293957582, E54(m_19)=120, E55(result)=-226.90183817971595
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=68915.37999915594, E37_daily=351.6090816283466, E45(d_21)=196, E50=68915.37999915594, E51=722392.6739567379, E52=-653477.293957582, E54(m_19)=120, E55(result)=-226.90183817971595
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=722392.6739567379, E52=-722392.6739567379, E54(m_19)=120, E55(result)=-250.83078956831176
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_i_41 = 650
4012-Section09.js:189 S09: Reference values updated for standard: OBC SB10 5.5-6 Z5 (2010), lighting: 2.0
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:189 S09: Reference values updated for standard: OBC SB10 5.5-6 Z5 (2010), lighting: 2.0
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:189 S09: Reference values updated for standard: OBC SB10 5.5-6 Z5 (2010), lighting: 2.0
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_13 = OBC SB10 5.5-6 Z5 (2010)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:1637 [S12] U-agg TGT: TB%=30 → g_101=0.175121, g_102=0.351349
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2763 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 95.11%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 476,783.45
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2784 S10: Target utilization factor dependency i_103 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 95.11%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 476,783.45
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=35550.4625, l_119=None, A28=35550.4625, A29=35.5504625, A30=42.80275685, A16=3.5700000000000003, A31=153569.8711642725, A32=13268436868.593145, A33=3685.6769079425403
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=68915.37999915594, E37_daily=351.6090816283466, E45(d_21)=196, E50=68915.37999915594, E51=722392.6739567379, E52=-653477.293957582, E54(m_19)=120, E55(result)=-226.90183817971595
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2763 S10: Target listener triggered by m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=113145.3708, ref_i_79=10060.174319999998, totalGains=123205.54512
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=49282.218048
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9956709734049238, i_80=49282.218048, i_81=122672.18503851465
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 53.65%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 268,952.12
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2784 S10: Target utilization factor dependency m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 53.65%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 268,952.12
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section14.js:1428 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section01.js:1301 [S01] j_32 listener: 2367829.5556702767 → 2442802.24023152
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2442802.24023152
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section01.js:1301 [S01] j_32 listener: 2442802.24023152 → 2442925.7175989025
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2442925.7175989025
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.17512139849145733*24)/1000 = 19.33340239345689
4012-Section12.js:2019 [S12DB] TGT i_101 result: 19.33340239345689 * 14260.13 = 275696.8314730064
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.17512139849145733*14260.13 + 0.35134899181057844*11168)/25428.130000999998 = 0.25252031700946964
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=275696.8314730064, i_102=184578.63502702702, i_103=133458.83179199995 → i_104=593734.2982920334
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=200021.66459769962, E37_daily=1020.518696927039, E45(d_21)=196, E50=200021.66459769962, E51=67734.01555200001, E52=132287.64904569963, E54(m_19)=120, E55(result)=45.93321147420126
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1301 [S01] j_32 listener: 2442925.7175989025 → 2444689.8754948135
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2444689.8754948135
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.25252031701940036
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1887 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1637 [S12] U-agg TGT: TB%=30 → g_101=0.175121, g_102=0.351349
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.17512139849145733*24)/1000 = 19.33340239345689
4012-Section12.js:2019 [S12DB] TGT i_101 result: 19.33340239345689 * 14260.13 = 275696.8314730064
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.17512139849145733*14260.13 + 0.35134899181057844*11168)/25428.130000999998 = 0.25252031700946964
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=275696.8314730064, i_102=184578.63502702702, i_103=133458.83179199995 → i_104=593734.2982920334
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.25252031701940036
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section03.js:1857 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
34012-Section09.js:442 [S09] Updated calculated display values for target mode
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_12 = A-Assembly
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_12 = 2023
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_12 = 0.13
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_13 = 50
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_13 = 0.507
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_14 = Targeted Use
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_14 = Sherwood CC
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_14 = 1.62
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:1180 [S05→S02] Updated ref_d_16 = 650 based on ref_d_15 = Self Reported
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_15 = Self Reported
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "11167" (state: imported, prev: 1427.20)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4011-FileHandler.js:422
updateStateFromImportData @ 4011-FileHandler.js:402
processImportedCSV @ 4011-FileHandler.js:356
reader.onload @ 4011-FileHandler.js:75
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_71, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.5584421603328857, i_80=232546.294848, i_81=324659.1381808133
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 53.65%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 268,952.12
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
34012-Section09.js:442 [S09] Updated calculated display values for target mode
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_15 = 11167
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_15 = 180
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_i_16 = MJMA
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_16 = 1.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_i_17 = XXXX
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_19 = ON
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_19 = Milton
34012-Section09.js:442 [S09] Updated calculated display values for target mode
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_m_19 = 120
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_20 = Present
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_21 = Capacitance
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_i_21 = 50
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_22 = 200
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_24 = 24
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_27 = 2000299
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_28 = 355013
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_29 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_30 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_31 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_35 = 1
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_39 = Pt.3 Steel
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_m_43 = 800000
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_44 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_i_44 = 0.00
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_45 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_k_45 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_46 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_i_46 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_49 = User Defined
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_49 = 40
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_50 = 10000
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_51 = Gas
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_52 = 90
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_k_52 = 0.90
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_53 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_56 = 50
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_57 = 550
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_58 = 100
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_59 = 45
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_i_59 = 45
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
4012-Section07.js:911 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87589.5223336692, k_54=0 (cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (REF)
4012-Section07.js:911 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87589.5223336692, k_54=0 (cleared)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_71, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=617926.2011999999, ref_i_79=10060.174319999998, totalGains=627986.3755199999
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=251194.55020799997
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.5208275831177488, i_80=251194.55020799997, i_81=327072.6261929565
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 53.65%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 268,952.12
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
4012-Section07.js:911 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87589.5223336692, k_54=0 (cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Gas" (REF)
4012-Section07.js:911 [S07] 🔥 Gas calc: demand=42760.48, afue=0.9 → e_51=4598.449922517634, k_54=0 (cleared)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_71, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.5584421603328857, i_80=232546.294848, i_81=324659.1381808133
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 53.65%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 268,952.12
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
34012-Section09.js:442 [S09] Updated calculated display values for target mode
34012-Section09.js:442 [S09] Updated calculated display values for target mode
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_63 = 2400
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_63 = 10
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_64 = Active
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_66 = 2
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_67 = Regular
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_68 = No Elevators
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_73 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_73 = Average
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_73 = 0.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_73 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_73 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_74 = 914
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_74 = North
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_74 = 0.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_74 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_74 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_75 = 846
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_75 = East
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_75 = 0.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_75 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_75 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_76 = 845
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_76 = South
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_76 = 0.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_76 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_76 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_77 = 120
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_77 = West
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_77 = 0.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_77 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_77 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_78 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_e_78 = Skylight
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_78 = 0.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_78 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_h_78 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_80 = NRC 40%
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_85 = 1411.52
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_85 = 5.30
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_86 = 712.97
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_86 = 4.10
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_87 = 0.00
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_87 = 6.60
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_88 = 1.990
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_89 = 1.420
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_90 = 1.420
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_91 = 1.420
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_92 = 1.420
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_93 = 1.420
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_94 = 0.00
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_94 = 1.80
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_95 = 1100.42
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_95 = 3.50
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_96 = 29.70
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=imported)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2170 [S11] Listener: ref_d_97 changed → recalculating (src=imported)
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_97 = 50
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_103 = 2
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_103 = Exposed
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_105 = 85321.11
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_108 = MEASURED
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_109 = 3
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_113 = Gas
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_f_113 = 7.1
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_j_115 = 0.9
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_116 = Cooling
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_j_116 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_118 = 0
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_g_118 = Volume by Schedule
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_118 = 4
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_119 = 12.5
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_l_119 = None
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_k_120 = 10
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_d_142 = 300000
4011-FileHandler.js:424 [FileHandler] Reference field imported: ref_s18_notes = Enter project notes here...
4011-FileHandler.js:517 [FileHandler] All imported values set. Explicitly calling loadReferenceData for standard: OBC SB10 5.5-6 Z5 (2010)
4011-StateManager.js:1312 [StateManager] Loading reference data for standard: OBC SB10 5.5-6 Z5 (2010)
4011-StateManager.js:1346 [StateManager] Step 1: Copied application state to activeReferenceDataSet (preserving independent Reference values). d_53 value: 0
4011-StateManager.js:1384 [StateManager] Step 2: Applied Reference Mode Defaults. d_53 value: 0
4011-StateManager.js:1390 [StateManager] Attempting to access TEUI.ReferenceValues for standardKey: "OBC SB10 5.5-6 Z5 (2010)"
4011-StateManager.js:1395 [StateManager] TEUI.ReferenceValues exists? true
4011-StateManager.js:1400 [StateManager] Available standards: (19) ['OBC SB12 3.1.1.2.C4', 'OBC SB12 3.1.1.2.C1', 'OBC SB12 3.1.1.2.A3', 'OBC SB10 5.5-6 Z6', 'OBC SB10 5.5-6 Z5 (2010)', 'ADD YOUR OWN HERE', 'NBC T1', 'NECB T1 (Z6)', 'CaGBC ZCB', 'PH Classic', 'PH Plus', 'PH Premium', 'EnerPHit', 'PH Low Energy', 'getStandardFields', 'getStandards', '_data', 'getStandardData', 'getAllStandardNames']
4011-StateManager.js:1404 [StateManager] Exact standardKey being requested: "OBC SB10 5.5-6 Z5 (2010)"
4011-StateManager.js:1414 [StateManager] d_53 in standard? true
4011-StateManager.js:1419 [StateManager] d_53 value in standard: 0
4011-StateManager.js:1436 [StateManager] Checking field: d_52, value: 90
4011-StateManager.js:1447 [StateManager] Applying d_52 = 90
4011-StateManager.js:1436 [StateManager] Checking field: k_52, value: 90
4011-StateManager.js:1447 [StateManager] Applying k_52 = 90
4011-StateManager.js:1436 [StateManager] Checking field: d_53, value: 0
4011-StateManager.js:1447 [StateManager] Applying d_53 = 0
4011-StateManager.js:1436 [StateManager] Checking field: d_56, value: 150
4011-StateManager.js:1447 [StateManager] Applying d_56 = 150
4011-StateManager.js:1436 [StateManager] Checking field: d_57, value: 1000
4011-StateManager.js:1447 [StateManager] Applying d_57 = 1000
4011-StateManager.js:1436 [StateManager] Checking field: d_58, value: 150
4011-StateManager.js:1447 [StateManager] Applying d_58 = 150
4011-StateManager.js:1436 [StateManager] Checking field: d_59, value: 45
4011-StateManager.js:1447 [StateManager] Applying d_59 = 45
4011-StateManager.js:1436 [StateManager] Checking field: g_67, value: Regular
4011-StateManager.js:1447 [StateManager] Applying g_67 = Regular
4011-StateManager.js:1436 [StateManager] Checking field: t_65, value: 7.0
4011-StateManager.js:1452 [StateManager] Standard OBC SB10 5.5-6 Z5 (2010) defines field t_65 not in known user-editable fields
(anonymous) @ 4011-StateManager.js:1452
loadReferenceData @ 4011-StateManager.js:1435
updateStateFromImportData @ 4011-FileHandler.js:520
processImportedCSV @ 4011-FileHandler.js:356
reader.onload @ 4011-FileHandler.js:75
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
4011-StateManager.js:1436 [StateManager] Checking field: t_66, value: 2.0
4011-StateManager.js:1452 [StateManager] Standard OBC SB10 5.5-6 Z5 (2010) defines field t_66 not in known user-editable fields
(anonymous) @ 4011-StateManager.js:1452
loadReferenceData @ 4011-StateManager.js:1435
updateStateFromImportData @ 4011-FileHandler.js:520
processImportedCSV @ 4011-FileHandler.js:356
reader.onload @ 4011-FileHandler.js:75
load
handleFileSelect @ 4011-FileHandler.js:66
(anonymous) @ 4011-FileHandler.js:37Understand this warningAI
4011-StateManager.js:1436 [StateManager] Checking field: f_73, value: 0.50
4011-StateManager.js:1447 [StateManager] Applying f_73 = 0.50
4011-StateManager.js:1436 [StateManager] Checking field: f_74, value: 0.50
4011-StateManager.js:1447 [StateManager] Applying f_74 = 0.50
4011-StateManager.js:1436 [StateManager] Checking field: f_75, value: 0.50
4011-StateManager.js:1447 [StateManager] Applying f_75 = 0.50
4011-StateManager.js:1436 [StateManager] Checking field: f_76, value: 0.50
4011-StateManager.js:1447 [StateManager] Applying f_76 = 0.50
4011-StateManager.js:1436 [StateManager] Checking field: f_77, value: 0.50
4011-StateManager.js:1447 [StateManager] Applying f_77 = 0.50
4011-StateManager.js:1436 [StateManager] Checking field: f_78, value: 0.50
4011-StateManager.js:1447 [StateManager] Applying f_78 = 0.50
4011-StateManager.js:1436 [StateManager] Checking field: d_80, value: NRC 40%
4011-StateManager.js:1447 [StateManager] Applying d_80 = NRC 40%
4011-StateManager.js:1436 [StateManager] Checking field: f_85, value: 5.30
4011-StateManager.js:1447 [StateManager] Applying f_85 = 5.30
4011-StateManager.js:1436 [StateManager] Checking field: f_86, value: 4.10
4011-StateManager.js:1447 [StateManager] Applying f_86 = 4.10
4011-StateManager.js:1436 [StateManager] Checking field: f_87, value: 6.60
4011-StateManager.js:1447 [StateManager] Applying f_87 = 6.60
4011-StateManager.js:1436 [StateManager] Checking field: g_88, value: 2.560
4011-StateManager.js:1447 [StateManager] Applying g_88 = 2.560
4011-StateManager.js:1436 [StateManager] Checking field: g_89, value: 2.560
4011-StateManager.js:1447 [StateManager] Applying g_89 = 2.560
4011-StateManager.js:1436 [StateManager] Checking field: g_90, value: 2.560
4011-StateManager.js:1447 [StateManager] Applying g_90 = 2.560
4011-StateManager.js:1436 [StateManager] Checking field: g_91, value: 2.560
4011-StateManager.js:1447 [StateManager] Applying g_91 = 2.560
4011-StateManager.js:1436 [StateManager] Checking field: g_92, value: 2.560
4011-StateManager.js:1447 [StateManager] Applying g_92 = 2.560
4011-StateManager.js:1436 [StateManager] Checking field: g_93, value: 2.560
4011-StateManager.js:1447 [StateManager] Applying g_93 = 2.560
4011-StateManager.js:1436 [StateManager] Checking field: f_94, value: 1.80
4011-StateManager.js:1447 [StateManager] Applying f_94 = 1.80
4011-StateManager.js:1436 [StateManager] Checking field: f_95, value: 3.50
4011-StateManager.js:1447 [StateManager] Applying f_95 = 3.50
4011-StateManager.js:1436 [StateManager] Checking field: d_97, value: 50
4011-StateManager.js:1447 [StateManager] Applying d_97 = 50
4011-StateManager.js:1436 [StateManager] Checking field: j_115, value: 0.90
4011-StateManager.js:1447 [StateManager] Applying j_115 = 0.90
4011-StateManager.js:1436 [StateManager] Checking field: j_116, value: 3.3
4011-StateManager.js:1447 [StateManager] Applying j_116 = 3.3
4011-StateManager.js:1436 [StateManager] Checking field: f_113, value: 7.1
4011-StateManager.js:1447 [StateManager] Applying f_113 = 7.1
4011-StateManager.js:1436 [StateManager] Checking field: d_118, value: 0
4011-StateManager.js:1447 [StateManager] Applying d_118 = 0
4011-StateManager.js:1436 [StateManager] Checking field: l_118, value: 3.50
4011-StateManager.js:1447 [StateManager] Applying l_118 = 3.50
4011-StateManager.js:1436 [StateManager] Checking field: d_119, value: 8.33
4011-StateManager.js:1447 [StateManager] Applying d_119 = 8.33
4011-StateManager.js:1457 [StateManager] Step 3: Applied standard overrides. d_53 value: 0
4011-StateManager.js:1479 [StateManager] FINAL d_53 value in activeReferenceDataSet: 0
4011-StateManager.js:1483 [StateManager] Final activeReferenceDataSet keys: 124
4011-FileHandler.js:521 [FileHandler] loadReferenceData finished after import.
4011-FileHandler.js:532 [FileHandler] Target import complete. 246 fields updated. 0 rows/fields skipped.
4012-Section11.js:1189 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1210 [S11 Area Sync] d_88 = 0 (from d_73)
4012-Section11.js:1210 [S11 Area Sync] d_89 = 914 (from d_74)
4012-Section11.js:1210 [S11 Area Sync] d_90 = 846 (from d_75)
4012-Section11.js:1210 [S11 Area Sync] d_91 = 845 (from d_76)
4012-Section11.js:1210 [S11 Area Sync] d_92 = 120 (from d_77)
4012-Section11.js:1210 [S11 Area Sync] d_93 = 0 (from d_78)
4012-Section11.js:1221 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1225 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:1953 [S11] calculateAll TRIGGERED. isReferenceMode: false
24012-Section11.js:1434 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1506 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
4012-Section11.js:1689 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
24012-Section11.js:1439 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2763 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.5584421603328857, i_80=232546.294848, i_81=324659.1381808133
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 61.61%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 308,842.85
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2784 S10: Target utilization factor dependency i_97 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 61.61%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 308,842.85
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=196459.93194460025, E37_daily=1002.3465915540829, E45(d_21)=196, E50=196459.93194460025, E51=67734.01555200001, E52=128725.91639260024, E54(m_19)=120, E55(result)=44.69649874743064
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9991221160100168, i_80=232546.294848, i_81=580855.3654470575
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 61.61%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 308,842.85
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 61.61%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 308,842.85
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
24012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=196459.93194460025, E37_daily=1002.3465915540829, E45(d_21)=196, E50=196459.93194460025, E51=67734.01555200001, E52=128725.91639260024, E54(m_19)=120, E55(result)=44.69649874743064
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section10.js:2763 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9991221160100168, i_80=232546.294848, i_81=580855.3654470575
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 87.48%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 438,507.67
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2784 S10: Target utilization factor dependency i_98 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 87.48%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 438,507.67
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=204720.57050568334, E37_daily=1044.4927066616497, E45(d_21)=196, E50=204720.57050568334, E51=67734.01555200001, E52=136986.55495368334, E54(m_19)=120, E55(result)=47.56477602558449
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1301 [S01] j_32 listener: 2444689.8754948135 → 2445444.1934890472
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2445444.1934890472
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=206729.72699208334, E37_daily=1054.7435050616496, E45(d_21)=196, E50=206729.7269920833, E51=67734.01555200001, E52=138995.71144008328, E54(m_19)=120, E55(result)=48.26239980558447
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section11.js:1228 [S11 Area Sync] Sync completed successfully
4012-Section01.js:1204 [S01DB] upstream snapshot {ref_j_32: '3900290.86816601', ref_k_32: '530684.160855739', j_32: '2445444.1934890472', k_32: '271300.0687068362', ref_h_15: '11167', …}
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=137.72000965512407, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=60.5 (ref), h_6=37.3 (target) → reduction should be 38%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 219.0 (from j_32=2445444.1934890472, area=11167)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=37.3, ref=60.5, reduction=0.38347107438016537, percent=38%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 3528ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 3528ms (interaction → h_10 settlement)
4012-Section01.js:1222 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section12.js:1637 [S12] U-agg REF: TB%=50 → g_101=0.426702, g_102=0.405403
4012-Section12.js:1907 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1981 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2009 [S12DB] REF h_101 calc: (4600*0.4267016722312208*24)/1000 = 47.10786461432678
4012-Section12.js:2012 [S12DB] REF i_101 result: 47.10786461432678 * 4849.49 = 228449.11836853155
4012-Section12.js:2164 [S12DB] REF g_104 calc: (0.4267016722312208*4849.49 + 0.4054026828583597*1101.42)/5950.910001 = 0.42275956366331835
4012-Section12.js:2188 [S12DB] REF ROW104: i_101=228449.11836853155, i_102=21004.23602374932, i_103=36440.07984031935 → i_104=285893.4342326002
4012-Section12.js:2191 [S12DB] REF ROW104: h_21="Capacitance", k_98=-4267.625965209389 → k_104=-4267.625965209389
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_101=4849.49
4012-Section12.js:2376 [S12DB] STORED for S15: ref_d_102=1101.42
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_101=0.4267016722312208
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_102=0.4054026828583597
4012-Section12.js:2376 [S12DB] STORED for S15: ref_g_104=0.42275956366331835
4012-Section10.js:2772 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9991221160100168, i_80=232546.294848, i_81=580855.3654470575
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 87.48%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 438,507.67
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_i_103 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 87.48%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 438,507.67
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_101=228449.11836853155
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_102=21004.23602374932
4012-Section12.js:2376 [S12DB] STORED for S15: ref_i_104=285893.4342326002
4012-Section12.js:2381 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1637 [S12] U-agg TGT: TB%=30 → g_101=0.317051, g_102=0.351349
4012-Section12.js:1914 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2763 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.9991221160100168, i_80=232546.294848, i_81=580855.3654470575
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 88.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 445,149.26
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2784 S10: Target utilization factor dependency i_103 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 88.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 445,149.26
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=99.873 kg/s, ΔT=3.6°C → 8599.91 kWh/day → 1031989.53 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Section10.js:2772 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1915 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:2136 [S10REF] Utilization calc: ref_i_71=571305.5628, ref_i_79=10060.174319999998, totalGains=581365.73712
4012-Section10.js:2150 [S10REF] Using utilization method: NRC 40%
4012-Section10.js:2187 [S10REF] Final calc: utilizationFactor=0.4, usableGains=232546.294848
4012-Section10.js:2230 [S10REF] Complete: g_80=0.4, g_81=0.5584421603328857, i_80=232546.294848, i_81=324659.1381808133
4012-Section10.js:1923 [S10 DEBUG] Dual-engine calculations complete in target mode
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 88.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 445,149.26
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
4012-Section10.js:2793 S10: Reference utilization factor dependency ref_m_121 changed.
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
4012-Section10.js:530 [S10DISPLAY] Display (target) e_80 = 501,271.61
4012-Section10.js:530 [S10DISPLAY] Display (target) e_81 = 501,271.61
4012-Section10.js:497 [S10DISPLAY] g_80 DEBUG: mode=target, valueToDisplay=0.4
4012-Section10.js:530 [S10DISPLAY] Display (target) g_80 = 40.00%
4012-Section10.js:530 [S10DISPLAY] Display (target) g_81 = 88.80%
4012-Section10.js:530 [S10DISPLAY] Display (target) i_80 = 200,508.64
4012-Section10.js:530 [S10DISPLAY] Display (target) i_81 = 445,149.26
4012-Section10.js:530 [S10DISPLAY] Display (target) i_82 = 300,762.97
24012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=206729.72699208334, E37_daily=1054.7435050616496, E45(d_21)=196, E50=206729.7269920833, E51=67734.01555200001, E52=138995.71144008328, E54(m_19)=120, E55(result)=48.26239980558447
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=0, E37_daily=0, E45(d_21)=196, E50=0, E51=67734.01555200001, E52=-67734.01555200001, E54(m_19)=120, E55(result)=-23.518755400000003
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=206729.72699208334, E37_daily=1054.7435050616496, E45(d_21)=196, E50=206729.7269920833, E51=67734.01555200001, E52=138995.71144008328, E54(m_19)=120, E55(result)=48.26239980558447
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section12.js:1992 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2016 [S12DB] TGT h_101 calc: (4600*0.31705115182288135*24)/1000 = 35.002447161246096
4012-Section12.js:2019 [S12DB] TGT i_101 result: 35.002447161246096 * 16633 = 582195.7036330063
4012-Section12.js:2168 [S12DB] TGT g_104 calc: (0.31705115182288135*16633 + 0.35134899181057844*11168)/27801.000001 = 0.33082901149166205
4012-Section12.js:2195 [S12DB] TGT ROW104: i_101=582195.7036330063, i_102=184578.63502702702, i_103=155666.2351041916 → i_104=922440.5737642249
4012-Section12.js:2198 [S12DB] TGT ROW104: h_21="Capacitance", k_98=6752.213052946165 → k_104=6752.213052946165
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=196459.93194460025, E37_daily=1002.3465915540829, E45(d_21)=196, E50=196459.93194460025, E51=67734.01555200001, E52=128725.91639260024, E54(m_19)=120, E55(result)=44.69649874743064
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=206729.72699208334, E37_daily=1054.7435050616496, E45(d_21)=196, E50=206729.7269920833, E51=67734.01555200001, E52=138995.71144008328, E54(m_19)=120, E55(result)=48.26239980558447
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1301 [S01] j_32 listener: 2445444.1934890472 → 2445799.445646212
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2445799.445646212
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=196459.93194460025, E37_daily=1002.3465915540829, E45(d_21)=196, E50=196459.93194460025, E51=67734.01555200001, E52=128725.91639260024, E54(m_19)=120, E55(result)=44.69649874743064
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=207675.95548103758, E37_daily=1059.5712014338653, E45(d_21)=196, E50=207675.9554810376, E51=67734.01555200001, E52=139941.9399290376, E54(m_19)=120, E55(result)=48.590951364249165
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=133201.76746791444, E37_daily=679.6008544281349, E45(d_21)=196, E50=133201.76746791444, E51=67734.01555200001, E52=65467.75191591443, E54(m_19)=120, E55(result)=22.731858304136953
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=207675.95548103758, E37_daily=1059.5712014338653, E45(d_21)=196, E50=207675.9554810376, E51=67734.01555200001, E52=139941.9399290376, E54(m_19)=120, E55(result)=48.590951364249165
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Section01.js:1301 [S01] j_32 listener: 2445799.445646212 → 2449571.035617381
4012-Section01.js:1302 [S01] 🕐 j_32 listener timing: StateManager current j_32 = 2449571.035617381
24012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=reference)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=9.599 kg/s, ΔT=3.6°C → 826.52 kWh/day → 99181.95 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=133201.76746791444, E37_daily=679.6008544281349, E45(d_21)=196, E50=133201.76746791444, E51=67734.01555200001, E52=65467.75191591443, E54(m_19)=120, E55(result)=22.731858304136953
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:461 [Cooling] 🚀 Starting cooling calculations (mode=target)...
4012-Cooling.js:293 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:408 [Cooling A33 PHYSICS] d_120=3333.333333333333, l_119=None, A28=3333.333333333333, A29=3.333333333333333, A30=4.013333333333333, A16=3.5700000000000003, A31=14399.238, A32=1244094163.2, A33=345.58171200000004
4012-Cooling.js:362 [Cooling m_124 COOLING-TARGET] m_129_annual=217721.7379130376, E37_daily=1110.8251934338653, E45(d_21)=196, E50=217721.7379130376, E51=67734.01555200001, E52=149987.72236103757, E54(m_19)=120, E55(result)=52.079070264249154
4012-Cooling.js:535 [Cooling] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Cooling.js:454 [Cooling] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section12.js:299 [S12DB] g_104 DISPLAY (target): 0.3308290115035619
4012-Section12.js:303 [Section12] Calculated display values updated for target mode
4012-Section01.js:1204 [S01DB] upstream snapshot {ref_j_32: '1785580.177100182', ref_k_32: '138606.62506014993', j_32: '2449571.035617381', k_32: '271576.56712943455', ref_h_15: '11167', …}
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=138.0895665753653, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=25.4 (ref), h_6=37.3 (target) → reduction should be -47%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 219.4 (from j_32=2449571.035617381, area=11167)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=37.3, ref=25.4, reduction=-0.46850393700787407, percent=-47%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 3766ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 3766ms (interaction → h_10 settlement)
4012-Section01.js:1222 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10