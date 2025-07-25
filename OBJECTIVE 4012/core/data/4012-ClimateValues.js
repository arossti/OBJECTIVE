/**
 * 4012-ClimateValues.js
 * Stores climate data for Canadian locations
 * Data sourced from CANDA.csv
 *
 * v4.012 - Simplified structure for direct access
 */

// Create namespace
window.TEUI = window.TEUI || {};

// Direct climate data object - no modules, no compilation needed
window.TEUI.ClimateData = {
  BC: {
    "100 Mile House": {
      Location: "100 Mile House",
      "Elev ASL (m)": 1040,
      January_2_5: -30,
      January_1: -32,
      July_2_5_Tdb: 29,
      July_2_5_Twb: 17,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 21,
      HDD18: 5030,
      HDD15: 4040,
      HDD18_2021_2050: 4530,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 10,
      Rain_15_min_mm_New: 13,
      "Rain_1_day_1/50mm": 48,
      "Rain_1_day_1/50mm_New": 61,
      Rain_Annual_mm: 300,
      Rain_Annual_mm_New: 450,
      Moisture_Index_New: 0.4,
      Precip_Annual_mm: 425,
      Precip_Annual_mm_New: 530,
      "Driving_Rain_Wind_Pa_1/5": 60,
      "Driving_Rain_Wind_Pa_1/5_New": 80,
      "Snow_kPa_1/50_Ss": 2.6,
      "Snow_kPa_1/50_Sr": 0.3,
      "Snow_kPa_1/1000_Ss": 3.7,
      "Snow_kPa_1/1000_Sr": 0.4,
      "Wind_Hourly_kPa_1/10": 0.27,
      "Wind_Hourly_kPa_1/10_New": 0.3,
      "Wind_Hourly_kPa_1/50": 0.35,
      "Wind_Hourly_kPa_1/50_New": 0.39,
      "Wind_Hourly_kPa_1/500_New": 0.55,
      Winter_Tdb_Avg: -7,
      Winter_Windspeed_Avg: 2.8,
      Summer_Tdb_Avg: 21,
      Summer_Twb_Avg: 21,
      Summer_RH_1500_LST: null,
    },
    Vancouver: {
      Location: "Vancouver (City Hall)",
      "Elev ASL (m)": 40,
      January_2_5: -7,
      January_1: -9,
      July_2_5_Tdb: 28,
      July_2_5_Twb: 20,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 25,
      HDD18: 2825,
      HDD15: 1970,
      HDD18_2021_2050: 2325,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 10,
      Rain_15_min_mm_New: 12,
      "Rain_1_day_1/50mm": 112,
      "Rain_1_day_1/50mm_New": 140,
      Rain_Annual_mm: 1325,
      Rain_Annual_mm_New: 1470,
      Moisture_Index_New: 1.7,
      Precip_Annual_mm: 1400,
      Precip_Annual_mm_New: 1450,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 180,
      "Snow_kPa_1/50_Ss": 1.8,
      "Snow_kPa_1/50_Sr": 0.2,
      "Snow_kPa_1/1000_Ss": 2.9,
      "Snow_kPa_1/1000_Sr": 0.3,
      "Wind_Hourly_kPa_1/10": 0.34,
      "Wind_Hourly_kPa_1/10_New": 0.37,
      "Wind_Hourly_kPa_1/50": 0.45,
      "Wind_Hourly_kPa_1/50_New": 0.5,
      "Wind_Hourly_kPa_1/500_New": 0.69,
      Winter_Tdb_Avg: -3,
      Winter_Windspeed_Avg: 2.5,
      Summer_Tdb_Avg: 25,
      Summer_Twb_Avg: 25,
      Summer_RH_1500_LST: null,
    },
    Victoria: {
      Location: "Victoria",
      "Elev ASL (m)": 10,
      January_2_5: -4,
      January_1: -6,
      July_2_5_Tdb: 24,
      July_2_5_Twb: 17,
      Future_July_2_5_Tdb: 30,
      Future_July_2_5_Twb: 21,
      HDD18: 2650,
      HDD15: 1730,
      HDD18_2021_2050: 2150,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 8,
      Rain_15_min_mm_New: 10,
      "Rain_1_day_1/50mm": 91,
      "Rain_1_day_1/50mm_New": 112,
      Rain_Annual_mm: 800,
      Rain_Annual_mm_New: 910,
      Moisture_Index_New: 1.1,
      Precip_Annual_mm: 825,
      Precip_Annual_mm_New: 910,
      "Driving_Rain_Wind_Pa_1/5": 220,
      "Driving_Rain_Wind_Pa_1/5_New": 250,
      "Snow_kPa_1/50_Ss": 1.1,
      "Snow_kPa_1/50_Sr": 0.2,
      "Snow_kPa_1/1000_Ss": 1.8,
      "Snow_kPa_1/1000_Sr": 0.3,
      "Wind_Hourly_kPa_1/10": 0.46,
      "Wind_Hourly_kPa_1/10_New": 0.51,
      "Wind_Hourly_kPa_1/50": 0.57,
      "Wind_Hourly_kPa_1/50_New": 0.63,
      "Wind_Hourly_kPa_1/500_New": 0.81,
      Winter_Tdb_Avg: -2,
      Winter_Windspeed_Avg: 4.7,
      Summer_Tdb_Avg: 21,
      Summer_Twb_Avg: 21,
      Summer_RH_1500_LST: null,
    },
  },
  AB: {
    Calgary: {
      Location: "Calgary",
      "Elev ASL (m)": 1045,
      January_2_5: -30,
      January_1: -32,
      July_2_5_Tdb: 28,
      July_2_5_Twb: 17,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 21,
      HDD18: 5000,
      HDD15: 4050,
      HDD18_2021_2050: 4500,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 29,
      "Rain_1_day_1/50mm": 103,
      "Rain_1_day_1/50mm_New": 129,
      Rain_Annual_mm: 325,
      Rain_Annual_mm_New: 390,
      Moisture_Index_New: 0.4,
      Precip_Annual_mm: 425,
      Precip_Annual_mm_New: 480,
      "Driving_Rain_Wind_Pa_1/5": 220,
      "Driving_Rain_Wind_Pa_1/5_New": 240,
      "Snow_kPa_1/50_Ss": 1.1,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 1.6,
      "Snow_kPa_1/1000_Sr": 0.2,
      "Wind_Hourly_kPa_1/10": 0.38,
      "Wind_Hourly_kPa_1/10_New": 0.4,
      "Wind_Hourly_kPa_1/50": 0.48,
      "Wind_Hourly_kPa_1/50_New": 0.5,
      "Wind_Hourly_kPa_1/500_New": 0.74,
      Winter_Tdb_Avg: -9,
      Winter_Windspeed_Avg: 3.4,
      Summer_Tdb_Avg: 21,
      Summer_Twb_Avg: 21,
      Summer_RH_1500_LST: null,
    },
    Edmonton: {
      Location: "Edmonton",
      "Elev ASL (m)": 645,
      January_2_5: -30,
      January_1: -33,
      July_2_5_Tdb: 28,
      July_2_5_Twb: 19,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 23,
      HDD18: 5120,
      HDD15: 4160,
      HDD18_2021_2050: 4620,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 29,
      "Rain_1_day_1/50mm": 97,
      "Rain_1_day_1/50mm_New": 123,
      Rain_Annual_mm: 360,
      Rain_Annual_mm_New: 430,
      Moisture_Index_New: 0.5,
      Precip_Annual_mm: 460,
      Precip_Annual_mm_New: 520,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 170,
      "Snow_kPa_1/50_Ss": 1.7,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 2.5,
      "Snow_kPa_1/1000_Sr": 0.2,
      "Wind_Hourly_kPa_1/10": 0.36,
      "Wind_Hourly_kPa_1/10_New": 0.38,
      "Wind_Hourly_kPa_1/50": 0.45,
      "Wind_Hourly_kPa_1/50_New": 0.47,
      "Wind_Hourly_kPa_1/500_New": 0.68,
      Winter_Tdb_Avg: -10,
      Winter_Windspeed_Avg: 3,
      Summer_Tdb_Avg: 23,
      Summer_Twb_Avg: 23,
      Summer_RH_1500_LST: null,
    },
    "Fort McMurray": {
      Location: "Fort McMurray",
      "Elev ASL (m)": 255,
      January_2_5: -38,
      January_1: -40,
      July_2_5_Tdb: 28,
      July_2_5_Twb: 19,
      Future_July_2_5_Tdb: 33,
      Future_July_2_5_Twb: 23,
      HDD18: 6250,
      HDD15: 5230,
      HDD18_2021_2050: 5750,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 13,
      Rain_15_min_mm_New: 17,
      "Rain_1_day_1/50mm": 86,
      "Rain_1_day_1/50mm_New": 111,
      Rain_Annual_mm: 340,
      Rain_Annual_mm_New: 410,
      Moisture_Index_New: 0.5,
      Precip_Annual_mm: 460,
      Precip_Annual_mm_New: 520,
      "Driving_Rain_Wind_Pa_1/5": 60,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 1.5,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 2.1,
      "Snow_kPa_1/1000_Sr": 0.1,
      "Wind_Hourly_kPa_1/10": 0.28,
      "Wind_Hourly_kPa_1/10_New": 0.29,
      "Wind_Hourly_kPa_1/50": 0.35,
      "Wind_Hourly_kPa_1/50_New": 0.37,
      "Wind_Hourly_kPa_1/500_New": 0.53,
      Winter_Tdb_Avg: -12,
      Winter_Windspeed_Avg: 3.2,
      Summer_Tdb_Avg: 23,
      Summer_Twb_Avg: 23,
      Summer_RH_1500_LST: null,
    },
  },
  SK: {
    Regina: {
      Location: "Regina",
      "Elev ASL (m)": 575,
      January_2_5: -34,
      January_1: -36,
      July_2_5_Tdb: 31,
      July_2_5_Twb: 21,
      Future_July_2_5_Tdb: 36,
      Future_July_2_5_Twb: 25,
      HDD18: 5600,
      HDD15: 4700,
      HDD18_2021_2050: 5100,
      CDD24: 28,
      CDD24_2021_2050: 37,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 28,
      Rain_15_min_mm_New: 37,
      "Rain_1_day_1/50mm": 103,
      "Rain_1_day_1/50mm_New": 134,
      Rain_Annual_mm: 300,
      Rain_Annual_mm_New: 350,
      Moisture_Index_New: 0.4,
      Precip_Annual_mm: 365,
      Precip_Annual_mm_New: 410,
      "Driving_Rain_Wind_Pa_1/5": 200,
      "Driving_Rain_Wind_Pa_1/5_New": 210,
      "Snow_kPa_1/50_Ss": 1.4,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 2.1,
      "Snow_kPa_1/1000_Sr": 0.2,
      "Wind_Hourly_kPa_1/10": 0.39,
      "Wind_Hourly_kPa_1/10_New": 0.41,
      "Wind_Hourly_kPa_1/50": 0.49,
      "Wind_Hourly_kPa_1/50_New": 0.51,
      "Wind_Hourly_kPa_1/500_New": 0.75,
      Winter_Tdb_Avg: -11,
      Winter_Windspeed_Avg: 5.2,
      Summer_Tdb_Avg: 25,
      Summer_Twb_Avg: 25,
      Summer_RH_1500_LST: null,
    },
    Saskatoon: {
      Location: "Saskatoon",
      "Elev ASL (m)": 500,
      January_2_5: -35,
      January_1: -37,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 21,
      Future_July_2_5_Tdb: 35,
      Future_July_2_5_Twb: 25,
      HDD18: 5700,
      HDD15: 4800,
      HDD18_2021_2050: 5200,
      CDD24: 23,
      CDD24_2021_2050: 30,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 30,
      "Rain_1_day_1/50mm": 86,
      "Rain_1_day_1/50mm_New": 112,
      Rain_Annual_mm: 265,
      Rain_Annual_mm_New: 310,
      Moisture_Index_New: 0.4,
      Precip_Annual_mm: 350,
      Precip_Annual_mm_New: 390,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 170,
      "Snow_kPa_1/50_Ss": 1.7,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 2.5,
      "Snow_kPa_1/1000_Sr": 0.2,
      "Wind_Hourly_kPa_1/10": 0.36,
      "Wind_Hourly_kPa_1/10_New": 0.38,
      "Wind_Hourly_kPa_1/50": 0.46,
      "Wind_Hourly_kPa_1/50_New": 0.48,
      "Wind_Hourly_kPa_1/500_New": 0.72,
      Winter_Tdb_Avg: -11,
      Winter_Windspeed_Avg: 4.4,
      Summer_Tdb_Avg: 25,
      Summer_Twb_Avg: 25,
      Summer_RH_1500_LST: null,
    },
  },
  MB: {
    Winnipeg: {
      Location: "Winnipeg",
      "Elev ASL (m)": 235,
      January_2_5: -33,
      January_1: -35,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 26,
      HDD18: 5670,
      HDD15: 4770,
      HDD18_2021_2050: 5170,
      CDD24: 28,
      CDD24_2021_2050: 37,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 28,
      Rain_15_min_mm_New: 37,
      "Rain_1_day_1/50mm": 108,
      "Rain_1_day_1/50mm_New": 142,
      Rain_Annual_mm: 415,
      Rain_Annual_mm_New: 490,
      Moisture_Index_New: 0.6,
      Precip_Annual_mm: 500,
      Precip_Annual_mm_New: 560,
      "Driving_Rain_Wind_Pa_1/5": 180,
      "Driving_Rain_Wind_Pa_1/5_New": 200,
      "Snow_kPa_1/50_Ss": 1.9,
      "Snow_kPa_1/50_Sr": 0.2,
      "Snow_kPa_1/1000_Ss": 2.8,
      "Snow_kPa_1/1000_Sr": 0.3,
      "Wind_Hourly_kPa_1/10": 0.36,
      "Wind_Hourly_kPa_1/10_New": 0.38,
      "Wind_Hourly_kPa_1/50": 0.45,
      "Wind_Hourly_kPa_1/50_New": 0.47,
      "Wind_Hourly_kPa_1/500_New": 0.68,
      Winter_Tdb_Avg: -11,
      Winter_Windspeed_Avg: 5.2,
      Summer_Tdb_Avg: 26,
      Summer_Twb_Avg: 26,
      Summer_RH_1500_LST: null,
    },
    Brandon: {
      Location: "Brandon",
      "Elev ASL (m)": 395,
      January_2_5: -33,
      January_1: -35,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 22,
      Future_July_2_5_Tdb: 35,
      Future_July_2_5_Twb: 25,
      HDD18: 5760,
      HDD15: 4850,
      HDD18_2021_2050: 5260,
      CDD24: 28,
      CDD24_2021_2050: 37,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 28,
      Rain_15_min_mm_New: 37,
      "Rain_1_day_1/50mm": 108,
      "Rain_1_day_1/50mm_New": 141,
      Rain_Annual_mm: 375,
      Rain_Annual_mm_New: 440,
      Moisture_Index_New: 0.6,
      Precip_Annual_mm: 460,
      Precip_Annual_mm_New: 520,
      "Driving_Rain_Wind_Pa_1/5": 180,
      "Driving_Rain_Wind_Pa_1/5_New": 200,
      "Snow_kPa_1/50_Ss": 2.1,
      "Snow_kPa_1/50_Sr": 0.2,
      "Snow_kPa_1/1000_Ss": 3,
      "Snow_kPa_1/1000_Sr": 0.3,
      "Wind_Hourly_kPa_1/10": 0.39,
      "Wind_Hourly_kPa_1/10_New": 0.41,
      "Wind_Hourly_kPa_1/50": 0.49,
      "Wind_Hourly_kPa_1/50_New": 0.51,
      "Wind_Hourly_kPa_1/500_New": 0.75,
      Winter_Tdb_Avg: -11,
      Winter_Windspeed_Avg: 4.7,
      Summer_Tdb_Avg: 25,
      Summer_Twb_Avg: 25,
      Summer_RH_1500_LST: null,
    },
  },
  ON: {
    Toronto: {
      Location: "Toronto (City Hall)",
      "Elev ASL (m)": 90,
      January_2_5: -18,
      January_1: -20,
      July_2_5_Tdb: 31,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 35,
      Future_July_2_5_Twb: 26,
      HDD18: 3520,
      HDD15: 2760,
      HDD18_2021_2050: 3020,
      CDD24: 362,
      CDD24_2021_2050: 459,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 25,
      Rain_15_min_mm_New: 32,
      "Rain_1_day_1/50mm": 97,
      "Rain_1_day_1/50mm_New": 124,
      Rain_Annual_mm: 720,
      Rain_Annual_mm_New: 830,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 820,
      Precip_Annual_mm_New: 900,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 170,
      "Snow_kPa_1/50_Ss": 0.9,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 1.3,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.34,
      "Wind_Hourly_kPa_1/10_New": 0.37,
      "Wind_Hourly_kPa_1/50": 0.44,
      "Wind_Hourly_kPa_1/50_New": 0.48,
      "Wind_Hourly_kPa_1/500_New": 0.73,
      Winter_Tdb_Avg: -5,
      Winter_Windspeed_Avg: 4,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    Ottawa: {
      Location: "Ottawa (City Hall)",
      "Elev ASL (m)": 70,
      January_2_5: -25,
      January_1: -27,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 26,
      HDD18: 4440,
      HDD15: 3650,
      HDD18_2021_2050: 3940,
      CDD24: 276,
      CDD24_2021_2050: 389.3,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 30,
      "Rain_1_day_1/50mm": 86,
      "Rain_1_day_1/50mm_New": 111,
      Rain_Annual_mm: 750,
      Rain_Annual_mm_New: 890,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 900,
      Precip_Annual_mm_New: 1000,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 2.4,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 3.4,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.32,
      "Wind_Hourly_kPa_1/10_New": 0.35,
      "Wind_Hourly_kPa_1/50": 0.41,
      "Wind_Hourly_kPa_1/50_New": 0.45,
      "Wind_Hourly_kPa_1/500_New": 0.67,
      Winter_Tdb_Avg: -8,
      Winter_Windspeed_Avg: 3.5,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    Milton: {
      Location: "Milton",
      "Elev ASL (m)": 200,
      January_2_5: -18,
      January_1: -20,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 34.8,
      Future_July_2_5_Twb: 26,
      HDD18: 3920,
      HDD15: 3120,
      HDD18_2021_2050: 3420,
      CDD24: 410,
      CDD24_2021_2050: 410,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 25,
      Rain_15_min_mm_New: 32,
      "Rain_1_day_1/50mm": 125,
      "Rain_1_day_1/50mm_New": 160,
      Rain_Annual_mm: 750,
      Rain_Annual_mm_New: 870,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 850,
      Precip_Annual_mm_New: 930,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 170,
      "Snow_kPa_1/50_Ss": 1.3,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 1.9,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.34,
      "Wind_Hourly_kPa_1/10_New": 0.37,
      "Wind_Hourly_kPa_1/50": 0.43,
      "Wind_Hourly_kPa_1/50_New": 0.47,
      "Wind_Hourly_kPa_1/500_New": 0.69,
      Winter_Tdb_Avg: -6,
      Winter_Windspeed_Avg: 4.5,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    London: {
      Location: "London",
      "Elev ASL (m)": 245,
      January_2_5: -18,
      January_1: -20,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 24,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 27,
      HDD18: 3900,
      HDD15: 3110,
      HDD18_2021_2050: 3400,
      CDD24: 318,
      CDD24_2021_2050: 493.3,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 28,
      Rain_15_min_mm_New: 36,
      "Rain_1_day_1/50mm": 103,
      "Rain_1_day_1/50mm_New": 131,
      Rain_Annual_mm: 825,
      Rain_Annual_mm_New: 940,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 975,
      Precip_Annual_mm_New: 1060,
      "Driving_Rain_Wind_Pa_1/5": 180,
      "Driving_Rain_Wind_Pa_1/5_New": 200,
      "Snow_kPa_1/50_Ss": 1.9,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 2.8,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.37,
      "Wind_Hourly_kPa_1/10_New": 0.41,
      "Wind_Hourly_kPa_1/50": 0.47,
      "Wind_Hourly_kPa_1/50_New": 0.52,
      "Wind_Hourly_kPa_1/500_New": 0.76,
      Winter_Tdb_Avg: -6,
      Winter_Windspeed_Avg: 4.4,
      Summer_Tdb_Avg: 19.05,
      Summer_Twb_Avg: 13.82,
      Summer_RH_1500_LST: 57.33,
    },
    Hamilton: {
      Location: "Hamilton",
      "Elev ASL (m)": 90,
      January_2_5: -17,
      January_1: -19,
      July_2_5_Tdb: 31,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 35,
      Future_July_2_5_Twb: 26,
      HDD18: 3460,
      HDD15: 2700,
      HDD18_2021_2050: 2960,
      CDD24: 336,
      CDD24_2021_2050: 465,
      Over_30Tdb_2021_2050: 37.2,
      Extreme_Hot_Tdb_1991_2020: 37.2,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 29,
      "Rain_1_day_1/50mm": 108,
      "Rain_1_day_1/50mm_New": 138,
      Rain_Annual_mm: 810,
      Rain_Annual_mm_New: 930,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 875,
      Precip_Annual_mm_New: 960,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 170,
      "Snow_kPa_1/50_Ss": 1.1,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 1.6,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.36,
      "Wind_Hourly_kPa_1/10_New": 0.4,
      "Wind_Hourly_kPa_1/50": 0.46,
      "Wind_Hourly_kPa_1/50_New": 0.51,
      "Wind_Hourly_kPa_1/500_New": 0.75,
      Winter_Tdb_Avg: -6,
      Winter_Windspeed_Avg: 3.5,
      Summer_Tdb_Avg: 18.9,
      Summer_Twb_Avg: 13.93,
      Summer_RH_1500_LST: 59.25,
    },
    Windsor: {
      Location: "Windsor",
      "Elev ASL (m)": 185,
      January_2_5: -16,
      January_1: -18,
      July_2_5_Tdb: 32,
      July_2_5_Twb: 24,
      Future_July_2_5_Tdb: 35,
      Future_July_2_5_Twb: 27,
      HDD18: 3400,
      HDD15: 2650,
      HDD18_2021_2050: 2900,
      CDD24: 448,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 28,
      Rain_15_min_mm_New: 35,
      "Rain_1_day_1/50mm": 103,
      "Rain_1_day_1/50mm_New": 130,
      Rain_Annual_mm: 800,
      Rain_Annual_mm_New: 910,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 900,
      Precip_Annual_mm_New: 990,
      "Driving_Rain_Wind_Pa_1/5": 180,
      "Driving_Rain_Wind_Pa_1/5_New": 190,
      "Snow_kPa_1/50_Ss": 0.8,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 1.2,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.37,
      "Wind_Hourly_kPa_1/10_New": 0.41,
      "Wind_Hourly_kPa_1/50": 0.47,
      "Wind_Hourly_kPa_1/50_New": 0.52,
      "Wind_Hourly_kPa_1/500_New": 0.76,
      Winter_Tdb_Avg: -5,
      Winter_Windspeed_Avg: 5,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    "Thunder Bay": {
      Location: "Thunder Bay",
      "Elev ASL (m)": 210,
      January_2_5: -31,
      January_1: -33,
      July_2_5_Tdb: 29,
      July_2_5_Twb: 21,
      Future_July_2_5_Tdb: 33,
      Future_July_2_5_Twb: 24,
      HDD18: 5650,
      HDD15: 4710,
      HDD18_2021_2050: 5150,
      CDD24: 100,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 30,
      "Rain_1_day_1/50mm": 108,
      "Rain_1_day_1/50mm_New": 139,
      Rain_Annual_mm: 560,
      Rain_Annual_mm_New: 690,
      Moisture_Index_New: 0.8,
      Precip_Annual_mm: 710,
      Precip_Annual_mm_New: 790,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 180,
      "Snow_kPa_1/50_Ss": 2.9,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 4.2,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.29,
      "Wind_Hourly_kPa_1/10_New": 0.32,
      "Wind_Hourly_kPa_1/50": 0.39,
      "Wind_Hourly_kPa_1/50_New": 0.43,
      "Wind_Hourly_kPa_1/500_New": 0.67,
      Winter_Tdb_Avg: -10,
      Winter_Windspeed_Avg: 3.3,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    Sudbury: {
      Location: "Sudbury",
      "Elev ASL (m)": 275,
      January_2_5: -28,
      January_1: -30,
      July_2_5_Tdb: 29,
      July_2_5_Twb: 21,
      Future_July_2_5_Tdb: 33,
      Future_July_2_5_Twb: 24,
      HDD18: 5180,
      HDD15: 4260,
      HDD18_2021_2050: 4680,
      CDD24: 145,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 25,
      Rain_15_min_mm_New: 32,
      "Rain_1_day_1/50mm": 97,
      "Rain_1_day_1/50mm_New": 125,
      Rain_Annual_mm: 650,
      Rain_Annual_mm_New: 770,
      Moisture_Index_New: 0.8,
      Precip_Annual_mm: 875,
      Precip_Annual_mm_New: 950,
      "Driving_Rain_Wind_Pa_1/5": 200,
      "Driving_Rain_Wind_Pa_1/5_New": 210,
      "Snow_kPa_1/50_Ss": 2.5,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 3.6,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.36,
      "Wind_Hourly_kPa_1/10_New": 0.4,
      "Wind_Hourly_kPa_1/50": 0.46,
      "Wind_Hourly_kPa_1/50_New": 0.51,
      "Wind_Hourly_kPa_1/500_New": 0.75,
      Winter_Tdb_Avg: -9,
      Winter_Windspeed_Avg: 4.5,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    Kingston: {
      Location: "Kingston",
      "Elev ASL (m)": 80,
      January_2_5: -22,
      January_1: -24,
      July_2_5_Tdb: 28,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 32,
      Future_July_2_5_Twb: 26,
      HDD18: 4000,
      HDD15: 3200,
      HDD18_2021_2050: 3500,
      CDD24: 230,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 29,
      "Rain_1_day_1/50mm": 108,
      "Rain_1_day_1/50mm_New": 138,
      Rain_Annual_mm: 780,
      Rain_Annual_mm_New: 890,
      Moisture_Index_New: 1,
      Precip_Annual_mm: 950,
      Precip_Annual_mm_New: 1020,
      "Driving_Rain_Wind_Pa_1/5": 180,
      "Driving_Rain_Wind_Pa_1/5_New": 190,
      "Snow_kPa_1/50_Ss": 2.1,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 3,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.37,
      "Wind_Hourly_kPa_1/10_New": 0.41,
      "Wind_Hourly_kPa_1/50": 0.47,
      "Wind_Hourly_kPa_1/50_New": 0.52,
      "Wind_Hourly_kPa_1/500_New": 0.76,
      Winter_Tdb_Avg: -7,
      Winter_Windspeed_Avg: 4.3,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    Alexandria: {
      Location: "Alexandria",
      "Elev ASL (m)": 80,
      January_2_5: -24,
      January_1: -26,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 26,
      HDD18: 4600,
      HDD15: 3740,
      HDD18_2021_2050: 4100,
      CDD24: 196,
      CDD24_2021_2050: 315,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 25,
      Rain_15_min_mm_New: 32,
      "Rain_1_day_1/50mm": 103,
      "Rain_1_day_1/50mm_New": 133,
      Rain_Annual_mm: 800,
      Rain_Annual_mm_New: 950,
      Moisture_Index_New: 1,
      Precip_Annual_mm: 975,
      Precip_Annual_mm_New: 1090,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 2.4,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 3.4,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.31,
      "Wind_Hourly_kPa_1/10_New": 0.34,
      "Wind_Hourly_kPa_1/50": 0.4,
      "Wind_Hourly_kPa_1/50_New": 0.44,
      "Wind_Hourly_kPa_1/500_New": 0.67,
      Winter_Tdb_Avg: -8,
      Winter_Windspeed_Avg: 3.8,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
    Attawapiskat: {
      Location: "Attawapiskat",
      "Elev ASL (m)": 10,
      January_2_5: -37,
      January_1: -39,
      July_2_5_Tdb: 28,
      July_2_5_Twb: 21,
      Future_July_2_5_Tdb: 32,
      Future_July_2_5_Twb: 24,
      HDD18: 7100,
      HDD15: 6120,
      HDD18_2021_2050: 6600,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 18,
      Rain_15_min_mm_New: 25,
      "Rain_1_day_1/50mm": 81,
      "Rain_1_day_1/50mm_New": 112,
      Rain_Annual_mm: 450,
      Rain_Annual_mm_New: 580,
      Moisture_Index_New: 0.8,
      Precip_Annual_mm: 650,
      Precip_Annual_mm_New: 750,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": 170,
      "Snow_kPa_1/50_Ss": 2.8,
      "Snow_kPa_1/50_Sr": 0.3,
      "Snow_kPa_1/1000_Ss": 3.9,
      "Snow_kPa_1/1000_Sr": 0.4,
      "Wind_Hourly_kPa_1/10": 0.3,
      "Wind_Hourly_kPa_1/10_New": 0.33,
      "Wind_Hourly_kPa_1/50": 0.41,
      "Wind_Hourly_kPa_1/50_New": 0.45,
      "Wind_Hourly_kPa_1/500_New": 0.68,
      Winter_Tdb_Avg: -13,
      Winter_Windspeed_Avg: 4,
      Summer_Tdb_Avg: 20.5,
      Summer_Twb_Avg: 15.11,
      Summer_RH_1500_LST: null,
    },
  },
  QC: {
    Montreal: {
      Location: "Montréal (City Hall)",
      "Elev ASL (m)": 20,
      January_2_5: -23,
      January_1: -26,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 26,
      HDD18: 4200,
      HDD15: 3410,
      HDD18_2021_2050: 3700,
      CDD24: 290.7,
      CDD24_2021_2050: 493.1,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 30,
      "Rain_1_day_1/50mm": 96,
      "Rain_1_day_1/50mm_New": 125,
      Rain_Annual_mm: 830,
      Rain_Annual_mm_New: 990,
      Moisture_Index_New: 1,
      Precip_Annual_mm: 1025,
      Precip_Annual_mm_New: 1160,
      "Driving_Rain_Wind_Pa_1/5": 180,
      "Driving_Rain_Wind_Pa_1/5_New": 190,
      "Snow_kPa_1/50_Ss": 2.6,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 4,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.34,
      "Wind_Hourly_kPa_1/10_New": 0.36,
      "Wind_Hourly_kPa_1/50": 0.44,
      "Wind_Hourly_kPa_1/50_New": 0.46,
      "Wind_Hourly_kPa_1/500_New": 0.69,
      Winter_Tdb_Avg: -8,
      Winter_Windspeed_Avg: 3.5,
      Summer_Tdb_Avg: 26,
      Summer_Twb_Avg: 26,
      Summer_RH_1500_LST: 55.85,
    },
    "Quebec City": {
      Location: "Québec",
      "Elev ASL (m)": 120,
      January_2_5: -25,
      January_1: -28,
      July_2_5_Tdb: 28,
      July_2_5_Twb: 22,
      Future_July_2_5_Tdb: 32,
      Future_July_2_5_Twb: 25,
      HDD18: 5080,
      HDD15: 4160,
      HDD18_2021_2050: 4580,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 20,
      Rain_15_min_mm_New: 26,
      "Rain_1_day_1/50mm": 107,
      "Rain_1_day_1/50mm_New": 140,
      Rain_Annual_mm: 925,
      Rain_Annual_mm_New: 1110,
      Moisture_Index_New: 1.1,
      Precip_Annual_mm: 1210,
      Precip_Annual_mm_New: 1350,
      "Driving_Rain_Wind_Pa_1/5": 200,
      "Driving_Rain_Wind_Pa_1/5_New": 210,
      "Snow_kPa_1/50_Ss": 3.6,
      "Snow_kPa_1/50_Sr": 0.6,
      "Snow_kPa_1/1000_Ss": 5,
      "Snow_kPa_1/1000_Sr": 0.8,
      "Wind_Hourly_kPa_1/10": 0.32,
      "Wind_Hourly_kPa_1/10_New": 0.34,
      "Wind_Hourly_kPa_1/50": 0.41,
      "Wind_Hourly_kPa_1/50_New": 0.43,
      "Wind_Hourly_kPa_1/500_New": 0.64,
      Winter_Tdb_Avg: -8,
      Winter_Windspeed_Avg: 3.5,
      Summer_Tdb_Avg: 25,
      Summer_Twb_Avg: 25,
      Summer_RH_1500_LST: null,
    },
    Sherbrooke: {
      Location: "Sherbrooke",
      "Elev ASL (m)": 185,
      January_2_5: -28,
      January_1: -30,
      July_2_5_Tdb: 29,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 33,
      Future_July_2_5_Twb: 26,
      HDD18: 4700,
      HDD15: 3790,
      HDD18_2021_2050: 4200,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 29,
      "Rain_1_day_1/50mm": 96,
      "Rain_1_day_1/50mm_New": 123,
      Rain_Annual_mm: 900,
      Rain_Annual_mm_New: 1060,
      Moisture_Index_New: 1.1,
      Precip_Annual_mm: 1100,
      Precip_Annual_mm_New: 1220,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 2.2,
      "Snow_kPa_1/50_Sr": 0.6,
      "Snow_kPa_1/1000_Ss": 3.2,
      "Snow_kPa_1/1000_Sr": 0.9,
      "Wind_Hourly_kPa_1/10": 0.25,
      "Wind_Hourly_kPa_1/10_New": 0.26,
      "Wind_Hourly_kPa_1/50": 0.32,
      "Wind_Hourly_kPa_1/50_New": 0.34,
      "Wind_Hourly_kPa_1/500_New": 0.5,
      Winter_Tdb_Avg: -8,
      Winter_Windspeed_Avg: 3.1,
      Summer_Tdb_Avg: 25,
      Summer_Twb_Avg: 25,
      Summer_RH_1500_LST: null,
    },
    "Havre-Saint-Pierre": {
      Location: "Havre-Saint-Pierre",
      "Elev ASL (m)": 5,
      January_2_5: -27,
      January_1: -29,
      July_2_5_Tdb: 22,
      July_2_5_Twb: 18,
      Future_July_2_5_Tdb: 26,
      Future_July_2_5_Twb: 22,
      HDD18: 6100,
      HDD15: 5150,
      HDD18_2021_2050: 5600,
      CDD24: 666,
      CDD24_2021_2050: 666,
      Over_30Tdb_2021_2050: 666,
      Extreme_Hot_Tdb_1991_2020: 666,
      Rain_15_min_mm: 15,
      Rain_15_min_mm_New: 20,
      "Rain_1_day_1/50mm": 96,
      "Rain_1_day_1/50mm_New": 126,
      Rain_Annual_mm: 780,
      Rain_Annual_mm_New: 960,
      Moisture_Index_New: 1.2,
      Precip_Annual_mm: 1125,
      Precip_Annual_mm_New: 1250,
      "Driving_Rain_Wind_Pa_1/5": 300,
      "Driving_Rain_Wind_Pa_1/5_New": 340,
      "Snow_kPa_1/50_Ss": 4.1,
      "Snow_kPa_1/50_Sr": 0.6,
      "Snow_kPa_1/1000_Ss": 5.9,
      "Snow_kPa_1/1000_Sr": 0.9,
      "Wind_Hourly_kPa_1/10": 0.49,
      "Wind_Hourly_kPa_1/10_New": 0.51,
      "Wind_Hourly_kPa_1/50": 0.63,
      "Wind_Hourly_kPa_1/50_New": 0.66,
      "Wind_Hourly_kPa_1/500_New": 0.95,
      Winter_Tdb_Avg: -9,
      Winter_Windspeed_Avg: 5,
      Summer_Tdb_Avg: 22,
      Summer_Twb_Avg: 22,
      Summer_RH_1500_LST: null,
    },
    "Harrington Harbour": {
      Location: "Harrington Harbour",
      "Elev ASL (m)": 30,
      January_2_5: -27,
      January_1: -29,
      July_2_5_Tdb: 19,
      July_2_5_Twb: 16,
      Future_July_2_5_Tdb: 23,
      Future_July_2_5_Twb: 20,
      HDD18: 6150,
      HDD15: 5200,
      HDD18_2021_2050: 5650,
      CDD24: 666,
      CDD24_2021_2050: 666,
      Over_30Tdb_2021_2050: 666,
      Extreme_Hot_Tdb_1991_2020: 666,
      Rain_15_min_mm: 15,
      Rain_15_min_mm_New: 20,
      "Rain_1_day_1/50mm": 96,
      "Rain_1_day_1/50mm_New": 127,
      Rain_Annual_mm: 900,
      Rain_Annual_mm_New: 1120,
      Moisture_Index_New: 1.4,
      Precip_Annual_mm: 1150,
      Precip_Annual_mm_New: 1280,
      "Driving_Rain_Wind_Pa_1/5": 300,
      "Driving_Rain_Wind_Pa_1/5_New": 330,
      "Snow_kPa_1/50_Ss": 4.9,
      "Snow_kPa_1/50_Sr": 0.6,
      "Snow_kPa_1/1000_Ss": 7,
      "Snow_kPa_1/1000_Sr": 0.9,
      "Wind_Hourly_kPa_1/10": 0.56,
      "Wind_Hourly_kPa_1/10_New": 0.59,
      "Wind_Hourly_kPa_1/50": 0.72,
      "Wind_Hourly_kPa_1/50_New": 0.76,
      "Wind_Hourly_kPa_1/500_New": 1.03,
      Winter_Tdb_Avg: -9,
      Winter_Windspeed_Avg: 5,
      Summer_Tdb_Avg: 20,
      Summer_Twb_Avg: 20,
      Summer_RH_1500_LST: null,
    },
    Hemmingford: {
      Location: "Hemmingford",
      "Elev ASL (m)": 75,
      January_2_5: -24,
      January_1: -26,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 26,
      HDD18: 4380,
      HDD15: 3570,
      HDD18_2021_2050: 3880,
      CDD24: 266.6,
      CDD24_2021_2050: 463,
      Over_30Tdb_2021_2050: 666,
      Extreme_Hot_Tdb_1991_2020: 666,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 29,
      "Rain_1_day_1/50mm": 91,
      "Rain_1_day_1/50mm_New": 116,
      Rain_Annual_mm: 770,
      Rain_Annual_mm_New: 920,
      Moisture_Index_New: 1,
      Precip_Annual_mm: 1025,
      Precip_Annual_mm_New: 1160,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 2.4,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 3.6,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.31,
      "Wind_Hourly_kPa_1/10_New": 0.33,
      "Wind_Hourly_kPa_1/50": 0.4,
      "Wind_Hourly_kPa_1/50_New": 0.42,
      "Wind_Hourly_kPa_1/500_New": 0.64,
      Winter_Tdb_Avg: -8,
      Winter_Windspeed_Avg: 3,
      Summer_Tdb_Avg: 26,
      Summer_Twb_Avg: 26,
      Summer_RH_1500_LST: null,
    },
    Hull: {
      Location: "Hull",
      "Elev ASL (m)": 65,
      January_2_5: -25,
      January_1: -28,
      July_2_5_Tdb: 30,
      July_2_5_Twb: 23,
      Future_July_2_5_Tdb: 34,
      Future_July_2_5_Twb: 26,
      HDD18: 4550,
      HDD15: 3650,
      HDD18_2021_2050: 4050,
      CDD24: 666,
      CDD24_2021_2050: 666,
      Over_30Tdb_2021_2050: 666,
      Extreme_Hot_Tdb_1991_2020: 666,
      Rain_15_min_mm: 23,
      Rain_15_min_mm_New: 30,
      "Rain_1_day_1/50mm": 91,
      "Rain_1_day_1/50mm_New": 117,
      Rain_Annual_mm: 730,
      Rain_Annual_mm_New: 870,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 900,
      Precip_Annual_mm_New: 1000,
      "Driving_Rain_Wind_Pa_1/5": 160,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 2.4,
      "Snow_kPa_1/50_Sr": 0.4,
      "Snow_kPa_1/1000_Ss": 3.5,
      "Snow_kPa_1/1000_Sr": 0.6,
      "Wind_Hourly_kPa_1/10": 0.32,
      "Wind_Hourly_kPa_1/10_New": 0.34,
      "Wind_Hourly_kPa_1/50": 0.41,
      "Wind_Hourly_kPa_1/50_New": 0.43,
      "Wind_Hourly_kPa_1/500_New": 0.64,
      Winter_Tdb_Avg: -8,
      Winter_Windspeed_Avg: 3.2,
      Summer_Tdb_Avg: 26,
      Summer_Twb_Avg: 26,
      Summer_RH_1500_LST: null,
    },
  },
  NU: {
    Iqaluit: {
      Location: "Iqaluit",
      "Elev ASL (m)": 45,
      January_2_5: -40,
      January_1: -41,
      July_2_5_Tdb: 13,
      July_2_5_Twb: 8,
      Future_July_2_5_Tdb: 18,
      Future_July_2_5_Twb: 12,
      HDD18: 13030,
      HDD15: 11860,
      HDD18_2021_2050: 12530,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 4,
      Rain_15_min_mm_New: null,
      "Rain_1_day_1/50mm": 22,
      "Rain_1_day_1/50mm_New": 32,
      Rain_Annual_mm: 30,
      Rain_Annual_mm_New: null,
      Moisture_Index_New: 1,
      Precip_Annual_mm: 0,
      Precip_Annual_mm_New: 40,
      "Driving_Rain_Wind_Pa_1/5": null,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 2.65,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 4,
      "Snow_kPa_1/1000_Sr": 0.2,
      "Wind_Hourly_kPa_1/10": 0.59,
      "Wind_Hourly_kPa_1/10_New": 0.62,
      "Wind_Hourly_kPa_1/50": 0.79,
      "Wind_Hourly_kPa_1/50_New": null,
      "Wind_Hourly_kPa_1/500_New": 1.06,
      Winter_Tdb_Avg: -22,
      Winter_Windspeed_Avg: 4.3,
      Summer_Tdb_Avg: 12,
      Summer_Twb_Avg: 12,
      Summer_RH_1500_LST: null,
    },
    Resolute: {
      Location: "Resolute",
      "Elev ASL (m)": 25,
      January_2_5: -42,
      January_1: -43,
      July_2_5_Tdb: 11,
      July_2_5_Twb: 9,
      Future_July_2_5_Tdb: 16,
      Future_July_2_5_Twb: 13,
      HDD18: 12360,
      HDD15: 11210,
      HDD18_2021_2050: 11860,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 5,
      Rain_15_min_mm_New: null,
      "Rain_1_day_1/50mm": 27,
      "Rain_1_day_1/50mm_New": 42,
      Rain_Annual_mm: 80,
      Rain_Annual_mm_New: null,
      Moisture_Index_New: 0.9,
      Precip_Annual_mm: 80,
      Precip_Annual_mm_New: null,
      "Driving_Rain_Wind_Pa_1/5": 20,
      "Driving_Rain_Wind_Pa_1/5_New": null,
      "Snow_kPa_1/50_Ss": 2.0,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 3.2,
      "Snow_kPa_1/1000_Sr": 0.2,
      "Wind_Hourly_kPa_1/10": 0.46,
      "Wind_Hourly_kPa_1/10_New": 0.48,
      "Wind_Hourly_kPa_1/50": 0.62,
      "Wind_Hourly_kPa_1/50_New": null,
      "Wind_Hourly_kPa_1/500_New": 0.84,
      Winter_Tdb_Avg: -19,
      Winter_Windspeed_Avg: 6.1,
      Summer_Tdb_Avg: 13,
      Summer_Twb_Avg: 13,
      Summer_RH_1500_LST: null,
    },
  },
  NT: {
    Inuvik: {
      Location: "Inuvik",
      "Elev ASL (m)": 45,
      January_2_5: -43,
      January_1: -45,
      July_2_5_Tdb: 26,
      July_2_5_Twb: 17,
      Future_July_2_5_Tdb: 30,
      Future_July_2_5_Twb: 20,
      HDD18: 9600,
      HDD15: 8540,
      HDD18_2021_2050: 9100,
      CDD24: 0,
      CDD24_2021_2050: 0,
      Over_30Tdb_2021_2050: 0,
      Extreme_Hot_Tdb_1991_2020: 0,
      Rain_15_min_mm: 6,
      Rain_15_min_mm_New: 9,
      "Rain_1_day_1/50mm": 49,
      "Rain_1_day_1/50mm_New": 69,
      Rain_Annual_mm: 115,
      Rain_Annual_mm_New: 160,
      Moisture_Index_New: 0.7,
      Precip_Annual_mm: 425,
      Precip_Annual_mm_New: 530,
      "Driving_Rain_Wind_Pa_1/5": 60,
      "Driving_Rain_Wind_Pa_1/5_New": 80,
      "Snow_kPa_1/50_Ss": 3.1,
      "Snow_kPa_1/50_Sr": 0.1,
      "Snow_kPa_1/1000_Ss": 4.9,
      "Snow_kPa_1/1000_Sr": 0.2,
      "Wind_Hourly_kPa_1/10": 0.31,
      "Wind_Hourly_kPa_1/10_New": 0.33,
      "Wind_Hourly_kPa_1/50": 0.4,
      "Wind_Hourly_kPa_1/50_New": 0.42,
      "Wind_Hourly_kPa_1/500_New": 0.58,
      Winter_Tdb_Avg: -16,
      Winter_Windspeed_Avg: 2.6,
      Summer_Tdb_Avg: 20,
      Summer_Twb_Avg: 20,
      Summer_RH_1500_LST: null,
    },
  },
};
