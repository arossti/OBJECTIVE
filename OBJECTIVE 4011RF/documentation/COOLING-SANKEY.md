# Cooling Sankey Implementation Plan

**Last Good Commit:** `4c99612` - Merge S10-11-AREA-SYNC: Automatic area sync between S10 and S11

**Branch:** `COOL-SANKEY`

**Target Files:**
- [4012-Section16.js](../sections/4012-Section16.js) - Main integration, button, mode switching
- [4012-Section16C.js](../sections/4012-Section16C.js) - NEW modular cooling Sankey file

---

## Overview

Add a cooling season energy balance Sankey diagram to Section 16, togglable with the existing heating season Sankey. The cooling diagram will show **Energy Gained** (left, red/orange hues) → **Building** (center) → **Energy Removed** (right, blue hues).

**Modular Architecture:** Given S16 is already 2241 lines, cooling functionality will be separated into **4012-Section16C.js** to maintain code manageability.

---

## Data Source

### Primary Source
All cooling values are pulled from **existing Calculator state** (`window.TEUI.Calculator.state`), computed and published by their respective section files to StateManager. This is the same pattern used by the heating Sankey.

**Examples:**
- `m_129` → Published by S14, accessed via `window.TEUI.Calculator.state.m_129`
- `k_85` → Published by section computing envelope cooling loads
- `d_122` → Published by ventilation section

### Reference Data (for validation)
- **Excel File:** BALANCE.csv
- **Cooling Balance Data:** Rows 44-69 (columns C, D, F for labels and values)
- **Energy Gained:** Column D (rows 46-68)
- **Energy Removed:** Column F (rows 46-68)

---

## Implementation Steps

### 1. Add Heating/Cooling Mode Toggle Button ✅

**Location:** S16 control button row, immediately to the right of "Refresh Sankey" button

**Behavior:**
- **In Heating Mode:** Button displays "Cooling" with blue fill (#4A96BA)
- **In Cooling Mode:** Button displays "Heating" with red fill (#BE343D)
- **On Click:** Toggle between heating and cooling Sankey displays

**Code Changes:**
- Add mode state tracking to `window.TEUI.sect16` (heating/cooling)
- Create button element in controls section
- Add event listener for toggle functionality

---

### 2. Create Modular Cooling File (4012-Section16C.js)

**Purpose:** Separate cooling Sankey logic to keep S16.js manageable

**Location:** `sections/4012-Section16C.js`

**Contents:**
- `COOLING_SANKEY_STRUCTURE_TEMPLATE` (nodes & links)
- `getCoolingSankeyData()` function
- Cooling-specific helper functions
- Namespace: `window.TEUI.CoolingSankey`

**Integration Pattern:**
```javascript
// In 4012-Section16.js
if (window.TEUI.CoolingSankey) {
  const coolingData = window.TEUI.CoolingSankey.getCoolingSankeyData();
}
```

---

### 3. Define Cooling Season Sankey Structure

**Pattern:** Follow existing `SANKEY_STRUCTURE_TEMPLATE` pattern

**File:** 4012-Section16C.js

**Nodes Definition:**

#### Left Side - Energy Gained (Red/Orange Hues)
| Index | Name | Source Row | Color (Pastel Red/Orange) |
|-------|------|-----------|---------------------------|
| 0 | Building | N/A | #4A96BA (center node, stays blue) |
| 1 | B.4 Roof | 46 | #FFB6A3 |
| 2 | B.5 Walls Ae | 47 | #FFB6A3 |
| 3 | B.7.0 Doors | 49 | #FFB6A3 |
| 4 | B.8.1 Window Area North | 50 | #FFCC99 |
| 5 | B.8.2 Window Area East | 51 | #FFCC99 |
| 6 | B.8.3 Window Area South | 52 | #FFCC99 |
| 7 | B.8.4 Window Area West | 53 | #FFCC99 |
| 8 | Skylights | 54 | #FFCC99 |
| 9 | B.9 Walls BG (conditional) | 55 | #FFB6A3 |
| 10 | B.10 Floor Slab (conditional) | 56 | #FFB6A3 |
| 11 | G.7 Doors | 57 | #FFCC99 |
| 12 | G.8.1 Windows N | 58 | #FFCC99 |
| 13 | G.8.2 Windows E | 59 | #FFCC99 |
| 14 | G.8.3 Windows S | 60 | #FFCC99 |
| 15 | G.8.4 Windows W | 61 | #FFCC99 |
| 16 | B.19.6 Air Leakage | 63 | #FFA07A |
| 17 | V.4.1 Incoming Ventil. Energy | 64 | #FFDAB9 |
| 18 | B.12 TB Penalty (conditional) | 65 | #FFB6A3 |
| 19 | G.1.2 Occupant Gains | 66 | #FF8C69 |
| 20 | Plug/Light/Eqpt. Subtotals | 67 | #FFB6A3 |
| 21 | DHW System Losses | 68 | #FFB6A3 |

#### Right Side - Energy Removed (Blue Hues)
| Index | Name | Source Row | Color (Pastel Blue) |
|-------|------|-----------|---------------------|
| 22 | T.5.2 CED less Free Cool - VX | 46 | #A5D3ED |
| 23 | B.9 Walls BG (if negative K94) | 55 | #A5D3ED |
| 24 | B.10 Floor Slab (if negative K95) | 56 | #A5D3ED |
| 25 | Ventilation Free Cooling/Vent Capacity | 63 | #B0E0E6 |
| 26 | V.3.3 Ventilation Exhaust | 64 | #B0E0E6 |
| 27 | B.12 TB Penalty (if negative K97) | 65 | #A5D3ED |

**Links Definition:**
- All Energy Gained nodes → Building (node 0)
- Building → All Energy Removed nodes
- Values from BALANCE.csv rows 46-68, columns D and F

---

### 4. Create Cooling Data Mapping Function

**Function:** `getCoolingSankeyData()`

**File:** 4012-Section16C.js

**Purpose:** Extract cooling season values from Calculator state (`window.TEUI.Calculator.state`)

**Mapping Table:**

| Node Name | Excel Cell Reference | Calculator Path | Notes |
|-----------|---------------------|-----------------|-------|
| B.4 Roof | K85 | k_85 | Energy gained through roof |
| B.5 Walls Ae | K86 | k_86 | Conditional if > 0 |
| B.7.0 Doors | K88 | k_88 | Door transmission gains |
| B.8.1 Window Area North | K89 | k_89 | North window solar gains |
| B.8.2 Window Area East | K90 | k_90 | East window solar gains |
| B.8.3 Window Area South | K91 | k_91 | South window solar gains |
| B.8.4 Window Area West | K92 | k_92 | West window solar gains |
| Skylights | K93 | k_93 | Skylight gains |
| B.9 Walls BG | K94 | k_94 | Conditional: if >0 gain, if <0 removal |
| B.10 Floor Slab | K95 | k_95 | Conditional: if >0 gain, if <0 removal |
| G.7 Doors | K73 | k_73 | Door solar gains |
| G.8.1 Windows N | K74 | k_74 | North window gains |
| G.8.2 Windows E | K75 | k_75 | East window gains |
| G.8.3 Windows S | K76 | k_76 | South window gains |
| G.8.4 Windows W | K77 | k_77 | West window gains |
| B.19.6 Air Leakage | K103 | k_103 | Air infiltration gains |
| V.4.1 Incoming Ventil. Energy | D122 | d_122 | Ventilation energy input |
| B.12 TB Penalty | K97 | k_97 | Conditional: if >0 gain, if <0 removal |
| G.1.2 Occupant Gains | K64 | k_64 | Internal heat from occupants |
| Plug/Light/Eqpt. Subtotals | K70 | k_70 | Equipment heat gains |
| DHW System Losses | K69 | k_69 | Hot water losses |
| T.5.2 CED less Free Cool - VX | M129 | m_129 | Cooling energy demand |
| Ventilation Free Cooling/Vent Capacity | C124 / H124 | c_124 / h_124 | Free cooling capacity |
| V.3.3 Ventilation Exhaust | D123 | d_123 | Exhaust ventilation removal |

**Code Structure:**
```javascript
function getCoolingSankeyData() {
  const state = window.TEUI.Calculator.state;

  const nodes = [...]; // Define all cooling nodes
  const links = [...]; // Define all cooling links

  // Handle conditional nodes (B.9, B.10, B.12 can be gains or removals)
  // Filter out zero-value links

  return { nodes, links };
}
```

---

### 5. Modify Render Logic for Mode Switching

**File:** 4012-Section16.js

**Changes Required:**

1. **Add mode parameter to render functions:**
   - Modify `updateSankeyVisualization()` to accept mode parameter
   - Store current mode in `window.TEUI.sect16.currentMode`

2. **Data source selection:**
   ```javascript
   function getSankeyDataForMode(mode) {
     if (mode === 'heating') {
       return getHeatingSankeyData(); // existing function
     } else if (mode === 'cooling') {
       return getCoolingSankeyData(); // new function
     }
   }
   ```

3. **Animation consistency:**
   - Use same animation durations as heating Sankey
   - Use same easing functions
   - Maintain flowing effect on mode switch

---

### 6. Update Button Styling and State

**File:** 4012-Section16.js

**CSS Classes:**
- `.s16-mode-heating` - Red fill (#BE343D)
- `.s16-mode-cooling` - Blue fill (#4A96BA)

**State Management:**
- Track mode in `window.TEUI.sect16.currentMode`
- Default to 'heating' on initial load
- Persist mode across refreshes (optional enhancement)

---

### 7. Integration and Testing

**Test Cases:**
1. ✅ Button displays correctly in both modes
2. ✅ Sankey diagram switches between heating and cooling data
3. ✅ Animations work smoothly on mode toggle
4. ✅ Node colors follow specified palette
5. ✅ Tooltips display correct values
6. ✅ "Show Emissions" button continues to work (heating mode only)
7. ✅ Fullscreen mode works with both heating and cooling
8. ✅ Refresh button works in both modes
9. ✅ Width slider works in both modes

---

## Color Palette Reference

### Energy Gained (Left Side)
- **Envelope Elements:** `#FFB6A3` (pastel coral/salmon)
- **Windows/Solar:** `#FFCC99` (pastel peach)
- **Air/Ventilation:** `#FFA07A` (light salmon) / `#FFDAB9` (peach puff)
- **Internal Gains:** `#FF8C69` (coral)

### Energy Removed (Right Side)
- **Cooling Equipment:** `#A5D3ED` (sky blue)
- **Ventilation:** `#B0E0E6` (powder blue)

### Center Node
- **Building:** `#4A96BA` (existing blue)

---

## Notes

- **Emissions Display:** Reserved for later - currently shows heating emissions only
- **Object References:** Follow D3 best practices from existing heating Sankey
- **Numeric Handling:** Use same value filtering (remove zero/near-zero links)
- **Animation Timing:** Match existing heating Sankey exactly
- **Data Structure:** Deep copy patterns to prevent D3 mutation issues

---

## Future Enhancements

1. Show cooling-specific emissions intensity
2. Add cooling vs heating comparison view
3. Animate transition between modes (morphing Sankey)
4. Add seasonal performance metrics display
5. Export cooling balance diagram as image

---

**Status:** Ready for implementation
**Priority:** Medium
**Complexity:** Medium (follows established pattern)
