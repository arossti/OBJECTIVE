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
calculateTargetModel @ 4012-Section11.js:1930
calculateAll @ 4012-Section11.js:2043
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
calculateTargetModel @ 4012-Section11.js:1930
calculateAll @ 4012-Section11.js:2043
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
calculateTargetModel @ 4012-Section11.js:1930
calculateAll @ 4012-Section11.js:2043
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
calculateTargetModel @ 4012-Section11.js:1930
calculateAll @ 4012-Section11.js:2043
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_98 changed.
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
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
setCalculatedValue @ 4012-Section12.js:1205
calculateAirLeakageHeatLoss @ 4012-Section12.js:1928
calculateTargetModel @ 4012-Section12.js:2389
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateAirLeakageHeatLoss @ 4012-Section12.js:1928
calculateTargetModel @ 4012-Section12.js:2389
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateAirLeakageHeatLoss @ 4012-Section12.js:1928
calculateTargetModel @ 4012-Section12.js:2389
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateAirLeakageHeatLoss @ 4012-Section12.js:1928
calculateTargetModel @ 4012-Section12.js:2389
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Target utilization factor dependency i_103 changed.
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
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2198
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2198
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2198
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2198
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
(anonymous) @ 4011-StateManager.js:561
notifyListeners @ 4011-StateManager.js:559
setValue @ 4011-StateManager.js:429
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
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
setCalculatedValue @ 4012-Section12.js:1205
calculateEnvelopeTotals @ 4012-Section12.js:2204
calculateTargetModel @ 4012-Section12.js:2400
calculateTargetModel @ 4012-Section03.js:1777
calculateAll @ 4012-Section03.js:1727
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [Section12] Calculated display values updated for target mode
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
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
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=277788.10, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [CLOCK] 🎯 User interaction started - timing to h_10 settlement
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-23528.38
 S10: Reference listener triggered by ref_i_98, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_98 changed.
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-23528.38
 S10: Reference listener triggered by ref_i_97, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_97 changed.
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-23528.38
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-23528.38
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 S10: Reference listener triggered by ref_j_19, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-14096.90
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=42.803 kg/s, ΔT=3.6°C → 3685.68 kWh/day → 442281.23 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=442281.23 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 [S03] Reference CALCULATED results stored (climate data + setpoints - INPUT fields excluded)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S10: Reference listener triggered by ref_i_71, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
 [S07] 🔥 Gas calc: demand=292434.89361702127, afue=0.94 → e_51=30025.82661571028, k_54=0 (cleared)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S10: Target listener triggered by i_71, recalculating all.
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=57.070 kg/s, ΔT=3.6°C → 4914.24 kWh/day → 589708.31 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=589708.31 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S10: Reference listener triggered by ref_m_121, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_m_121 changed.
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 ref_d_122 changed - triggering calculateAll() + UI update
 S10: Target listener triggered by m_121, recalculating all.
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
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
 [Cooling Stage 1] ⚠️ Already calculating (mode=reference) - skipping to prevent recursion
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
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
 [Cooling Stage 1] ⚠️ Already calculating (mode=target) - skipping to prevent recursion
 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S14 LISTENER] 🔥 d_122 changed - triggering calculateAll() + UI update
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
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
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
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
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 S10: Reference listener triggered by ref_i_71, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 [S09] Updated calculated display values for target mode
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [S12] U-agg REF: TB%=50 → g_101=0.879413, g_102=0.428608
 [S12] 🔵 REF CLIMATE READ: d_20=3920, d_21=410
 S10: Reference listener triggered by ref_i_103, recalculating all.
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 S10: Reference utilization factor dependency ref_i_103 changed.
 [S12DB] REF CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
 [S12DB] REF h_101 calc: (3920*0.8794130088475913*24)/1000 = 82.73517587238139
 [S12DB] REF i_101 result: 82.73517587238139 * 16633 = 1376134.1802853197
 [S12DB] REF g_104 calc: (0.8794130088475913*16633 + 0.4286076715786601*11168)/27801.000001 = 0.6983190191595318
 [S12DB] REF ROW104: i_101=1376134.1802853197, i_102=225165.91999999998, i_103=608564.0435368421 → i_104=2209864.1438221615
 [S12DB] REF ROW104: h_21="Capacitance", k_98=-28193.796108377348 → k_104=-28193.796108377348
 [Section12] Reference results stored with ref_ prefix for downstream sections
 [S12] U-agg TGT: TB%=30 → g_101=0.676346, g_102=0.371429
 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
 [S12DB] TGT h_101 calc: (3920*0.6763455491781712*24)/1000 = 63.63058926668235
 [S12DB] TGT i_101 result: 63.63058926668235 * 16633 = 1058367.5912727276
 [S12DB] TGT g_104 calc: (0.6763455491781712*16633 + 0.37142857142857144*11168)/27801.000001 = 0.5538566887752582
 [S12DB] TGT ROW104: i_101=1058367.5912727276, i_102=195127.296, i_103=608564.0435368421 → i_104=1862058.9308095698
 [S12DB] TGT ROW104: h_21="Capacitance", k_98=20823.55870129871 → k_104=20823.55870129871
 [Section12] Calculated display values updated for target mode
 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
 [S10 DEBUG] Dual-engine calculations complete in target mode
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] 🔵 REF CLIMATE READ: h_22=-1680
 [S11] REF TB%=50% → ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] Writing ref penalty: ref_i_97=247818.90, ref_k_97=-14096.90
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
 [S07] calculateEmissionsAndLosses: systemType="Gas" (TGT)
 [S07] 🔥 Gas calc: demand=292434.89361702127, afue=0.94 → e_51=30025.82661571028, k_54=0 (cleared)
 [S07] calculateEmissionsAndLosses: systemType="Gas" (REF)
 [S07] 🔥 Gas calc: demand=814485.3333333333, afue=0.9 → e_51=87344.26468359375, k_54=0 (cleared)
 [Cooling] 🚀 calculateAll("reference") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("reference")?
calculateAll @ 4012-Cooling.js:605
calculateReferenceModel @ 4012-Section13.js:3024
calculateAll @ 4012-Section13.js:2966
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=reference)...
 [Cooling] 🔍 i_59 READ: mode=reference, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=47.559 kg/s, ΔT=3.6°C → 4095.20 kWh/day → 491423.59 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="ref_" (mode=reference)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=491423.59 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=reference)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 [Cooling] 🚀 calculateAll("target") → Running Stage 1 only
 [Cooling] 🔍 TRACE: Who called calculateAll("target")?
calculateAll @ 4012-Cooling.js:605
calculateTargetModel @ 4012-Section13.js:3092
calculateAll @ 4012-Section13.js:2968
(anonymous) @ 4011-Calculator.js:531
calculateAll @ 4011-Calculator.js:510
processImportedExcel @ 4011-FileHandler.js:199
reader.onload @ 4011-FileHandler.js:80
 [Cooling Stage 1] 🚀 Starting ventilation & free cooling calculations (mode=target)...
 [Cooling] 🔍 i_59 READ: mode=target, i_59_value=45, will use indoorRH=0.45
 [Cooling] Free cooling calc: massFlow=35.669 kg/s, ΔT=3.6°C → 3071.40 kWh/day → 368567.69 kWh/yr
 [Cooling Stage 1] 📊 Publishing results with prefix="" (mode=target)
 [Cooling] 📢 Dispatched event: cooling-calculations-stage1
 [Cooling Stage 1] ✅ Complete: h_124=368567.69 kWh/yr, latentLoadFactor=1.746
 [S13] cooling_m_124 not yet available (Stage 2 pending), using 0 for m_124 (mode=target)
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🔄 [S05] updateCalculatedDisplayValues: mode=target
 🟢 [S06-TAR] Storing d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 🔵 [S06-REF] Storing ref_d_43 = 0 (from d_44=0, d_45=0, d_46=0)
 [DependencyGraph] Data loaded: 349 nodes, 588 links
 [DependencyGraph] Calculating node sizes...
 [FileHandler] 🔄 Refreshing Pattern A section UIs after import...
 [S02] Refreshing UI for TARGET mode
 [S02] Updated h_12 (reporting year) slider = "2023" (target mode)
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
 ✅ [S07] getFieldDefault: Found default for e_53 = "0.00"
 📋 [S07] refreshUI: fieldId=e_53, default=0.00, valueToShow=0.00, elementType=TD
 🔍 [S07] refreshUI: fieldId=j_53, storedValue=292434.89361702127, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=j_53
 ✅ [S07] getFieldDefault: Found default for j_53 = "12,828.14"
 📋 [S07] refreshUI: fieldId=j_53, default=12,828.14, valueToShow=292434.89361702127, elementType=TD
 🔍 [S07] refreshUI: fieldId=n_53, storedValue=0%, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=n_53
 ✅ [S07] getFieldDefault: Found default for n_53 = "0%"
 📋 [S07] refreshUI: fieldId=n_53, default=0%, valueToShow=0%, elementType=TD
 🔍 [S07] refreshUI: fieldId=d_54, storedValue=27488.88, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=d_54
 ✅ [S07] getFieldDefault: Found default for d_54 = "0.00"
 📋 [S07] refreshUI: fieldId=d_54, default=0.00, valueToShow=27488.88, elementType=TD
 🔍 [S07] refreshUI: fieldId=j_54, storedValue=17546.09361702129, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=j_54
 ✅ [S07] getFieldDefault: Found default for j_54 = "0.00"
 📋 [S07] refreshUI: fieldId=j_54, default=0.00, valueToShow=17546.09361702129, elementType=TD
 🔍 [S07] refreshUI: fieldId=k_54, storedValue=null, elementFound=true
 🔍 [S07] getFieldDefault: Looking for default for fieldId=k_54
 ✅ [S07] getFieldDefault: Found default for k_54 = "0.00"
 📋 [S07] refreshUI: fieldId=k_54, default=0.00, valueToShow=0.00, elementType=TD
 ✅ [S07] refreshUI: Completed refresh for mode=target
 [FileHandler] ✅ sect07 UI refreshed
 S09: UI refreshed for target mode
 [S09] Updated calculated display values for target mode
 [FileHandler] ✅ sect09 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect10 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect11 UI refreshed
4012-Section12.js:298 [Section12] Calculated display values updated for target mode
4011-FileHandler.js:230 [FileHandler] ✅ sect12 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect13 UI refreshed
4011-FileHandler.js:230 [FileHandler] ✅ sect15 UI refreshed
4012-Section01.js:755 🔍 [S01DB] updateTEUIDisplay START: e_10=341.2, h_10=159.67852622110752, useType=Utility Bills
4012-Section01.js:825 🔍 [S01] T.1 Calculation: e_6=137.5 (ref), h_6=88.9 (target) → reduction should be 35%
4012-Section01.js:917 🔍 [S01DB] UPDATING h_10: 511.4 (from j_32=5710470.347823744, area=11167)
4012-Section01.js:511 🔍 [S01] h_6 explanation: target=88.9, ref=137.5, reduction=0.35345454545454547, percent=35%
4011-Clock.js:65 🕐 [CLOCK] ⚡ CALCULATION COMPLETE: 94ms (subsequent update)
4011-Clock.js:161 🕐 [CLOCK] ⚡ USER INTERACTION COMPLETE: 95ms (interaction → h_10 settlement)
4012-Section01.js:1221 ✅ [S01] CALCULATION CHAIN COMPLETE - All values finalized including h_10
4012-Section11.js:396 S11: Switched to REFERENCE mode
4012-Section11.js:1216 [S11 Area Sync] Starting sync in reference mode
4012-Section11.js:1266 [S11 Area Sync] d_88 = 0 (from ref_d_73)
4012-Section11.js:1266 [S11 Area Sync] d_89 = 914 (from ref_d_74)
4012-Section11.js:1266 [S11 Area Sync] d_90 = 846 (from ref_d_75)
4012-Section11.js:1266 [S11 Area Sync] d_91 = 845 (from ref_d_76)
4012-Section11.js:1266 [S11 Area Sync] d_92 = 120 (from ref_d_77)
4012-Section11.js:1266 [S11 Area Sync] d_93 = 0 (from ref_d_78)
4012-Section11.js:1278 [S11 Area Sync] Refreshing UI...
4012-Section11.js:1282 [S11 Area Sync] Triggering recalculation...
4012-Section11.js:2037 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1504 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1504 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1576 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_98, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_98 changed.
4012-Section11.js:1760 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_97, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_97 changed.
4012-Section11.js:1509 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1509 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1285 [S11 Area Sync] Sync completed successfully
4012-Section11.js:2037 [S11] calculateAll TRIGGERED. isReferenceMode: false
4012-Section11.js:1504 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1504 [S11] 🔵 REF CLIMATE READ: h_22=-1680
4012-Section11.js:1576 [S11] REF TB%=50% → ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1760 [S11] Writing ref penalty: ref_i_97=533766.70, ref_k_97=15810.91
4012-Section11.js:1509 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section11.js:1509 [S11] 🎯 TGT CLIMATE READ: h_22=-1680
4012-Section12.js:198 S12: Switched to REFERENCE mode
4012-Section12.js:298 [Section12] Calculated display values updated for reference mode
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 1.5
4011-FieldManager.js:208 [FieldManager] Routed d_103=1.5 through sect12 ModeManager
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 1.5
4012-Section12.js:1625 [S12] U-agg REF: TB%=50 → g_101=0.879413, g_102=0.428608
4012-Section12.js:1895 [S12] 🔵 REF CLIMATE READ: d_20=3920, d_21=410
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:1969 [S12DB] REF CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:1997 [S12DB] REF h_101 calc: (3920*0.8794130088475913*24)/1000 = 82.73517587238139
4012-Section12.js:2000 [S12DB] REF i_101 result: 82.73517587238139 * 16633 = 1376134.1802853197
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0.8794130088475913*16633 + 0.4286076715786601*11168)/27801.000001 = 0.6983190191595318
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=1376134.1802853197, i_102=225165.91999999998, i_103=539593.4519360001 → i_104=2140893.5522213196
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="Capacitance", k_98=31621.81433962265 → k_104=31621.81433962265
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1625 [S12] U-agg TGT: TB%=30 → g_101=0.676346, g_102=0.371429
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (3920*0.6763455491781712*24)/1000 = 63.63058926668235
4012-Section12.js:2007 [S12DB] TGT i_101 result: 63.63058926668235 * 16633 = 1058367.5912727276
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.6763455491781712*16633 + 0.37142857142857144*11168)/27801.000001 = 0.5538566887752582
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=1058367.5912727276, i_102=195127.296, i_103=608564.0435368421 → i_104=1862058.9308095698
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=20823.55870129871 → k_104=20823.55870129871
4012-Section12.js:298 [Section12] Calculated display values updated for reference mode
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 2
4011-FieldManager.js:208 [FieldManager] Routed d_103=2 through sect12 ModeManager
4012-Section12.js:167 S12 ReferenceState: Saved state after user-modified changed d_103 to 2
4012-Section12.js:1625 [S12] U-agg REF: TB%=50 → g_101=0.879413, g_102=0.428608
4012-Section12.js:1895 [S12] 🔵 REF CLIMATE READ: d_20=3920, d_21=410
4012-Section10.js:2812 S10: Reference listener triggered by ref_i_103, recalculating all.
4012-Section10.js:1902 [S10 DEBUG] calculateAll() triggered in target mode - running both engines
4012-Section10.js:1910 [S10 DEBUG] Dual-engine calculations complete in target mode
4012-Section10.js:2833 S10: Reference utilization factor dependency ref_i_103 changed.
4012-Section12.js:1969 [S12DB] REF CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:1997 [S12DB] REF h_101 calc: (3920*0.8794130088475913*24)/1000 = 82.73517587238139
4012-Section12.js:2000 [S12DB] REF i_101 result: 82.73517587238139 * 16633 = 1376134.1802853197
4012-Section12.js:2152 [S12DB] REF g_104 calc: (0.8794130088475913*16633 + 0.4286076715786601*11168)/27801.000001 = 0.6983190191595318
4012-Section12.js:2176 [S12DB] REF ROW104: i_101=1376134.1802853197, i_102=225165.91999999998, i_103=608564.0435368421 → i_104=2209864.1438221615
4012-Section12.js:2179 [S12DB] REF ROW104: h_21="Capacitance", k_98=31621.81433962265 → k_104=31621.81433962265
4012-Section12.js:2369 [Section12] Reference results stored with ref_ prefix for downstream sections
4012-Section12.js:1625 [S12] U-agg TGT: TB%=30 → g_101=0.676346, g_102=0.371429
4012-Section12.js:1902 [S12] 🎯 TGT CLIMATE READ: d_20=3920, d_21=410
4012-Section12.js:1980 [S12DB] TGT CLIMATE: d_20=3920, d_21=410, d_22=1960, h_22=-1680
4012-Section12.js:2004 [S12DB] TGT h_101 calc: (3920*0.6763455491781712*24)/1000 = 63.63058926668235
4012-Section12.js:2007 [S12DB] TGT i_101 result: 63.63058926668235 * 16633 = 1058367.5912727276
4012-Section12.js:2156 [S12DB] TGT g_104 calc: (0.6763455491781712*16633 + 0.37142857142857144*11168)/27801.000001 = 0.5538566887752582
4012-Section12.js:2183 [S12DB] TGT ROW104: i_101=1058367.5912727276, i_102=195127.296, i_103=608564.0435368421 → i_104=1862058.9308095698
4012-Section12.js:2186 [S12DB] TGT ROW104: h_21="Capacitance", k_98=20823.55870129871 → k_104=20823.55870129871
4012-Section12.js:298 [Section12] Calculated display values updated for reference mode