4011-MobileDetect.js:113 Desktop device detected
4012-Section02.js:1682 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1791 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4012-Section02.js:1854
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
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_102
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1471
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1477
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
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
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_102
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1667
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1293
calculateWWR @ 4012-Section12.js:1694
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1293
calculateWWR @ 4012-Section12.js:1701
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1789
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
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
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
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
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: h_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2072
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2078
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2084
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2090
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
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
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2246
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
checkData @ 4012-Section03.js:499
ensureAvailable @ 4012-Section03.js:515
onSectionRendered @ 4012-Section03.js:2471
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2248
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
onSectionRendered @ 4012-Section12.js:2653
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
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
4012-Section12.js:1652 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2027 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1652 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2034 [S12DB] TGT i_101 result: 0 * 0 = 0
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2522 S03: Self-Contained State Module initialization complete
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
 S09: Header controls injected successfully
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
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1293
calculateWWR @ 4012-Section12.js:1694
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1293
calculateWWR @ 4012-Section12.js:1701
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1789
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] REF i_101 result: 0 * 0 = 0
 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2027 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1293 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1652 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1293 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2835 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1652 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2027 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1293 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1652 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1293 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2835 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1652 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0*24)/1000 = 0
4012-Section12.js:2027 [S12DB] REF i_101 result: 0 * 0 = 0
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0*0 + 0*1e-7)/0.0000011 = 0
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=0, i_102=0, i_103=0 → i_104=0
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1293 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1652 [S12] U-agg TGT: TB%=0 → g_101=0.000000, g_102=0.000000
4012-Section12.js:1293 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2835 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section12.js:1652 [S12] U-agg REF: TB%=0 → g_101=0.000000, g_102=0.000000
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
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2248
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 251.47 = 0
 [S12DB] TGT g_104 calc: (0*251.47 + 0*1e-7)/251.4700011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=2353.477312670659 → i_104=2353.477312670659
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 92.47 = 0
 [S12DB] TGT g_104 calc: (0*92.47 + 0*1e-7)/92.47000109999999 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=865.415545005988 → i_104=865.415545005988
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 88.64 = 0
 [S12DB] TGT g_104 calc: (0*88.64 + 0*1e-7)/88.64000109999999 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=829.571038275449 → i_104=829.571038275449
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
(anonymous) @ 4012-Section10.js:2838
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 7.5 = 0
 [S12DB] TGT g_104 calc: (0*7.5 + 0*1e-7)/7.5000011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=70.19159281437125 → i_104=70.19159281437125
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section10.js:2285
storeTargetResults @ 4012-Section10.js:2281
calculateTargetModel @ 4012-Section10.js:1936
calculateAll @ 4012-Section10.js:1907
onSectionRendered @ 4012-Section10.js:2928
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] Setting up S10 area listeners...
 [S11] ✅ S10 area listeners registered for both modes
 S11: Section rendered - initializing Self-Contained State Module.
 [S11] Setting up S10 area listeners...
 [S11] ✅ S10 area listeners registered for both modes
 S11: ModeManager exposed globally for cross-section integration.
 [S11 Area Sync] S11 initialization complete - sync functions now enabled
 [S11 Area Sync] Starting sync in target mode
 [S11 Area Sync] d_73 is null/undefined, skipping d_88
(anonymous) @ 4012-Section11.js:1276
syncAreasFromS10 @ 4012-Section11.js:1229
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_74 is null/undefined, skipping d_89
(anonymous) @ 4012-Section11.js:1276
syncAreasFromS10 @ 4012-Section11.js:1229
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_75 is null/undefined, skipping d_90
(anonymous) @ 4012-Section11.js:1276
syncAreasFromS10 @ 4012-Section11.js:1229
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_76 is null/undefined, skipping d_91
(anonymous) @ 4012-Section11.js:1276
syncAreasFromS10 @ 4012-Section11.js:1229
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_77 is null/undefined, skipping d_92
(anonymous) @ 4012-Section11.js:1276
syncAreasFromS10 @ 4012-Section11.js:1229
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S11 Area Sync] d_78 is null/undefined, skipping d_93
(anonymous) @ 4012-Section11.js:1276
syncAreasFromS10 @ 4012-Section11.js:1229
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
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
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1870
calculateReferenceModel @ 4012-Section11.js:1867
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2782
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:1870
calculateReferenceModel @ 4012-Section11.js:1867
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.000000, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0*24)/1000 = 0
 [S12DB] TGT i_101 result: 0 * 352.13 = 0
 [S12DB] TGT g_104 calc: (0*352.13 + 0*1e-7)/352.1300011 = 0
 [S12DB] TGT ROW104: i_101=0, i_102=0, i_103=3295.54207702994 → i_104=3295.54207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=0
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.023003, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.023002868258881662*24)/1000 = 2.539516655780535
 [S12DB] TGT i_101 result: 2.539516655780535 * 352.13 = 894.2399999999998
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0.023002868258881662*352.13 + 0*1e-7)/352.1300011 = 0.023002868187024236
 [S12DB] TGT ROW104: i_101=894.2399999999998, i_102=0, i_103=3295.54207702994 → i_104=4189.78207702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=38.102399999999996
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.271863, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2718632323289694*24)/1000 = 30.013700849118226
 [S12DB] TGT i_101 result: 30.013700849118226 * 352.13 = 10568.72448
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0.2718632323289694*352.13 + 0*1e-7)/352.1300011 = 0.2718632314797105
 [S12DB] TGT ROW104: i_101=10568.72448, i_102=0, i_103=3295.54207702994 → i_104=13864.266557029941
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=450.31956479999997
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.283610, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.28361003038650495*24)/1000 = 31.310547354670145
 [S12DB] TGT i_101 result: 31.310547354670145 * 352.13 = 11025.383039999999
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0.28361003038650495*352.13 + 0*1e-7)/352.1300011 = 0.28361002950055075
 [S12DB] TGT ROW104: i_101=11025.383039999999, i_102=0, i_103=3295.54207702994 → i_104=14320.92511702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=469.77719039999994
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.771271, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.7712708374747962*24)/1000 = 85.1483004572175
 [S12DB] TGT i_101 result: 85.1483004572175 * 352.13 = 29983.27104
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0.7712708374747962*352.13 + 0*1e-7)/352.1300011 = 0.7712708350654646
 [S12DB] TGT ROW104: i_101=29983.27104, i_102=0, i_103=3295.54207702994 → i_104=33278.81311702994
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1277.5480704
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2034 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:1293 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1293 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1652 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2027 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1652 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1293 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2034 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1293 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1652 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2027 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1652 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
4012-Section12.js:1293 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
4012-Section12.js:2034 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
4012-Section12.js:1293 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1430
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1430
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1425
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=1.080000, g_102=0.000000
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1430
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*1.0799999999999998*24)/1000 = 119.23199999999997
 [S12DB] TGT i_101 result: 119.23199999999997 * 352.13 = 41985.164159999986
 [S12DB] TGT g_104 calc: (1.0799999999999998*352.13 + 0*1e-7)/352.1300011 = 1.079999996626246
 [S12DB] TGT ROW104: i_101=41985.164159999986, i_102=0, i_103=3295.54207702994 → i_104=45280.706237029925
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=0 → k_104=1788.9330815999997
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2219
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setValue @ 4012-Section11.js:439
setCalculatedValue @ 4012-Section11.js:1090
calculateComponentRow @ 4012-Section11.js:1430
(anonymous) @ 4012-Section11.js:1917
calculateTargetModel @ 4012-Section11.js:1916
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_97 changed.
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_98 changed.
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=20 → g_101=0.318350, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.3183500394402651*24)/1000 = 35.14584435420527
 [S12DB] TGT i_101 result: 35.14584435420527 * 1763.65 = 61984.968395294134
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0.3183500394402651*1763.65 + 0*1e-7)/1763.6500011000003 = 0.31835003924170807
 [S12DB] TGT ROW104: i_101=61984.968395294134, i_102=0, i_103=16505.78702227545 → i_104=78490.75541756958
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=2641.098653364706
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_101
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1483
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_105
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1489
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.000000
 DOM element not found for calculated field: g_101
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1666
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_107
setCalculatedValue @ 4012-Section12.js:1293
calculateWWR @ 4012-Section12.js:1694
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_107
setCalculatedValue @ 4012-Section12.js:1293
calculateWWR @ 4012-Section12.js:1701
calculateTargetModel @ 4012-Section12.js:2412
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_109
setCalculatedValue @ 4012-Section12.js:1293
calculateACH50Target @ 4012-Section12.js:1775
calculateTargetModel @ 4012-Section12.js:2414
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: d_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1816
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_110
setCalculatedValue @ 4012-Section12.js:1293
calculateAe10 @ 4012-Section12.js:1823
calculateTargetModel @ 4012-Section12.js:2415
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
 DOM element not found for calculated field: i_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_103
setCalculatedValue @ 4012-Section12.js:1293
calculateAirLeakageHeatLoss @ 4012-Section12.js:1961
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 DOM element not found for calculated field: h_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2048
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: i_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2054
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: j_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2060
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2066
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0*1e-7)/2476.620001099999 = 0.2783410625240625
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=0, i_103=23178.387012790416 → i_104=99282.07971301727
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=3242.6790802705355
 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0*1e-7)/2476.620001099999 = 0.2783410625240625
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=0, i_103=23178.387012790416 → i_104=99282.07971301727
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=3242.6790802705355
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.000000
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0*1e-7)/2476.620001099999 = 0.2783410625240625
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=0, i_103=23178.387012790416 → i_104=99282.07971301727
 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=3242.6790802705355
 [Section12] Calculated display values updated for target mode
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
 [Section12] Reference results stored with ref_ prefix for downstream sections
 DOM element not found for calculated field: d_102
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1471
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1477
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 DOM element not found for calculated field: g_102
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1667
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 DOM element not found for calculated field: g_104
setCalculatedValue @ 4012-Section12.js:1293
calculateCombinedUValue @ 4012-Section12.js:1668
calculateTargetModel @ 4012-Section12.js:2411
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2034 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:1293 DOM element not found for calculated field: h_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2072
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: i_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2078
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: j_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2084
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: k_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeHeatLossGain @ 4012-Section12.js:2090
calculateTargetModel @ 4012-Section12.js:2422
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=-11147.245589999733
4012-Section12.js:1293 DOM element not found for calculated field: i_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: k_104
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_101
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2245
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_102
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2246
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1293 DOM element not found for calculated field: l_103
setCalculatedValue @ 4012-Section12.js:1293
calculateEnvelopeTotals @ 4012-Section12.js:2247
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section12.js:1652 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2027 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="StaticCapacitance", k_98=-1895.4006468093894 → k_104=-12350.729770214082
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:1293 DOM element not found for calculated field: d_106
setCalculatedValue @ 4012-Section12.js:1293
calculateVolumeMetrics @ 4012-Section12.js:1477
calculateTargetModel @ 4012-Section12.js:2410
calculateAll @ 4012-Section12.js:2265
(anonymous) @ 4012-Section12.js:2770
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
(anonymous) @ 4012-Section11.js:2052
calculateTargetModel @ 4012-Section11.js:2049
calculateAll @ 4012-Section11.js:2079
(anonymous) @ 4012-Section11.js:2298
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
calculateReferenceModel @ 4012-Section11.js:1881
calculateAll @ 4012-Section11.js:2078
syncAreasFromS10 @ 4012-Section11.js:1289
onSectionRendered @ 4012-Section11.js:2428
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484Understand this warningAI
4012-Section12.js:1652 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2034 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="StaticCapacitance", k_98=-3293.5693790538335 → k_104=-11147.245589999733
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1291 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
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
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-FieldManager.js:1484
4012-Cooling.js:470 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1492 S14: Pattern A initialization complete.
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section15.js:494 ✅ S15: Header controls injected successfully
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 S02: Target defaults set from field definitions - single source of truth
 S02: Loaded and merged Target state from localStorage
 S02: Reference defaults set from field definitions - single source of truth with mode overrides
 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: undefined)
 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4012-Section02.js:1854
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
4012-Section08.js:709 [S08] S04 listeners setup complete
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
4012-Section11.js:1226 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1272 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1272 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1272 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1272 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1272 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1272 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1284 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1288 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2835 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2835 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1291 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
4012-Cooling.js:470 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
4012-Cooling.js:470 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992
4012-Cooling.js:470 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Section14.js:1464 S14: Section rendered - initializing Pattern A Dual-State Module.
4012-Section14.js:79 S14: Reference defaults loaded from standard: OBC SB10 5.5-6 Z6
4012-Section14.js:1455 [Section14] ✅ Added comprehensive listeners for 26 dependencies + 8 climate fields
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
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
initialize @ 4011-Calculator.js:66
(anonymous) @ 4011-Calculator.js:992Understand this warningAI
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
4012-Section02.js:1682 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1634 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1791 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4012-Section02.js:1854
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Section02.js:1468 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
4012-Section02.js:863 [S02] Reference CALCULATED results stored (d_16 only - INPUT fields excluded)
4012-Section02.js:1906 [S02] Refreshing UI for TARGET mode
4012-Section02.js:1964 [S02] Updated h_12 (reporting year) slider = "2022" (target mode)
4012-Section02.js:1981 [S02] Updated h_13 (service life) slider = "50" (target mode)
4012-Section02.js:2031 [S02] Updated h_15 = "1,427.20" (target mode)
4012-Section02.js:2031 [S02] Updated i_17 = "8154" (target mode)
4012-Section02.js:2031 [S02] Updated l_12 = "$0.1300" (target mode)
4012-Section02.js:2031 [S02] Updated l_13 = "$0.5070" (target mode)
4012-Section02.js:2031 [S02] Updated l_14 = "$1.6200" (target mode)
4012-Section02.js:2031 [S02] Updated l_15 = "$180.00" (target mode)
4012-Section02.js:2031 [S02] Updated l_16 = "$1.5000" (target mode)
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
4012-Section12.js:1652 [S12] U-agg TGT: TB%=20 → g_101=0.145468, g_102=0.324324
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*0.14546768522069703*24)/1000 = 16.059632448364955
4012-Section12.js:2034 [S12DB] TGT i_101 result: 16.059632448364955 * 2124.49 = 34118.52854022686
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (0.14546768522069703*2124.49 + 0.3243243243243243*1100.42)/3224.9100009999997 = 0.20649804656284781
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=34118.52854022686, i_102=16788.24544864865, i_103=19882.844935760477 → i_104=70789.61892463599
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="Capacitance", k_98=0 → k_104=0
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section03.js:2522 S03: Self-Contained State Module initialization complete
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
(anonymous) @ 4011-init.js:879Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
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
4012-Section10.js:2898 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2873 S10: Simplified global StateManager listeners added
4012-Section10.js:2922 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1321 [S11] Setting up S10 area listeners...
4012-Section11.js:1356 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2390 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1321 [S11] Setting up S10 area listeners...
4012-Section11.js:1356 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2412 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2420 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1226 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1272 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1272 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1272 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1272 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1272 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1272 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1284 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1288 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2835 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2835 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1291 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2437 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ 4011-init.js:879
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
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
4012-Section02.js:1682 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1634 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1791 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4012-Section02.js:1854
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
(anonymous) @ index.html:1067
4012-Section02.js:1468 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
4012-Section08.js:709 [S08] S04 listeners setup complete
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
4012-Section11.js:1272 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1272 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1272 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1272 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1284 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1288 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2835 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2835 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1291 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2437 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
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
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
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
4012-Section02.js:1682 S02: Target defaults set from field definitions - single source of truth
4012-Section02.js:1634 S02: Loaded and merged Target state from localStorage
4012-Section02.js:1791 S02: Reference defaults set from field definitions - single source of truth with mode overrides
4011-StateManager.js:353 [StateManager DEBUG] ref_h_15 setValue: "1427.20" (state: calculated, prev: undefined)
4011-StateManager.js:356 [StateManager] ref_h_15 setValue stack trace:
setValue @ 4011-StateManager.js:356
(anonymous) @ 4012-Section02.js:1854
initialize @ 4012-Section02.js:1850
onSectionRendered @ 4012-Section02.js:1279
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Section02.js:1468 [S02] Area updated to 1427.2 - letting downstream sections handle calculations
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
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
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
4012-Section10.js:2898 S10: Section rendered - initializing Self-Contained State Module.
4012-Section10.js:2873 S10: Simplified global StateManager listeners added
4012-Section10.js:2922 S10: ModeManager exposed globally for cross-section integration.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:1321 [S11] Setting up S10 area listeners...
4012-Section11.js:1356 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2390 S11: Section rendered - initializing Self-Contained State Module.
4012-Section11.js:1321 [S11] Setting up S10 area listeners...
4012-Section11.js:1356 [S11] ✅ S10 area listeners registered for both modes
4012-Section11.js:2412 S11: ModeManager exposed globally for cross-section integration.
4012-Section11.js:2420 [S11 Area Sync] S11 initialization complete - sync functions now enabled
4012-Section11.js:1226 [S11 Area Sync] Starting sync in target mode
4012-Section11.js:1272 [S11 Area Sync] d_88 = 7.50 (from d_73)
4012-Section11.js:1272 [S11 Area Sync] d_89 = 81.14 (from d_74)
4012-Section11.js:1272 [S11 Area Sync] d_90 = 3.83 (from d_75)
4012-Section11.js:1272 [S11 Area Sync] d_91 = 159.00 (from d_76)
4012-Section11.js:1272 [S11 Area Sync] d_92 = 100.66 (from d_77)
4012-Section11.js:1272 [S11 Area Sync] d_93 = 0.00 (from d_78)
4012-Section11.js:1284 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1288 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section10.js:2835 S10: Target listener triggered by i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_97 changed.
4012-Section10.js:2835 S10: Target listener triggered by i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_98 changed.
4012-Section11.js:2295 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1291 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2437 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
onSectionRendered @ 4012-Section13.js:2118
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2844 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency m_121 changed.
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:2258
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
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
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
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
(anonymous) @ 4012-Section12.js:2644
setTimeout
onSectionRendered @ 4012-Section12.js:2643
calculateTargetModel @ 4012-Section03.js:1771
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4012-Section03.js:2510
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1465
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1471
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1471
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1471
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateVolumeMetrics @ 4012-Section12.js:1471
calculateReferenceModel @ 4012-Section12.js:2292
calculateAll @ 4012-Section12.js:2264
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
4012-Section12.js:1652 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section15.js:1411 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1411
calculateAll @ 4012-Section15.js:1286
(anonymous) @ 4012-Section15.js:2118
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1666
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1666
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1666
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1666
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1667
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1667
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1667
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1667
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1668
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1668
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1668
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
setCalculatedValue @ 4012-Section12.js:1250
calculateCombinedUValue @ 4012-Section12.js:1668
calculateReferenceModel @ 4012-Section12.js:2293
calculateAll @ 4012-Section12.js:2264
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
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2844 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2027 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1652 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2835 S10: Target listener triggered by i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2856 S10: Target utilization factor dependency i_103 changed.
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Section10.js:2844 S10: Reference listener triggered by ref_m_121, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2865 S10: Reference utilization factor dependency ref_m_121 changed.
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Section14.js:1428 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
setCalculatedValue @ 4012-Section12.js:1250
calculateAirLeakageHeatLoss @ 4012-Section12.js:1955
calculateTargetModel @ 4012-Section12.js:2416
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4012-Section13.js:1908
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2225
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Section05.js:257 🔄 [S05] updateCalculatedDisplayValues: mode=target
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
calculateAndRefresh @ 4012-Section13.js:1899
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1250
calculateEnvelopeTotals @ 4012-Section12.js:2231
calculateTargetModel @ 4012-Section12.js:2427
calculateAll @ 4012-Section12.js:2265
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4011-TooltipManager.js:698 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698
(anonymous) @ 4011-TooltipManager.js:752
(anonymous) @ 4011-TooltipManager.js:744
applyTooltipsToSection @ 4011-TooltipManager.js:741
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
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
(anonymous) @ 4012-Section11.js:2444
setTimeout
onSectionRendered @ 4012-Section11.js:2443
initializeSectionEventHandlers @ 4011-FieldManager.js:398
renderSection @ 4011-FieldManager.js:443
(anonymous) @ 4011-FieldManager.js:470
renderAllSections @ 4011-FieldManager.js:469
initialize @ 4011-Calculator.js:66
(anonymous) @ index.html:1087Understand this warningAI
4011-Clock.js:41 [CLOCK] Starting initial load timing
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
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
calculateAll @ 4012-Cooling.js:617
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
calculateAll @ 4012-Cooling.js:617
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
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section03.js:1875 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
4012-Section12.js:1652 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1922 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:1996 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2024 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2027 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2179 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2203 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=36440.079840319355 → i_104=215036.9348822338
4012-Section12.js:2206 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section12.js:2396 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1652 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1929 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2007 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2031 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2034 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2183 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2210 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2213 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:316 [Section12] Calculated display values updated for target mode
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section11.js:2073 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1512 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1584 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1768 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1517 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
4012-Section07.js:887 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
4012-Section07.js:924 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.799 kg/s, ΔT=3.6°C → 413.26 kWh/day → 49590.98 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=49590.98 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
setTimeout
(anonymous) @ index.html:1092
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2939 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section06.js:515 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:510 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=65.5, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=27.6 (ref), h_6=11.7 (target) → reduction should be 58%
4012-Section01.js:924 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=27.6, reduction=0.5760869565217392, percent=58%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 563ms (all calculations finalized)
4012-Section01.js:1249 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4011-FileHandler.js:833 [CSV Export] Generated filename: TEUIv4011-DualState-Three_Feathers_Terrace.csv
4011-FileHandler.js:834 [CSV Export] Exported 126 fields (explicit list matching Excel import) with Target and Reference values
window.TEUI.StateManager.getValue('l_12')
window.TEUI.StateManager.getValue('ref_l_12')
'$0.1300'