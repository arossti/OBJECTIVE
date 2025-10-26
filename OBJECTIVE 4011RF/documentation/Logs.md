 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=68.57%
 S10: Target utilization factor dependency i_97 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=68.57%
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Target utilization factor dependency i_98 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
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
 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
onSectionRendered @ 4012-Section13.js:2129
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
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Target utilization factor dependency m_121 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
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
 S03: Climate data available Array(13)
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
 🔍 [S07] getFieldDefault: Looking for default for fieldId=e_49
 ✅ [S07] getFieldDefault: Found default for e_49 = "40.00"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=e_50
 ✅ [S07] getFieldDefault: Found default for e_50 = "10,000.00"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_53
 ✅ [S07] getFieldDefault: Found default for d_53 = "0"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=k_52
 ✅ [S07] getFieldDefault: Found default for k_52 = "0.90"
 ✅ [S07] ReferenceState.setDefaults: All 7 field defaults loaded
 🔗 [S07] ReferenceState.setDefaults: Published all 7 Reference defaults with ref_ prefix
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_49
 ✅ [S07] getFieldDefault: Found default for d_49 = "User Defined"
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_51
 ✅ [S07] getFieldDefault: Found default for d_51 = "Heatpump"
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] 🚨 CRITICAL: ref_d_63 missing, using default 0 for Reference calculation
calculateWaterUse @ 4012-Section07.js:763Understand this warningAI
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [S08] S04 listeners setup complete
 [S09] ✅ Pattern A dual-engine listeners registered (5 Target/Reference pairs)
 [S07] calculateEmissionsAndLosses: systemType="Heatpump" (TGT)
 [S07] ⚡ Non-fossil fuel: Heatpump → e_51=0, k_54=0 (both cleared)
 [S07] calculateEmissionsAndLosses: systemType="Electric" (REF)
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
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
 [S10 REF g_81 CALC] Inputs: i97=0, i103=0, m121=0, i98=0, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 0 = N/A
 [S10 REF g_81 CALC] Result: phUtilizationFactor=1, phReferenceGains=123384.06164
 [S10 REF g_81 STORED] Stored g_81=1 to ReferenceState
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
 [S10 REF g_81 CALC] Inputs: i97=0, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 119064.57002794294 = 1.0363
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.8181404762649948, phReferenceGains=100945.49495365907
 [S10 REF g_81 STORED] Stored g_81=0.8181404762649948 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.8181404762649948, formatted=58.07%
 S10: Reference utilization factor dependency ref_i_98 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.8181404762649948, formatted=58.07%
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=58.07%
 S10: Reference utilization factor dependency ref_i_97 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=58.07%
 [S11] Listener: ref_d_97 changed → recalculating (src=calculated)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 S10: Target listener triggered by i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=68.57%
 S10: Target utilization factor dependency i_97 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=68.57%
 S10: Target listener triggered by i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Target utilization factor dependency i_98 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
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
 [S11 Area Sync] Initialization phase complete - DUAL-STATE SYNC disabled
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
onSectionRendered @ 4012-Section13.js:2129
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
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Target listener triggered by m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=0, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 178596.85504191442 = 0.6909
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9454143753656165, phReferenceGains=116649.06556545332
 [S10 REF g_81 STORED] Stored g_81=0.9454143753656165 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 S10: Target utilization factor dependency m_121 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9454143753656165, formatted=94.03%
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:643
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:2269
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:411
updateStateManagerStage1 @ 4012-Cooling.js:649
calculateStage1 @ 4012-Cooling.js:527
calculateAll @ 4012-Cooling.js:620
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
onSectionRendered @ 4012-Section13.js:2129
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
 S14: Pattern A initialization complete.
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S18] Notes section rendered
 [S18] Notes & QC Monitor section loaded
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 TEUI Calculator 4.011 initialization complete
 [CLOCK] Performance monitoring initialized
 [TooltipManager] Empty tooltip message for field: l_104
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [QCMonitor] QC monitoring disabled. Add ?qc=true to URL to activate.
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=93.91920962886925, useType=Utility Bills
 🔍 [S01] T.1 Calculation: e_6=22.8 (ref), h_6=11.7 (target) → reduction should be 49%
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔍 [S01DB] UPDATING h_10: 93.9 (from j_32=134041.4959823222, area=1427.2)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_d_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔍 [S01] h_6 explanation: target=11.7, ref=22.8, reduction=0.48684210526315796, percent=49%
 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_g_101, ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S15] Missing critical upstream Reference values: ref_i_104
calculateReferenceModel @ 4012-Section15.js:1423Understand this warningAI
 [S15] Using fallback values for missing upstream dependencies (initialization timing)
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=25727.28888888889, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 204324.1439308033 = 0.6039
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9665707481441218, phReferenceGains=119259.42476843524
 [S10 REF g_81 STORED] Stored g_81=0.9665707481441218 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9665707481441218, formatted=94.03%
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9665707481441218, formatted=94.03%
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=25727.28888888889 → i_104=204324.14393080334
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
 [Section12] Reference results cached. Publishing will occur at the end of calculateAll.
 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
 S10: Target listener triggered by i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=25727.28888888889, m121=0, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 204324.1439308033 = 0.6039
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9665707481441218, phReferenceGains=119259.42476843524
 [S10 REF g_81 STORED] Stored g_81=0.9665707481441218 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9665707481441218, formatted=94.43%
 S10: Target utilization factor dependency i_103 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9665707481441218, formatted=94.43%
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
setCalculatedValue @ 4012-Section12.js:1255
calculateAirLeakageHeatLoss @ 4012-Section12.js:1964
calculateTargetModel @ 4012-Section12.js:2419
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=0.000 kg/s, ΔT=3.6°C → 0.00 kWh/day → 0.00 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=0.00 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=25727.28888888889, m121=98703.73333333328, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 303027.87726413656 = 0.4072
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9933350699929756, phReferenceGains=122561.71550518702
 [S10 REF g_81 STORED] Stored g_81=0.9933350699929756 to ReferenceState
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9933350699929756, formatted=94.43%
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S10 UI UPDATE] Updating g_81 display: mode=target, ReferenceState.getValue=0.9933350699929756, formatted=94.43%
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
setCalculatedValue @ 4012-Section12.js:1255
calculateAirLeakageHeatLoss @ 4012-Section12.js:1964
calculateTargetModel @ 4012-Section12.js:2419
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
setCalculatedValue @ 4012-Section12.js:1255
calculateAirLeakageHeatLoss @ 4012-Section12.js:1964
calculateTargetModel @ 4012-Section12.js:2419
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1928
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
setCalculatedValue @ 4012-Section12.js:1255
calculateAirLeakageHeatLoss @ 4012-Section12.js:1964
calculateTargetModel @ 4012-Section12.js:2419
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1919
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2234
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1919
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2234
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1919
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2234
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4012-Section13.js:1919
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2234
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2240
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2240
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2240
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
calculateAndRefresh @ 4012-Section13.js:1910
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1255
calculateEnvelopeTotals @ 4012-Section12.js:2240
calculateTargetModel @ 4012-Section12.js:2430
calculateAll @ 4012-Section12.js:2274
(anonymous) @ 4011-SectionIntegrator.js:656
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Section12] Calculated display values updated for target mode
 [DependencyGraph] Data loaded: 349 nodes, 588 links
 [DependencyGraph] Calculating node sizes...
 [TooltipManager] Empty tooltip message for field: j_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
 [TooltipManager] Empty tooltip message for field: l_98
applyTooltip @ 4011-TooltipManager.js:698Understand this warningAI
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
 [S11] REF TB%=50% → ref_i_97=59532.29, ref_k_97=-947.70
 [S11] Writing ref penalty: ref_i_97=59532.29, ref_k_97=-947.70
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
(anonymous) @ 4012-Section13.js:2318
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
(anonymous) @ 4012-Section13.js:2318
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
(anonymous) @ 4012-Section13.js:2322
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
(anonymous) @ 4012-Section13.js:2322
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
(anonymous) @ 4012-Section13.js:2318
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
(anonymous) @ 4012-Section13.js:2318
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
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
(anonymous) @ 4012-Section13.js:2322
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
(anonymous) @ 4012-Section13.js:2322
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=25727.28888888889 → i_104=204324.14393080334
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
 [Section12] Reference results cached. Publishing will occur at the end of calculateAll.
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
 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=25727.28888888889, m121=98703.73333333328, i98=119064.57002794294, totalGains=123384.06164
 [S10 REF g_81 CALC] gamma = 123384.06164 / 303027.87726413656 = 0.4072
 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9933350699929756, phReferenceGains=122561.71550518702
 [S10 REF g_81 STORED] Stored g_81=0.9933350699929756 to ReferenceState
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
 [S07] ⚡ Non-fossil fuel: Electric → e_51=0, k_54=0 (both cleared)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:617
calculateReferenceModel @ 4012-Section13.js:3035
calculateAll @ 4012-Section13.js:2977
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=4.682 kg/s, ΔT=3.6°C → 403.18 kWh/day → 48381.44 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=48381.44 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2950 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
4012-Cooling.js:616 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
4012-Cooling.js:617 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:617
calculateTargetModel @ 4012-Section13.js:3103
calculateAll @ 4012-Section13.js:2979
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
(anonymous) @ index.html:1094
4012-Cooling.js:477 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
4012-Cooling.js:213 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
4012-Cooling.js:298 [Cooling] Free cooling calc: massFlow=4.013 kg/s, ΔT=3.6°C → 345.58 kWh/day → 41469.81 kWh/yr
4012-Cooling.js:638 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
4012-Cooling.js:798 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
4012-Cooling.js:532 [Cooling Stage 1] ✅ Complete: h_124=41469.81 kWh/yr, latentLoadFactor=1.746
4012-Section13.js:2950 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
4012-Section06.js:526 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4012-Section06.js:521 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
4011-Dependency.js:116 [DependencyGraph] Data loaded: 349 nodes, 588 links
4011-Dependency.js:718 [DependencyGraph] Calculating node sizes...
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=192.9, h_10=93.72003071129046, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=23.1 (ref), h_6=11.7 (target) → reduction should be 49%
4012-Section01.js:924 🔍 [S01DB] UPDATING h_10: 93.7 (from j_32=133757.22783115375, area=1427.2)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=11.7, ref=23.1, reduction=0.49350649350649356, percent=49%
4011-Clock.js:59 🕐 [CLOCK] ⭐ INITIALIZATION COMPLETE: 534ms (all calculations finalized)
4012-Section01.js:1249 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section10.js:307 [S10 DEBUG] Mode switch: target → REFERENCE
4012-Section10.js:313 [S10 DEBUG] Calling updateCalculatedDisplayValues() for reference mode
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9933350699929756, formatted=99.33%
4012-Section12.js:203 S12: Switched to REFERENCE mode
4012-Section12.js:321 [Section12] Calculated display values updated for reference mode
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 3
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed d_103=3 through sect12 ModeManager
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 3
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section12.js:1657 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1931 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2900 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1950 [S10 DEBUG] calculateAll() triggered in reference mode - running both engines
4012-Section10.js:2260 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=32983.70370370371, m121=98703.73333333328, i98=119064.57002794294, totalGains=123384.06164
4012-Section10.js:2266 [S10 REF g_81 CALC] gamma = 123384.06164 / 310284.2920789514 = 0.3976
4012-Section10.js:2287 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9939873371915453, phReferenceGains=122642.19488142109
4012-Section10.js:2293 [S10 REF g_81 STORED] Stored g_81=0.9939873371915453 to ReferenceState
4012-Section10.js:1958 [S10 DEBUG] Dual-engine calculations complete in reference mode
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9939873371915453, formatted=99.40%
4012-Section10.js:2921 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9286045815852845, formatted=92.86%
4012-Section12.js:2005 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2033 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2036 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2188 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2212 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=32983.70370370371 → i_104=211580.55874561815
4012-Section12.js:2215 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section12.js:2399 [Section12] Reference results cached. Publishing will occur at the end of calculateAll.
4012-Section12.js:1657 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1938 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2016 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2040 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2043 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2192 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2219 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2222 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:321 [Section12] Calculated display values updated for reference mode
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 4
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed d_103=4 through sect12 ModeManager
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 4
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section12.js:1657 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1931 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2900 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1950 [S10 DEBUG] calculateAll() triggered in reference mode - running both engines
4012-Section10.js:2260 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=38208.844884488455, m121=98703.73333333328, i98=119064.57002794294, totalGains=123384.06164
4012-Section10.js:2266 [S10 REF g_81 CALC] gamma = 123384.06164 / 315509.43325973616 = 0.3911
4012-Section10.js:2287 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9944106402945208, phReferenceGains=122694.42373757102
4012-Section10.js:2293 [S10 REF g_81 STORED] Stored g_81=0.9944106402945208 to ReferenceState
4012-Section10.js:1958 [S10 DEBUG] Dual-engine calculations complete in reference mode
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9944106402945208, formatted=99.44%
4012-Section10.js:2921 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9286045815852845, formatted=92.86%
4012-Section12.js:2005 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2033 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2036 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2188 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2212 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=38208.844884488455 → i_104=216805.6999264029
4012-Section12.js:2215 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section12.js:2399 [Section12] Reference results cached. Publishing will occur at the end of calculateAll.
4012-Section12.js:1657 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1938 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2016 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2040 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2043 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2192 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2219 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2222 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:321 [Section12] Calculated display values updated for reference mode
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 5
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed d_103=5 through sect12 ModeManager
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 5
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section12.js:1657 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1931 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2900 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1950 [S10 DEBUG] calculateAll() triggered in reference mode - running both engines
4012-Section10.js:2260 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=45401.098039215685, m121=98703.73333333328, i98=119064.57002794294, totalGains=123384.06164
4012-Section10.js:2266 [S10 REF g_81 CALC] gamma = 123384.06164 / 322701.6864144634 = 0.3823
4012-Section10.js:2287 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9949371789387491, phReferenceGains=122759.39021410633
4012-Section10.js:2293 [S10 REF g_81 STORED] Stored g_81=0.9949371789387491 to ReferenceState
4012-Section10.js:1958 [S10 DEBUG] Dual-engine calculations complete in reference mode
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9949371789387491, formatted=99.49%
4012-Section10.js:2921 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9286045815852845, formatted=92.86%
4012-Section12.js:2005 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2033 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2036 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2188 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2212 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=45401.098039215685 → i_104=223997.95308113014
4012-Section12.js:2215 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section12.js:2399 [Section12] Reference results cached. Publishing will occur at the end of calculateAll.
4012-Section12.js:1657 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1938 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2016 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2040 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2043 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2192 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2219 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2222 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:321 [Section12] Calculated display values updated for reference mode
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 6
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4011-FieldManager.js:208 [FieldManager] Routed d_103=6 through sect12 ModeManager
4012-Section12.js:172 S12 ReferenceState: Saved state after user-modified changed d_103 to 6
4011-Clock.js:146 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
4012-Section12.js:1657 [S12] U-agg REF: TB%=50 → g_101=0.572061, g_102=0.428571
4012-Section12.js:1931 [S12] 🔵 REF CLIMATE READ: d_20=4600, d_21=196
4012-Section10.js:2900 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1950 [S10 DEBUG] calculateAll() triggered in reference mode - running both engines
4012-Section10.js:2260 [S10 REF g_81 CALC] Inputs: i97=59532.28501397147, i103=55928.88888888889, m121=98703.73333333328, i98=119064.57002794294, totalGains=123384.06164
4012-Section10.js:2266 [S10 REF g_81 CALC] gamma = 123384.06164 / 333229.4772641366 = 0.3703
4012-Section10.js:2287 [S10 REF g_81 CALC] Result: phUtilizationFactor=0.9956060521723712, phReferenceGains=122841.9185103929
4012-Section10.js:2293 [S10 REF g_81 STORED] Stored g_81=0.9956060521723712 to ReferenceState
4012-Section10.js:1958 [S10 DEBUG] Dual-engine calculations complete in reference mode
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9956060521723712, formatted=99.56%
4012-Section10.js:2921 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section10.js:564 [S10 UI UPDATE] Updating g_81 display: mode=reference, ReferenceState.getValue=0.9286045815852845, formatted=92.86%
4012-Section12.js:2005 [S12DB] REF CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2033 [S12DB] REF h_101 calc: (4600*0.5720614690100458*24)/1000 = 63.15558617870907
4012-Section12.js:2036 [S12DB] REF i_101 result: 63.15558617870907 * 2476.6199999999994 = 156412.38784191443
4012-Section12.js:2188 [S12DB] REF g_104 calc: (0.5720614690100458*2476.6199999999994 + 0.42857142857142855*1100.42)/3577.0400009999994 = 0.5279190185964686
4012-Section12.js:2212 [S12DB] REF ROW104: i_101=156412.38784191443, i_102=22184.467200000003, i_103=55928.88888888889 → i_104=234525.74393080332
4012-Section12.js:2215 [S12DB] REF ROW104: h_21="Capacitance", k_98=-1895.4006468093894 → k_104=-1895.4006468093894
4012-Section12.js:2399 [Section12] Reference results cached. Publishing will occur at the end of calculateAll.
4012-Section12.js:1657 [S12] U-agg TGT: TB%=20 → g_101=0.278341, g_102=0.324324
4012-Section12.js:1938 [S12] 🎯 TGT CLIMATE READ: d_20=4600, d_21=196
4012-Section12.js:2016 [S12DB] TGT CLIMATE: d_20=4600, d_21=196, d_22=1960, h_22=-1680
4012-Section12.js:2040 [S12DB] TGT h_101 calc: (4600*0.2783410626476887*24)/1000 = 30.728853316304836
4012-Section12.js:2043 [S12DB] TGT i_101 result: 30.728853316304836 * 2476.6199999999994 = 76103.69270022686
4012-Section12.js:2192 [S12DB] TGT g_104 calc: (0.2783410626476887*2476.6199999999994 + 0.3243243243243243*1100.42)/3577.0400009999994 = 0.2924870885578592
4012-Section12.js:2219 [S12DB] TGT ROW104: i_101=76103.69270022686, i_102=16788.24544864865, i_103=23178.387012790416 → i_104=116070.32516166594
4012-Section12.js:2222 [S12DB] TGT ROW104: h_21="Capacitance", k_98=-3293.5693790538335 → k_104=-3293.5693790538335
4012-Section12.js:321 [Section12] Calculated display values updated for reference mode