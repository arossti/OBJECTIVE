#!/usr/bin/env python3
"""
Convert CANADA.csv climate data to JavaScript format for ClimateValues.js
Provides complete coverage of all Canadian locations

Usage:
    python3 convert_climate_csv_to_js.py <input_csv> <output_js>
    
Example:
    python3 convert_climate_csv_to_js.py ../CANADA.csv ../../4011-ClimateValues.js
    
Default (if no args):
    Uses ../CANADA.csv as input
    Outputs to ../../4011-ClimateValues-Complete.js
"""

import csv
import json
import sys
import os
from collections import OrderedDict

def parse_value(value):
    """Convert CSV value to appropriate JavaScript type"""
    if value is None or value == '':
        return None
    
    # Handle special markers
    if value in ['666', '666.0']:
        return 666  # Keep as marker for missing data
    
    # Try to convert to number
    try:
        # Check if it's an integer
        if '.' not in value:
            return int(value)
        else:
            # Return as float
            val = float(value)
            # Round to 1 decimal for most values, 2 for some specific ones
            if val == int(val):
                return int(val)
            return round(val, 2) if abs(val) < 10 else round(val, 1)
    except (ValueError, TypeError):
        # Return as string if not a number
        return value.strip()

def get_province_code(province_name):
    """Convert province name to code"""
    province_map = {
        'British Columbia': 'BC',
        'Alberta': 'AB',
        'Saskatchewan': 'SK',
        'Manitoba': 'MB',
        'Ontario': 'ON',
        'Quebec': 'QC',
        'Québec': 'QC',
        'New Brunswick': 'NB',
        'Nova Scotia': 'NS',
        'Prince Edward Island': 'PE',
        'Newfoundland and Labrador': 'NL',
        'Yukon': 'YT',
        'Northwest Territories': 'NT',
        'Nunavut': 'NU'
    }
    return province_map.get(province_name, province_name)

def main():
    # Parse command line arguments
    if len(sys.argv) > 2:
        csv_path = sys.argv[1]
        output_path = sys.argv[2]
    elif len(sys.argv) > 1:
        csv_path = sys.argv[1]
        # Default output: same directory as input, with -Complete.js suffix
        base_name = os.path.splitext(os.path.basename(csv_path))[0]
        output_dir = os.path.dirname(csv_path)
        output_path = os.path.join(output_dir, f"{base_name}-ClimateValues-Complete.js")
    else:
        # Default paths (relative to script location)
        script_dir = os.path.dirname(os.path.abspath(__file__))
        csv_path = os.path.join(script_dir, '..', 'CANADA.csv')
        output_path = os.path.join(script_dir, '..', '..', '4011-ClimateValues-Complete.js')
    
    # Resolve to absolute paths
    csv_path = os.path.abspath(csv_path)
    output_path = os.path.abspath(output_path)
    
    print(f"Climate Data CSV to JavaScript Converter")
    print(f"=" * 60)
    print(f"Input CSV:  {csv_path}")
    print(f"Output JS:  {output_path}")
    print()
    
    # Check if input file exists
    if not os.path.exists(csv_path):
        print(f"ERROR: Input file not found: {csv_path}")
        sys.exit(1)
    
    # Read the CSV file
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        rows = list(reader)
    
    # Extract JavaScript field names from row 3
    field_names = []
    for i, name in enumerate(rows[3]):
        if name.strip() and name != 'JavaScript Notation':
            field_names.append((i, name.strip()))
    
    print(f"Found {len(field_names)} data fields")
    
    # Initialize the climate data structure
    climate_data = OrderedDict()
    
    # Process data rows (starting from row 4)
    current_province = None
    current_province_code = None
    locations_count = 0
    
    for row_idx in range(4, len(rows)):
        row = rows[row_idx]
        if len(row) == 0:
            continue
            
        location = row[0].strip() if len(row) > 0 else ''
        
        # Check if this is a province header
        if location in ['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 
                       'Ontario', 'Quebec', 'Québec', 'New Brunswick', 'Nova Scotia',
                       'Prince Edward Island', 'Newfoundland and Labrador', 
                       'Northwest Territories', 'Nunavut', 'Yukon']:
            current_province = location
            current_province_code = get_province_code(location)
            if current_province_code not in climate_data:
                climate_data[current_province_code] = OrderedDict()
            print(f"\nProcessing {current_province} ({current_province_code})")
            continue
        
        # Skip empty rows, headers, and special markers
        if (not location or 
            location == 'JavaScript Notation' or 
            location.startswith('Green') or
            location.startswith('DK.') or
            len(row) < 10):
            continue
        
        # Process location data
        if current_province_code:
            city_data = OrderedDict()
            city_data['Location'] = location
            
            # Map field names to values
            for col_idx, field_name in field_names:
                if col_idx < len(row):
                    value = parse_value(row[col_idx])
                    
                    # Convert field names to match existing format
                    if field_name == 'Elevation_ASL':
                        city_data['Elev ASL (m)'] = value
                    else:
                        city_data[field_name] = value
            
            # Add to province data
            climate_data[current_province_code][location] = city_data
            locations_count += 1
            
            if locations_count % 10 == 0:
                print(f"  Processed {locations_count} locations...")
    
    print(f"\nTotal locations processed: {locations_count}")
    
    # Generate JavaScript file content
    import datetime
    js_content = '''/**
 * 4011-ClimateValues.js
 * Complete climate data for all Canadian locations
 * Auto-generated from CANADA.csv - includes all locations
 *
 * Data sourced from: {0}
 * Generated: {1}
 */

// Create namespace
window.TEUI = window.TEUI || {{}}; 

// Complete climate data object with all Canadian locations
window.TEUI.ClimateData = '''.format(
        os.path.basename(csv_path),
        datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    )
    
    # Convert to JavaScript object notation with proper formatting
    js_object = json.dumps(climate_data, indent=2, ensure_ascii=False)
    
    # Fix formatting for JavaScript (null values, etc.)
    js_object = js_object.replace('null', 'null')
    js_object = js_object.replace(': None', ': null')
    
    js_content += js_object + ';\n'
    
    # Create output directory if it doesn't exist
    output_dir = os.path.dirname(output_path)
    if output_dir and not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Save the JavaScript file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\nJavaScript file saved to: {output_path}")
    
    # Print summary statistics
    print("\n" + "="*60)
    print("CONVERSION SUMMARY")
    print("="*60)
    for province_code in climate_data:
        city_count = len(climate_data[province_code])
        print(f"{province_code}: {city_count} locations")
    print(f"\nTotal provinces: {len(climate_data)}")
    print(f"Total locations: {locations_count}")
    
    # Calculate file size
    file_size = os.path.getsize(output_path)
    print(f"Output file size: {file_size / 1024:.1f} KB")

if __name__ == "__main__":
    main()