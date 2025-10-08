#!/usr/bin/env python3
"""
Convert comprehensive tooltip JSON to JavaScript format with field_id mapping
"""

import json
import sys

# Cell reference to field_id mapping (from ExcelMapper.js)
CELL_TO_FIELD = {
    'D12': 'd_12', 'D13': 'd_13', 'D14': 'd_14', 'D15': 'd_15',
    'H12': 'h_12', 'H13': 'h_13', 'H14': 'h_14', 'H15': 'h_15',
    'H16': 'i_16', 'H17': 'i_17',
    'L12': 'l_12', 'L13': 'l_13', 'L14': 'l_14', 'L15': 'l_15', 'L16': 'l_16',
    'D16': 'd_16',
    'D19': 'd_19', 'H19': 'h_19', 'M19': 'm_19', 'H20': 'h_20', 'H21': 'h_21', 'I21': 'i_21',
    'L20': 'l_20', 'L21': 'l_21', 'L22': 'l_22', 'L23': 'l_23', 'L24': 'l_24', 'H24': 'h_24',
    'D25': 'd_25',
    'D27': 'd_27', 'D28': 'd_28', 'D29': 'd_29', 'D30': 'd_30', 'D31': 'd_31', 'D32': 'd_32',
    'L27': 'l_27', 'L28': 'l_28', 'L29': 'l_29', 'L30': 'l_30', 'L31': 'l_31',
    'L33': 'l_33',
    'H35': 'h_35',
    'D39': 'd_39', 'I41': 'i_41',
    'M43': 'm_43',
    'D49': 'd_49', 'E49': 'e_49', 'F49': 'f_49', 'H49': 'h_49',
    'E50': 'e_50', 'F50': 'f_50',
    'D51': 'd_51', 'D52': 'd_52', 'D53': 'd_53', 'D54': 'd_54',
    'E54': 'e_54', 'G54': 'g_54', 'H54': 'h_54', 'L54': 'l_54',
    'D59': 'd_59', 'I59': 'i_59', 'D60': 'd_60',
    'D63': 'd_63', 'G63': 'g_63', 'D64': 'd_64', 'D65': 'd_65', 'D66': 'd_66', 'D67': 'd_67', 'G67': 'g_67', 'D68': 'd_68',
    'M72': 'm_72',
    'E73': 'e_73', 'F73': 'f_73', 'E74': 'e_74', 'F74': 'f_74',
    'E75': 'e_75', 'F75': 'f_75', 'E76': 'e_76', 'F76': 'f_76',
    'E77': 'e_77', 'F77': 'f_77', 'E78': 'e_78', 'F78': 'f_78',
    'D80': 'd_80', 'G80': 'g_80', 'D81': 'd_81',
    'O84': 'o_84',
    'D96': 'd_96', 'D97': 'd_97',
    'J98': 'j_98', 'L98': 'l_98',
    'D103': 'd_103', 'J104': 'j_104', 'L104': 'l_104', 'D105': 'd_105',
    'D108': 'd_108', 'G109': 'g_109', 'H109': 'h_109', 'G110': 'g_110', 'J110': 'j_110',
    'D113': 'd_113', 'F113': 'f_113',
    'D116': 'd_116', 'D118': 'd_118',
    'G118': 'g_118', 'L118': 'l_118', 'D119': 'd_119', 'L119': 'l_119',
    'K120': 'k_120',
    'M124': 'm_124',
    'M141': 'm_141',
}

def load_tooltips(json_file):
    """Load tooltips from JSON file"""
    with open(json_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def convert_to_js_object(tooltips):
    """Convert tooltips to JavaScript object format with proper field_id keys"""
    js_lines = []
    js_lines.append('  const VALIDATION_TOOLTIPS = {')

    # Group by field_id (mapped) vs cell_ref (unmapped)
    mapped = {}
    unmapped = {}

    for key, data in tooltips.items():
        cell_ref = data['cell']
        if cell_ref in CELL_TO_FIELD:
            field_id = CELL_TO_FIELD[cell_ref]
            mapped[field_id] = data
        else:
            unmapped[cell_ref] = data

    # Output mapped tooltips first (sorted by field_id)
    for field_id in sorted(mapped.keys()):
        data = mapped[field_id]
        js_lines.append(f'    "{field_id}": {{')
        js_lines.append(f'      "cell": "{data["cell"]}",')
        js_lines.append(f'      "title": {json.dumps(data["title"])},')
        js_lines.append(f'      "message": {json.dumps(data["message"])}')
        js_lines.append('    },')

    # Output unmapped tooltips (by cell reference)
    if unmapped:
        js_lines.append('    // Unmapped cells (no field_id mapping yet):')
        for cell_ref in sorted(unmapped.keys()):
            data = unmapped[cell_ref]
            js_lines.append(f'    "{cell_ref}": {{')
            js_lines.append(f'      "cell": "{data["cell"]}",')
            js_lines.append(f'      "title": {json.dumps(data["title"])},')
            js_lines.append(f'      "message": {json.dumps(data["message"])}')
            js_lines.append('    },')

    # Remove trailing comma from last item
    if js_lines[-1].endswith(','):
        js_lines[-1] = js_lines[-1][:-1]

    js_lines.append('  };')

    return '\n'.join(js_lines)

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 convert-tooltips-to-js.py <tooltips.json>")
        sys.exit(1)

    json_file = sys.argv[1]
    tooltips = load_tooltips(json_file)

    js_object = convert_to_js_object(tooltips)
    print(js_object)

    print(f"\n// Total tooltips: {len(tooltips)}", file=sys.stderr)
    mapped_count = sum(1 for t in tooltips.values() if t['cell'] in CELL_TO_FIELD)
    print(f"// Mapped to field_ids: {mapped_count}", file=sys.stderr)
    print(f"// Unmapped (cell refs): {len(tooltips) - mapped_count}", file=sys.stderr)

if __name__ == '__main__':
    main()
