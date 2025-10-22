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
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=0, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1289
calculateVolumeMetrics @ 4012-Section12.js:1497
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateVolumeMetrics @ 4012-Section12.js:1503
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateVolumeMetrics @ 4012-Section12.js:1509
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateVolumeMetrics @ 4012-Section12.js:1515
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateVolumeMetrics @ 4012-Section12.js:1521
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateCombinedUValue @ 4012-Section12.js:1680
calculateTargetModel @ 4012-Section12.js:2431
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateCombinedUValue @ 4012-Section12.js:1681
calculateTargetModel @ 4012-Section12.js:2431
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateCombinedUValue @ 4012-Section12.js:1682
calculateTargetModel @ 4012-Section12.js:2431
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateWWR @ 4012-Section12.js:1708
calculateTargetModel @ 4012-Section12.js:2432
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateWWR @ 4012-Section12.js:1715
calculateTargetModel @ 4012-Section12.js:2432
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateACH50Target @ 4012-Section12.js:1789
calculateTargetModel @ 4012-Section12.js:2434
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateACH50Target @ 4012-Section12.js:1803
calculateTargetModel @ 4012-Section12.js:2434
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateAe10 @ 4012-Section12.js:1830
calculateTargetModel @ 4012-Section12.js:2435
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateAe10 @ 4012-Section12.js:1837
calculateTargetModel @ 4012-Section12.js:2435
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateAirLeakageHeatLoss @ 4012-Section12.js:1969
calculateTargetModel @ 4012-Section12.js:2436
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateAirLeakageHeatLoss @ 4012-Section12.js:1975
calculateTargetModel @ 4012-Section12.js:2436
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2062
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2068
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2074
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2080
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2086
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2092
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2098
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2104
calculateTargetModel @ 4012-Section12.js:2442
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeTotals @ 4012-Section12.js:2239
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeTotals @ 4012-Section12.js:2259
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeTotals @ 4012-Section12.js:2260
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeTotals @ 4012-Section12.js:2261
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
setCalculatedValue @ 4012-Section12.js:1289
calculateEnvelopeTotals @ 4012-Section12.js:2262
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
onSectionRendered @ 4012-Section12.js:2670
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
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
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
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=0
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=0, d_21=0
 [S12DB] REF CLIMATE: d_20=0, d_21=0, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (0*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=0
 [S12DB] REF CLIMATE: d_20=4600, d_21=0, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2287 [S12 DIAG] Re-publishing 34 Reference results...
4012-Section12.js:2295 [S12 DIAG] ✅ Reference results re-published to StateManager
4012-Section12.js:2298 [S12 DIAG] ========== calculateAll END ==========
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2496 S03: Self-Contained State Module initialization complete
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔄 [S06] updateCalculatedDisplayValues: mode=target
 S06: Pattern A initialization complete.
 🚀 [S07] onSectionRendered: Initializing state defaults from FieldDefinitions
 🔧 [S07] TargetState.setDefaults: Initializing from FieldDefinitions
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 ✅ [S07] TargetState.setDefaults: d_49="User Defined", d_51="Heatpump"
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🌐 [S07] TargetState.setDefaults: Published to StateManager
 🔧 [S07] ReferenceState.setDefaults: Initializing Reference-specific defaults
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 ✅ [S07] ReferenceState.setDefaults: d_49="User Defined", d_51="Electric", d_52="90"
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: Target defaults loaded from field definitions
 S09: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6, lighting: 2.0
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
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
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
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
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2041 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2220 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2416 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:2282 [S12 DIAG] Running Target engine...
4012-Section12.js:1666 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1943 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2021 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2045 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2048 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2197 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2224 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2227 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2287 [S12 DIAG] Re-publishing 34 Reference results...
4012-Section12.js:2295 [S12 DIAG] ✅ Reference results re-published to StateManager
4012-Section12.js:2298 [S12 DIAG] ========== calculateAll END ==========
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:2277 [S12 DIAG] ========== calculateAll START (mode=target) ==========
4012-Section12.js:2280 [S12 DIAG] Running Reference engine...
4012-Section12.js:1666 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2041 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2220 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2416 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:2282 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=31694.95, ref_k_97=-2133.81
 [S11] Writing ref penalty: ref_i_97=31694.95, ref_k_97=-2133.81
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2287 [S12 DIAG] Re-publishing 34 Reference results...
4012-Section12.js:2295 [S12 DIAG] ✅ Reference results re-published to StateManager
4012-Section12.js:2298 [S12 DIAG] ========== calculateAll END ==========
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:2277 [S12 DIAG] ========== calculateAll START (mode=target) ==========
4012-Section12.js:2280 [S12 DIAG] Running Reference engine...
4012-Section12.js:1666 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2041 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2220 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
4012-Section12.js:2416 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:2282 [S12 DIAG] Running Target engine...
4012-Section12.js:1666 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1943 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2021 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2045 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2048 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2197 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2224 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2227 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2287 [S12 DIAG] Re-publishing 34 Reference results...
4012-Section12.js:2295 [S12 DIAG] ✅ Reference results re-published to StateManager
4012-Section12.js:2298 [S12 DIAG] ========== calculateAll END ==========
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2803 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_97 changed.
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_98 changed.
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 REF DEFAULTS] Published ref_d_97=50 to StateManager
 [S11 REF DEFAULTS] Published ref_f_85=5.3 to StateManager
 [S11 REF DEFAULTS] Published ref_f_86=4.1 to StateManager
 [S11 REF DEFAULTS] Published ref_f_87=6.6 to StateManager
 [S11 REF DEFAULTS] Published ref_f_94=1.8 to StateManager
 [S11 REF DEFAULTS] Published ref_f_95=3.5 to StateManager
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_88=1.99 to StateManager
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_89=1.42 to StateManager
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_90=1.42 to StateManager
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_91=1.42 to StateManager
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 REF DEFAULTS] Published ref_g_92=1.42 to StateManager
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
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
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_89 REFERENCE = 81.14
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_90 REFERENCE = 3.83
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_91 REFERENCE = 159.00
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_92 REFERENCE = 100.66
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11 Area Sync] d_93 REFERENCE = 0.00
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-4267.625965209389 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
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
4012-Section12.js:2277 [S12 DIAG] ========== calculateAll START (mode=target) ==========
4012-Section12.js:2280 [S12 DIAG] Running Reference engine...
4012-Section12.js:1666 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2041 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
4012-Section12.js:2220 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
4012-Section12.js:2416 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:2282 [S12 DIAG] Running Target engine...
4012-Section12.js:1666 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1943 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2021 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2045 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2048 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2197 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2224 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2227 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
4012-Section12.js:2287 [S12 DIAG] Re-publishing 34 Reference results...
4012-Section12.js:2295 [S12 DIAG] ✅ Reference results re-published to StateManager
4012-Section12.js:2298 [S12 DIAG] ========== calculateAll END ==========
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:2277 [S12 DIAG] ========== calculateAll START (mode=target) ==========
4012-Section12.js:2280 [S12 DIAG] Running Reference engine...
4012-Section12.js:1666 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2041 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S12] U-agg REF: TB%=50 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 2476.6199999999994 = 0
 [S12DB] REF g_104 calc: (0*2476.6199999999994 + 0*1100.42)/3577.0400009999994 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=36440.079840319355 → i_104=36440.079840319355
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 0 = 0
 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=0
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_97 changed.
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2824 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:1292 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section12.js:344 [S12 DIAG] setValue in TARGET mode: g_109 = 0 (source=calculated)
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section10.js:2812 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_m_121 changed.
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section14.js:1492 S14: Pattern A initialization complete.
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=231036.43785098597)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=231036.43785098597)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=231036.43785098597)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=231036.43785098597)
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
(anonymous) @ 4011-Calculator.js:1005
4012-Section02.js:1465 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section08.js:707 [S08] S04 listeners setup complete
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S09] 🔗 Published initial ref_d_63=126 for S07
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: UI refreshed for target mode
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
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
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Sync completed successfully
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S12 DIAG] setValue in TARGET mode: g_109 = 0 (source=calculated)
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:1005
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:1005
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:1005
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:1005
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:1005
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:1005
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
(anonymous) @ 4011-Calculator.js:1005
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
(anonymous) @ 4011-Calculator.js:1005
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
(anonymous) @ 4011-Calculator.js:1005
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
(anonymous) @ 4011-Calculator.js:1005
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
4012-Section15.js:1415 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:442 [S09] Updated calculated display values for target mode
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: UI refreshed for target mode
 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S09] 🔗 Published initial ref_d_63=126 for S07
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: UI refreshed for target mode
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
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
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S12 DIAG] setValue in TARGET mode: g_109 = 0 (source=calculated)
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
onSectionRendered @ 4012-Section13.js:2118
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
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
4012-Section12.js:1666 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1943 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2021 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2045 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2048 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2197 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2224 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2227 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2496 S03: Self-Contained State Module initialization complete
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:739
calculateReferenceModel @ 4012-Section07.js:1071
calculateAll @ 4012-Section07.js:1114
onSectionRendered @ 4012-Section07.js:1516
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Section09.js:2511 [S09] 🔗 Published initial ref_d_63=126 for S07
4012-Section09.js:2349 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
4012-Section09.js:367 S09: UI refreshed for target mode
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S12 DIAG] setValue in TARGET mode: g_109 = 0 (source=calculated)
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
4012-Cooling.js:468 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 S14: Pattern A initialization complete.
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 🔄 [S06] updateCalculatedDisplayValues: mode=target
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section07.js:133 🔗 [S07] ReferenceState.setDefaults: Published d_49, d_51="Electric", d_52="90%" with ref_ prefix
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
4012-Section07.js:295 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
4012-Section07.js:304 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S09] 🔗 Published initial ref_d_63=126 for S07
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 S09: UI refreshed for target mode
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
4012-Section11.js:1322 [S11] Setting up S10 area listeners...
4012-Section11.js:1355 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2383 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2391 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1223 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1273 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1273 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1273 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1273 [S11 Area Sync] d_91 = 159.00 (from d_76)
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
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_97 changed.
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_98 changed.
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
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
4012-Section12.js:344 [S12 DIAG] setValue in TARGET mode: g_109 = 0 (source=calculated)
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:631
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=0)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:637
calculateStage1 @ 4012-Cooling.js:523
calculateAll @ 4012-Cooling.js:608
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 S14: Section rendered - initializing Pattern A Dual-State Module.
 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
initializeEventHandlers @ 4012-Section15.js:2273
initializeSectionEventHandlers @ 4011-FieldManager.js:386
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1150
calculateAndRefresh @ 4012-Section04.js:1420
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
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=reference)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setFieldValue @ 4012-Section04.js:887
calculateRow32 @ 4012-Section04.js:1094
calculateAll @ 4012-Section04.js:1162
calculateAndRefresh @ 4012-Section04.js:1420
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
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=93425.03134400002)
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
(anonymous) @ 4012-Section12.js:2661
setTimeout
onSectionRendered @ 4012-Section12.js:2660
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
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
(anonymous) @ 4011-Calculator.js:1005Understand this warningAI
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
4012-Section01.js:772 [CALC-FLOW] 📊 S01.updateTEUIDisplay() reading ref_j_32=93425.03134400002, ref_h_15=1427.2
4012-Section01.js:828 🔍 [S01] T.1 Calculation: e_6=16.3 (ref), h_6=11.7 (target) → reduction should be 28%
4012-Section01.js:920 🔍 [S01DB] UPDATING h_10: 93.9 (from j_32=134041.4959823222, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=16.3, reduction=0.28220858895705525, percent=28%
4012-Section01.js:1224 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
 [S12 DIAG] ========== calculateAll START (mode=target) ==========
 [S12 DIAG] Running Reference engine...
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1497
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1497
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1497
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1497
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1503
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1503
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1503
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateVolumeMetrics @ 4012-Section12.js:1503
calculateReferenceModel @ 4012-Section12.js:2312
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1680
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1680
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1680
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1680
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1681
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1681
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1681
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1681
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1682
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1682
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1682
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateCombinedUValue @ 4012-Section12.js:1682
calculateReferenceModel @ 4012-Section12.js:2313
calculateAll @ 4012-Section12.js:2281
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
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0.6668795218521432*24)/1000 = 73.62349921247662
4012-Section12.js:2041 [S12DB] REF i_101 result: 73.62349921247662 * 2476.6199999999994 = 182337.4306196038
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0.6668795218521432*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5935677913147346
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=182337.4306196038, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=240961.97765992317
4012-Section12.js:2220 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2233
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2233
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2233
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2281
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
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2233
calculateReferenceModel @ 4012-Section12.js:2329
calculateAll @ 4012-Section12.js:2281
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
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=334387.0090039232)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=334387.0090039232)
4012-Section12.js:2416 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:2282 [S12 DIAG] Running Target engine...
4012-Section12.js:1666 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
setCalculatedValue @ 4012-Section12.js:1246
calculateAirLeakageHeatLoss @ 4012-Section12.js:1969
calculateTargetModel @ 4012-Section12.js:2436
calculateAll @ 4012-Section12.js:2283
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
setCalculatedValue @ 4012-Section12.js:1246
calculateAirLeakageHeatLoss @ 4012-Section12.js:1969
calculateTargetModel @ 4012-Section12.js:2436
calculateAll @ 4012-Section12.js:2283
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
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:296 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:626 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:784 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
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
setCalculatedValue @ 4012-Section12.js:1246
calculateAirLeakageHeatLoss @ 4012-Section12.js:1969
calculateTargetModel @ 4012-Section12.js:2436
calculateAll @ 4012-Section12.js:2283
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
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
setCalculatedValue @ 4012-Section12.js:1246
calculateAirLeakageHeatLoss @ 4012-Section12.js:1969
calculateTargetModel @ 4012-Section12.js:2436
calculateAll @ 4012-Section12.js:2283
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
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2239
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2239
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2239
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2239
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
4012-Cooling.js:528 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=435558.3356705898)
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1246
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2447
calculateAll @ 4012-Section12.js:2283
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
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section12.js:2287 [S12 DIAG] Re-publishing 34 Reference results...
4012-Section12.js:2295 [S12 DIAG] ✅ Reference results re-published to StateManager
4012-Section12.js:2298 [S12 DIAG] ========== calculateAll END ==========
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
 [CALC-FLOW] 🎯 Calculator.calculateAll() START
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
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1516 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section03.js:1905 [S03] Target CALCULATED results stored (setpoints + derived values only - climate data already published)
4012-Section12.js:1666 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1943 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2021 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2045 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2048 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2197 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2224 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2227 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1511 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1583 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1767 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1699
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1699
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
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
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1718
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setValue @ 4012-Section03.js:230
setFieldValue @ 4012-Section03.js:466
calculateGroundFacing @ 4012-Section03.js:1718
calculateReferenceModel @ 4012-Section03.js:1816
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section11.js:2044 [S11] calculateAll TRIGGERED. isReferenceMode: false
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
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
(anonymous) @ 4012-Section13.js:2307
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
 [CALC-FLOW] 🏁 S13.calculateAll() END
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
 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
(anonymous) @ 4012-Section13.js:2311
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
(anonymous) @ 4012-Section03.js:1867
storeReferenceResults @ 4012-Section03.js:1865
calculateReferenceModel @ 4012-Section03.js:1823
calculateAll @ 4012-Section03.js:1728
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4011-Calculator.js:536 [CALC-FLOW] 🔄 Running sect12.calculateAll()...
4012-Section12.js:2277 [S12 DIAG] ========== calculateAll START (mode=target) ==========
4012-Section12.js:2280 [S12 DIAG] Running Reference engine...
4012-Section12.js:1666 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2041 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
4012-Section12.js:2220 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=409633.2928929004)
 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=409633.2928929004)
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12 DIAG] Running Target engine...
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [S12 DIAG] Re-publishing 34 Reference results...
 [S12 DIAG] ✅ Reference results re-published to StateManager
 [S12 DIAG] ========== calculateAll END ==========
 [Section12] Calculated display values updated for target mode
 [CALC-FLOW] ✅ sect12.calculateAll() completed
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4011-Calculator.js:536 [CALC-FLOW] 🔄 Running sect13.calculateAll()...
4012-Section13.js:2962 [CALC-FLOW] 📊 S13.calculateAll() START (mode=target)
4012-Cooling.js:604 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:605 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2969
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2971
(anonymous) @ 4011-Calculator.js:538
calculateAll @ 4011-Calculator.js:513
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
4012-Section13.js:3001 [CALC-FLOW] 🏁 S13.calculateAll() END
4011-Calculator.js:540 [CALC-FLOW] ✅ sect13.calculateAll() completed
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Calculator.js:536 [CALC-FLOW] 🔄 Running sect14.calculateAll()...
4011-Calculator.js:540 [CALC-FLOW] ✅ sect14.calculateAll() completed
4011-Calculator.js:536 [CALC-FLOW] 🔄 Running sect04.calculateAll()...
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=409633.2928929004)
4011-Calculator.js:540 [CALC-FLOW] ✅ sect04.calculateAll() completed
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4011-Calculator.js:552 [CALC-FLOW] 🏁 Calculator.calculateAll() END
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:772 [CALC-FLOW] 📊 S01.updateTEUIDisplay() reading ref_j_32=409633.2928929004, ref_h_15=1427.2
4012-Section01.js:828 🔍 [S01] T.1 Calculation: e_6=27.6 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:920 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.6, reduction=0.5760869565217392, percent=58%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 583ms (all calculations finalized)
4012-Section01.js:1224 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section12.js:198 S12: Switched to REFERENCE mode
4012-Section12.js:316 [Section12] Calculated display values updated for reference mode
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 1.5
4012-Section12.js:348 [S12 DIAG] setValue in REFERENCE mode: ref_d_103 = 1.5 (source=user-modified)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section12.js:350 [S12 DIAG] ✅ Published ref_d_103 to StateManager
4011-FieldManager.js:208 [FieldManager] Routed d_103=1.5 through sect12 ModeManager
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 1.5
4012-Section12.js:348 [S12 DIAG] setValue in REFERENCE mode: ref_d_103 = 1.5 (source=user-modified)
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section12.js:350 [S12 DIAG] ✅ Published ref_d_103 to StateManager
4012-Section12.js:2277 [S12 DIAG] ========== calculateAll START (mode=reference) ==========
4012-Section12.js:2280 [S12 DIAG] Running Reference engine...
4012-Section12.js:1666 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1936 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:2010 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2038 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2041 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2193 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2217 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=40569.95555555555 → i_104=219166.81059747
4012-Section12.js:2220 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=413763.1686081366)
4012-Section04.js:1139 [CALC-FLOW] 📊 S04.calculateAll() START (mode=target)
4012-Section04.js:1171 [CALC-FLOW] 🏁 S04.calculateAll() END (ref_j_32=413763.1686081366)
4012-Section12.js:2416 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:2282 [S12 DIAG] Running Target engine...
4012-Section12.js:1666 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1943 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2021 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2045 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2048 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2197 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2224 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2227 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:2287 [S12 DIAG] Re-publishing 34 Reference results...
4012-Section12.js:2295 [S12 DIAG] ✅ Reference results re-published to StateManager
4012-Section12.js:2298 [S12 DIAG] ========== calculateAll END ==========
4012-Section12.js:316 [Section12] Calculated display values updated for reference mode
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:772 [CALC-FLOW] 📊 S01.updateTEUIDisplay() reading ref_j_32=413763.1686081366, ref_h_15=1427.2
4012-Section01.js:828 🔍 [S01] T.1 Calculation: e_6=27.8 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:920 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.8, reduction=0.5791366906474821, percent=58%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 66ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 66ms (interaction → h_10 settlement)
4012-Section01.js:1224 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10