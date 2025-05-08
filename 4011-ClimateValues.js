/**
 * 4011-ClimateValues.js
 * Stores climate data for Canadian locations, replacing the need for Excel import.
 * Data sourced from CANDA.csv (derived from various sources including climate normals).
 */

window.TEUI = window.TEUI || {};

// Structure: ProvinceAbbreviation -> CityName -> { DataKey: Value, ... }
window.TEUI.ClimateData = {
    "ON": {
        "Ailsa Craig": {
            "Location": "Ailsa Craig",
            "Elev ASL (m)": 230,
            "January_2_5": -17,
            "January_1": -19,
            "July_2_5_Tdb": 30,
            "July_2_5_Twb": 23,
            "Future_July_2_5_Tdb": 34,
            "Future_July_2_5_Twb": 26,
            "HDD18": 3840,
            "HDD15": 3050,
            "HDD18_2021_2050": 3340,
            "CDD24": 270, // Updated placeholder for "PRESENT CDD 2021 Degree-Days Above 24°C"
            "CDD24_2021_2050": 666, // Placeholder for "FUTURE CDD 2021-2050 EnsMean Degree-Days Above 24°C"
            "Over_30Tdb_2021_2050": 0, // Placeholder
            "Extreme_Hot_Tdb_1991_2020": 0, // Placeholder
            "Rain_15_min_mm": 25,
            "Rain_15_min_mm_New": 32,
            "Rain_1_day_1/50mm": 103,
            "Rain_1_day_1/50mm_New": 131,
            "Rain_Annual_mm": 800,
            "Rain_Annual_mm_New": 920,
            "Moisture_Index_New": 0.9,
            "Precip_Annual_mm": 950,
            "Precip_Annual_mm_New": 1030,
            "Driving_Rain_Wind_Pa_1/5": 180,
            "Driving_Rain_Wind_Pa_1/5_New": 200,
            "Snow_kPa_1/50_Ss": 2.2,
            "Snow_kPa_1/50_Sr": 0.4,
            "Snow_kPa_1/1000_Ss": 3.2,
            "Snow_kPa_1/1000_Sr": 0.6,
            "Wind_Hourly_kPa_1/10": 0.37,
            "Wind_Hourly_kPa_1/10_New": 0.41,
            "Wind_Hourly_kPa_1/50": 0.48,
            "Wind_Hourly_kPa_1/50_New": 0.53,
            "Wind_Hourly_kPa_1/500_New": 0.8,
            "Winter_Tdb_Avg": -6,
            "Winter_Windspeed_Avg": 4.5,
            "Summer_Tdb_Avg": 20.5, // Placeholder name for "Summer Average Dry °C"
            "Summer_Twb_Avg": 15.11, // Placeholder name for "Seasonal Average Wet °C"
            "Summer_RH_1500_LST": 55.85 // Example RH value, adjust as needed
        },
        "Ajax": {
            "Location": "Ajax",
            "Elev ASL (m)": 95,
            "January_2_5": -20,
            "January_1": -22,
            "July_2_5_Tdb": 30,
            "July_2_5_Twb": 23,
            "Future_July_2_5_Tdb": 34,
            "Future_July_2_5_Twb": 26,
            "HDD18": 3820,
            "HDD15": 3030,
            "HDD18_2021_2050": 3320,
            "CDD24": 251, // Updated placeholder
            "CDD24_2021_2050": 666, // Placeholder
            "Over_30Tdb_2021_2050": 0, // Placeholder
            "Extreme_Hot_Tdb_1991_2020": 0, // Placeholder
            "Rain_15_min_mm": 23,
            "Rain_15_min_mm_New": 30,
            "Rain_1_day_1/50mm": 92,
            "Rain_1_day_1/50mm_New": 118,
            "Rain_Annual_mm": 760,
            "Rain_Annual_mm_New": 880,
            "Moisture_Index_New": 0.9,
            "Precip_Annual_mm": 825,
            "Precip_Annual_mm_New": 900,
            "Driving_Rain_Wind_Pa_1/5": 160,
            "Driving_Rain_Wind_Pa_1/5_New": 170,
            "Snow_kPa_1/50_Ss": 1,
            "Snow_kPa_1/50_Sr": 0.4,
            "Snow_kPa_1/1000_Ss": 1.5,
            "Snow_kPa_1/1000_Sr": 0.6,
            "Wind_Hourly_kPa_1/10": 0.37,
            "Wind_Hourly_kPa_1/10_New": 0.41,
            "Wind_Hourly_kPa_1/50": 0.48,
            "Wind_Hourly_kPa_1/50_New": 0.53,
            "Wind_Hourly_kPa_1/500_New": 0.8,
            "Winter_Tdb_Avg": -6,
            "Winter_Windspeed_Avg": 4,
            "Summer_Tdb_Avg": 20.5, 
            "Summer_Twb_Avg": 15.11,
            "Summer_RH_1500_LST": 55.85
        },
        "Alexandria": {
            "Location": "Alexandria",
            "Elev ASL (m)": 80,
            "January_2_5": -24,
            "January_1": -26,
            "July_2_5_Tdb": 30,
            "July_2_5_Twb": 23,
            "Future_July_2_5_Tdb": 34,
            "Future_July_2_5_Twb": 26,
            "HDD18": 4600,
            "HDD15": 3740,
            "HDD18_2021_2050": 4100,
            "CDD24": 196, // Updated placeholder
            "CDD24_2021_2050": 315, // Updated placeholder
            "Over_30Tdb_2021_2050": 0, // Placeholder
            "Extreme_Hot_Tdb_1991_2020": 0, // Placeholder
            "Rain_15_min_mm": 25,
            "Rain_15_min_mm_New": 32,
            "Rain_1_day_1/50mm": 103,
            "Rain_1_day_1/50mm_New": 133,
            "Rain_Annual_mm": 800,
            "Rain_Annual_mm_New": 950,
            "Moisture_Index_New": 1,
            "Precip_Annual_mm": 975,
            "Precip_Annual_mm_New": 1090,
            "Driving_Rain_Wind_Pa_1/5": 160,
            "Driving_Rain_Wind_Pa_1/5_New": null, // No explicit new value in CSV
            "Snow_kPa_1/50_Ss": 2.4,
            "Snow_kPa_1/50_Sr": 0.4,
            "Snow_kPa_1/1000_Ss": 3.4,
            "Snow_kPa_1/1000_Sr": 0.6,
            "Wind_Hourly_kPa_1/10": 0.31,
            "Wind_Hourly_kPa_1/10_New": 0.34,
            "Wind_Hourly_kPa_1/50": 0.4,
            "Wind_Hourly_kPa_1/50_New": 0.44,
            "Wind_Hourly_kPa_1/500_New": 0.67,
            "Winter_Tdb_Avg": -8,
            "Winter_Windspeed_Avg": 3.8,
            "Summer_Tdb_Avg": 20.5, 
            "Summer_Twb_Avg": 15.11,
            "Summer_RH_1500_LST": 55.85 
        }
        // Add other provinces/cities here...
    }
}; 