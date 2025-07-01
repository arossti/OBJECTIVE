4011-MobileDetect.js:113 Desktop device detected
4011-Section03.js:10 🔥 CACHE BUST v3: Section03 loaded with TEMPERATURE CONVERSION FIX
 Section 18 (Notes) placeholder loaded.
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing corrected StateManager architecture
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: ""
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "", Result: 24°C
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance dropdown updated: Capacitance
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: ""
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance slider updated: 50%
 S03: ModeManager exposed globally for global toggle
 S03: Weather data button setup complete
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_j_19 = 6.0 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): 120, Global: null
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): 120, Global: null
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: ""
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_e_23 = -11 (+ global)
 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: target_e_24 = 86 (+ global)
 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): 120, Global: null
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): 120, Global: null
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
4011-Section03.js:1566 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: ""
4011-Section03.js:1590 S03: 🔍 HEATING SETPOINT result: 18°C
4011-Section03.js:953 S03: target_h_23 = 18 (+ global)
4011-Section03.js:1603 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "", Result: 24°C
4011-Section03.js:953 S03: target_h_24 = 24 (+ global)
4011-Section03.js:1433 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
4011-Section03.js:953 S03: target_e_23 = -11 (+ global)
4011-Section03.js:1442 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
4011-Section03.js:953 S03: target_i_23 = 64 (+ global)
4011-Section03.js:1450 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
4011-Section03.js:953 S03: target_e_24 = 86 (+ global)
4011-Section03.js:1458 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
4011-Section03.js:356 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): 120, Global: null
4011-Section03.js:1475 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
4011-Section03.js:953 S03: target_d_22 = 1960 (+ global)
4011-Section03.js:356 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): 120, Global: null
4011-Section03.js:1490 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
4011-Section03.js:1505 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
4011-Section03.js:953 S03: target_h_22 = -1680 (+ global)
4011-Section03.js:953 S03: target_i_24 = 75 (+ global)
4011-Section03.js:953 S03: target_m_24 = 109% (+ global)
4011-Section03.js:1353 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
4011-Section03.js:1356 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
4011-Section03.js:150 S03: UI refreshed for target mode via StateManager
4011-Section03.js:2123 S03: StateManager architecture initialization complete
24011-Section04.js:2161 S04 REFERENCE MODEL: ref_j_32=0, ref_k_32=0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
2 S04 REFERENCE MODEL: ref_j_32=0, ref_k_32=0
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=1172696495272.2634
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=97961.59999999998, target_i_80=2702356441683.8237
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing corrected StateManager architecture
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance dropdown updated: Capacitance
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance slider updated: 50%
 S03: ModeManager exposed globally for global toggle
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_j_19 = 6.0 (+ global)
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_e_23 = -11 (+ global)
 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: target_e_24 = 86 (+ global)
 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
4011-Section03.js:1531 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
4011-Section03.js:1566 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
4011-Section03.js:1590 S03: 🔍 HEATING SETPOINT result: 18°C
4011-Section03.js:953 S03: target_h_23 = 18 (+ global)
4011-Section03.js:1603 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
4011-Section03.js:953 S03: target_h_24 = 24 (+ global)
4011-Section03.js:1433 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
4011-Section03.js:953 S03: target_e_23 = -11 (+ global)
4011-Section03.js:1442 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
4011-Section03.js:953 S03: target_i_23 = 64 (+ global)
4011-Section03.js:1450 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
4011-Section03.js:953 S03: target_e_24 = 86 (+ global)
4011-Section03.js:1458 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
4011-Section03.js:1475 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
4011-Section03.js:953 S03: target_d_22 = 1960 (+ global)
4011-Section03.js:1490 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
4011-Section03.js:1505 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
4011-Section03.js:953 S03: target_h_22 = -1680 (+ global)
4011-Section03.js:953 S03: target_i_24 = 75 (+ global)
4011-Section03.js:953 S03: target_m_24 = 109% (+ global)
4011-Section03.js:1353 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
4011-Section03.js:1356 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
4011-Section03.js:150 S03: UI refreshed for target mode via StateManager
4011-Section03.js:2123 S03: StateManager architecture initialization complete
24011-Section04.js:2161 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-FileHandler.js:62 [SAFARI DEBUG] Setting up S03 Excel import buttons. selectExcelBtn and locationFileInput FOUND.
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing corrected StateManager architecture
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance dropdown updated: Capacitance
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance slider updated: 50%
 S03: ModeManager exposed globally for global toggle
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_j_19 = 6.0 (+ global)
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_e_23 = -11 (+ global)
 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: target_e_24 = 86 (+ global)
 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
4011-Section03.js:1531 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
4011-Section03.js:1566 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
4011-Section03.js:1590 S03: 🔍 HEATING SETPOINT result: 18°C
4011-Section03.js:953 S03: target_h_23 = 18 (+ global)
4011-Section03.js:1603 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
4011-Section03.js:953 S03: target_h_24 = 24 (+ global)
4011-Section03.js:1433 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
4011-Section03.js:953 S03: target_e_23 = -11 (+ global)
4011-Section03.js:1442 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
4011-Section03.js:953 S03: target_i_23 = 64 (+ global)
4011-Section03.js:1450 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
4011-Section03.js:953 S03: target_e_24 = 86 (+ global)
4011-Section03.js:1458 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
4011-Section03.js:1475 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
4011-Section03.js:953 S03: target_d_22 = 1960 (+ global)
4011-Section03.js:1490 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
4011-Section03.js:1505 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
4011-Section03.js:953 S03: target_h_22 = -1680 (+ global)
4011-Section03.js:953 S03: target_i_24 = 75 (+ global)
4011-Section03.js:953 S03: target_m_24 = 109% (+ global)
4011-Section03.js:1353 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
4011-Section03.js:1356 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
4011-Section03.js:150 S03: UI refreshed for target mode via StateManager
4011-Section03.js:2123 S03: StateManager architecture initialization complete
24011-Section04.js:2161 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing corrected StateManager architecture
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance dropdown updated: Capacitance
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance slider updated: 50%
 S03: ModeManager exposed globally for global toggle
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_j_19 = 6.0 (+ global)
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_e_23 = -11 (+ global)
 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: target_e_24 = 86 (+ global)
 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
4011-Section03.js:953 S03: target_j_19 = 6.0 (+ global)
4011-Section03.js:1531 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
4011-Section03.js:1566 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
4011-Section03.js:1590 S03: 🔍 HEATING SETPOINT result: 18°C
4011-Section03.js:953 S03: target_h_23 = 18 (+ global)
4011-Section03.js:1603 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
4011-Section03.js:953 S03: target_h_24 = 24 (+ global)
4011-Section03.js:1433 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
4011-Section03.js:953 S03: target_e_23 = -11 (+ global)
4011-Section03.js:1442 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
4011-Section03.js:953 S03: target_i_23 = 64 (+ global)
4011-Section03.js:1450 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
4011-Section03.js:953 S03: target_e_24 = 86 (+ global)
4011-Section03.js:1458 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
4011-Section03.js:1475 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
4011-Section03.js:953 S03: target_d_22 = 1960 (+ global)
4011-Section03.js:1490 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
4011-Section03.js:1505 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
4011-Section03.js:953 S03: target_h_22 = -1680 (+ global)
4011-Section03.js:953 S03: target_i_24 = 75 (+ global)
4011-Section03.js:953 S03: target_m_24 = 109% (+ global)
4011-Section03.js:1353 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
4011-Section03.js:1356 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
4011-Section03.js:150 S03: UI refreshed for target mode via StateManager
4011-Section03.js:2123 S03: StateManager architecture initialization complete
24011-Section04.js:2161 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
24011-Section04.js:2161 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S03: Sliders initialized via FieldManager
 S03: Section rendered - initializing corrected StateManager architecture
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance dropdown updated: Capacitance
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (target_d_23): null, Global: 
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (target_d_24): null, Global: 30
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 0, HeatingDays: 365
 S03: target_d_22 = 2920 (+ global)
 S03: 🔍 VALUE MISMATCH for m_19 - Prefixed (target_m_19): null, Global: 120
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 0
 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
 S03: target_h_22 = 0 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: Target capacitance slider updated: 50%
 S03: ModeManager exposed globally for global toggle
 S03: Checking climate data availability (attempt 1/10)
 S03: Climate data available (8) ['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NU', 'NT']
 S03: ClimateData available - initializing dropdowns
 S03: Populated province dropdown with options: (8) ['AB', 'BC', 'MB', 'NT', 'NU', 'ON', 'QC', 'SK']
 City dropdown updated for ON - selected: Alexandria
 S03: Sliders initialized via FieldManager
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_j_19 = 6.0 (+ global)
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
 S03: target_j_19 = 6.0 (+ global)
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_e_23 = -11 (+ global)
 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: target_e_24 = 86 (+ global)
 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Alexandria
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Alexandria, ON (Present): {Location: 'Alexandria', Elev ASL (m): 80, January_2_5: -24, January_1: -26, July_2_5_Tdb: 30, …}
 S03: target_d_20 = 4600 (+ global)
 S03: ✓ Set HDD18 (d_20) = 4600 for Present timeframe
 S03: target_d_21 = 196 (+ global)
 S03: ✓ Set CDD24 (d_21) = 196 for Present timeframe
 S03: 📊 HDD15 available: 3740 (below 15°C - informational only)
 S03: target_d_23 = -24 (+ global)
 S03: ✓ Set January 2.5% design temp (d_23) = -24°C
 S03: 📊 January 1% extreme temp available: -26°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Present", Future_July_2_5_Tdb=34, July_2_5_Tdb=30, selected=30
 S03: target_d_24 = 30 (+ global)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 30°C for Present timeframe
 S03: 📊 July 2.5% wet bulb temp available: 23°C for Present timeframe
 S03: target_l_22 = 80 (+ global)
 S03: ✓ Set Elevation (l_22) = 80m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 800mm
 S03: 📊 15-minute rain intensity: 25mm
 S03: 📊 Winter average temp: -8°C
 S03: 📊 Summer average temp: 20.5°C
4011-Section03.js:953 S03: target_j_19 = 6.0 (+ global)
4011-Section03.js:1531 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
4011-Section03.js:1566 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
4011-Section03.js:1590 S03: 🔍 HEATING SETPOINT result: 18°C
4011-Section03.js:953 S03: target_h_23 = 18 (+ global)
4011-Section03.js:1603 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
4011-Section03.js:953 S03: target_h_24 = 24 (+ global)
4011-Section03.js:1433 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
4011-Section03.js:953 S03: target_e_23 = -11 (+ global)
4011-Section03.js:1442 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
4011-Section03.js:953 S03: target_i_23 = 64 (+ global)
4011-Section03.js:1450 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
4011-Section03.js:953 S03: target_e_24 = 86 (+ global)
4011-Section03.js:1458 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
4011-Section03.js:1475 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
4011-Section03.js:953 S03: target_d_22 = 1960 (+ global)
4011-Section03.js:1490 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
4011-Section03.js:1505 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
4011-Section03.js:953 S03: target_h_22 = -1680 (+ global)
4011-Section03.js:953 S03: target_i_24 = 75 (+ global)
4011-Section03.js:953 S03: target_m_24 = 109% (+ global)
4011-Section03.js:1353 S03: ✅ COMPREHENSIVE climate data mapping complete for Alexandria, ON (Present)
4011-Section03.js:1356 S03: 🌡️ Applied: HDD=4600, CDD=196, Cold=-24°C, Hot=30°C, Elevation=80m
4011-Section03.js:150 S03: UI refreshed for target mode via StateManager
4011-Section03.js:2123 S03: StateManager architecture initialization complete
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
2 S04 REFERENCE MODEL: ref_j_32=132765.65, ref_k_32=6771.04815
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 TEUI Calculator 4.011 initialization complete
index.html:891 [Violation] 'DOMContentLoaded' handler took 221ms
[Violation] Forced reflow while executing JavaScript took 202ms
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section04.js:2161 S04 REFERENCE MODEL: ref_j_32=97218.48, ref_k_32=4958.1424799999995
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S04 REFERENCE MODEL: ref_j_32=97218.48, ref_k_32=4958.1424799999995
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S04 REFERENCE MODEL: ref_j_32=97218.48, ref_k_32=4958.1424799999995
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S04 REFERENCE MODEL: ref_j_32=97218.48, ref_k_32=4958.1424799999995
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section04.js:2161 S04 REFERENCE MODEL: ref_j_32=97218.48, ref_k_32=4958.1424799999995
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S04 REFERENCE MODEL: ref_j_32=104391.76148653767, ref_k_32=5323.979835813421
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S04 REFERENCE MODEL: ref_j_32=109455.12104860082, ref_k_32=5582.211173478641
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=0, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
2 S04 REFERENCE MODEL: ref_j_32=109455.12104860082, ref_k_32=5582.211173478641
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.33, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=116070.33, ref_m_121=0, ref_i_80=62687.12688000001
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-SectionIntegrator.js:650 [Violation] 'setTimeout' handler took 219ms
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 S03: target_h_23 = 18 (+ global)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 S03: target_h_24 = 24 (+ global)
 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
 S03: target_e_23 = -11 (+ global)
 🔥 COLDEST TEMP CONVERSION: -24°C → -11°F
 S03: target_i_23 = 64 (+ global)
 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
 S03: target_e_24 = 86 (+ global)
 🔥 HOTTEST TEMP CONVERSION: 30°C → 86°F
 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
 S03: target_d_22 = 1960 (+ global)
 S03: 🔍 GFCDD calculation - Capacitance: Capacitance, CoolingSetpoint: 24, CoolingDays: 120
 S03: 🔍 GFCDD result - Raw: -1680, Rounded: -1680
 S03: target_h_22 = -1680 (+ global)
 S03: target_i_24 = 75 (+ global)
 S03: target_m_24 = 109% (+ global)
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=62687.12688000001
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S04 REFERENCE MODEL: ref_j_32=132674.81516881677, ref_k_32=6766.415573609655
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Dependency.js:78 [DependencyGraph] Data loaded: 425 nodes, 744 links
4011-Dependency.js:710 [DependencyGraph] Calculating node sizes...
index.html:972 [Violation] 'setTimeout' handler took 916ms
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=70789.61892463599, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-SectionIntegrator.js:650 [Violation] 'setTimeout' handler took 110ms
index.html:888 Global Toggle: Setup complete in S01 header using S03's ModeManager
4011-Section03.js:34 S03: Switched to REFERENCE mode
4011-Section03.js:248 S03: Forced Reference defaults - Attawapiskat, Future, Static
 Section03: Province selected: ON
 City dropdown updated for ON - selected: Attawapiskat
 S03: ⭐ COMPREHENSIVE mapping of ALL available climate data for Attawapiskat, ON (Future): {Location: 'Attawapiskat', Elev ASL (m): 10, January_2_5: -37, January_1: -39, July_2_5_Tdb: 28, …}
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S03: ref_d_20 = 6600 (ref only)
 S03: ✓ Set HDD18 (d_20) = 6600 for Future timeframe
 [S11] calculateAll TRIGGERED. isReferenceMode: false
 S03: ref_d_21 = 0 (ref only)
 S03: ✓ Set CDD24 (d_21) = 0 for Future timeframe
 S03: 📊 HDD15 available: 6120 (below 15°C - informational only)
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S03: ref_d_23 = -37 (ref only)
 S03: ✓ Set January 2.5% design temp (d_23) = -37°C
 S03: 📊 January 1% extreme temp available: -39°C (more extreme cold)
 🔥 HOTTEST TEMP DEBUG: timeframe="Future", Future_July_2_5_Tdb=32, July_2_5_Tdb=28, selected=32
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S03: ref_d_24 = 32 (ref only)
 S03: ✓ Set July 2.5% dry bulb temp (d_24) = 32°C for Future timeframe
 S03: 📊 July 2.5% wet bulb temp available: 24°C for Future timeframe
 S03: ref_l_22 = 10 (ref only)
 S03: ✓ Set Elevation (l_22) = 10m ASL
 S03: 📊 Future days over 30°C (2021-2050): 0 days/year
 S03: 📊 Historical extreme max temp (1991-2020): 0°C
 S03: 📊 Annual rainfall: 450mm
 S03: 📊 15-minute rain intensity: 18mm
 S03: 📊 Winter average temp: -13°C
 S03: 📊 Summer average temp: 20.5°C
 S03: ref_j_19 = 7.2 (ref only)
 🔥 calculateAll() FUNCTION CALLED - Starting all calculations
 S03: 🔍 HEATING SETPOINT calculation - ReferenceStandard: "OBC SB10 5.5-6 Z6", OccupancyType: "A-Assembly"
 S03: 🔍 HEATING SETPOINT result: 18°C
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
 S03: ref_h_23 = 18 (ref only)
 S03: 🔍 COOLING SETPOINT calculation - OccupancyType: "A-Assembly", Result: 24°C
 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section15.js:986 🔍 S15 REFERENCE UPSTREAM: ref_i_104=70789.61892463599, ref_m_121=0, ref_i_80=68537.80736000002
4011-Section15.js:1237 🔍 S15 TARGET UPSTREAM: target_i_104=116070.32516166594, target_m_121=48980.79999999999, target_i_80=45879.580160000005
4011-Section03.js:953 S03: ref_h_24 = 24 (ref only)
4011-Section03.js:1433 🔥 calculateTemperatures() FUNCTION CALLED - Starting temperature conversions
4011-Section03.js:356 S03: 🔍 VALUE MISMATCH for d_23 - Prefixed (ref_d_23): -37, Global: -24
4011-Section03.js:953 S03: ref_e_23 = -35 (ref only)
4011-Section03.js:1442 🔥 COLDEST TEMP CONVERSION: -37°C → -35°F
4011-Section03.js:953 S03: ref_i_23 = 64 (ref only)
4011-Section03.js:1450 🔥 HEATING TEMP CONVERSION: 18°C → 64°F
4011-Section03.js:356 S03: 🔍 VALUE MISMATCH for d_24 - Prefixed (ref_d_24): 32, Global: 30
4011-Section03.js:953 S03: ref_e_24 = 90 (ref only)
4011-Section03.js:1458 🔥 HOTTEST TEMP CONVERSION: 32°C → 90°F
4011-Section03.js:1475 S03: 🔍 GFHDD calculation - HeatingSetpoint: 18, CoolingDays: 120, HeatingDays: 245
4011-Section11.js:1161 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section03.js:953 S03: ref_d_22 = 1960 (ref only)
4011-Section03.js:1490 S03: 🔍 GFCDD calculation - Capacitance: Static, CoolingSetpoint: 24, CoolingDays: 120
4011-Section03.js:1505 S03: 🔍 GFCDD result - Raw: 0, Rounded: 0
4011-Section11.js:1161 [S11] calculateAll TRIGGERED. isReferenceMode: false
4011-Section03.js:953 S03: ref_h_22 = 0 (ref only)
4011-Section03.js:953 S03: ref_i_24 = 75 (ref only)
4011-Section03.js:953 S03: ref_m_24 = 109% (ref only)
4011-Section03.js:1353 S03: ✅ COMPREHENSIVE climate data mapping complete for Attawapiskat, ON (Future)
4011-Section03.js:1356 S03: 🌡️ Applied: HDD=6600, CDD=0, Cold=-37°C, Hot=32°C, Elevation=10m
4011-Section03.js:150 S03: UI refreshed for reference mode via StateManager