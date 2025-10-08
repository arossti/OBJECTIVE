# Tooltip Implementation Guide for Future Sections

## Overview

This guide explains how to add Excel validation tooltips to any section of the TEUI app. The tooltip system uses a **centralized architecture** where all tooltip data is managed in one place.

**Architecture:** Single Source of Truth Pattern
- **Tooltip Data:** `4011-TooltipManager.js` (central repository)
- **Field Flags:** Section files (e.g., `4012-Section02.js`)
- **Rendering:** Automatic via TooltipManager

---

## Step-by-Step: Adding Tooltips to a New Section

### Step 1: Extract Tooltips from Excel (If Not Already Done)

**Use the extraction script** to get validation messages from the REPORT sheet:

```bash
python3 extract-validation.py "/path/to/TEUIv3042.xlsx"
```

This generates `data/validation-tooltips.json` with all 35+ tooltips.

**Already Extracted Sections:**
- ✅ Section 02 - Building Information (11 tooltips)
- ✅ Section 03 - Climate (6 tooltips)
- ✅ Section 04 - Actual vs Target Energy (6 tooltips)
- ✅ Section 05 - Emissions (2 tooltips)
- ✅ Section 06 - Renewable Energy (1 tooltip)
- ✅ Section 07 - Water Use (7 tooltips)

**Total Available:** 35 tooltips in `4011-TooltipManager.js`

---

### Step 2: Add Tooltip Data to Central Repository

**File:** [4011-TooltipManager.js](../4011-TooltipManager.js)

**Location:** Lines 14-195 (VALIDATION_TOOLTIPS object)

**To Add a New Tooltip:**

```javascript
const VALIDATION_TOOLTIPS = {
  // ... existing tooltips ...

  "your_field_id": {
    "cell": "D99",  // Excel cell reference
    "title": "Tooltip Title from Excel",
    "message": "Tooltip message from Excel Data Validation_x000a_Use _x000a_ for newlines"
  },
};
```

**Important Notes:**
- Use your app's field ID (e.g., `d_99`, `h_42`) as the key
- Copy title/message exactly from Excel Data Validation
- Keep `_x000a_` for newlines (automatically converted to `<br>`)
- Add comma after each entry (except the last one)

**Example from existing data:**
```javascript
"h_14": {
  "cell": "H14",
  "title": "Project Name",
  "message": "You may anonymize any owner info here. Use a project number or location or secret code name. Useful also for naming variations of your OBJECTIVE models ie. Run 1, 2, 3, etc."
},
```

---

### Step 3: Mark Fields in Section File

**File:** `sections/4012-SectionXX.js` (your section)

**Find your field definitions** in the `sectionRows` object and add `tooltip: true`:

**Before:**
```javascript
h: {
  fieldId: "h_99",
  type: "editable",
  value: "Some Value",
  section: "sectionName",
},
```

**After:**
```javascript
h: {
  fieldId: "h_99",
  type: "editable",
  value: "Some Value",
  section: "sectionName",
  tooltip: true,  // ✅ Add this flag
},
```

**That's it!** The TooltipManager will automatically find the tooltip data and apply it.

---

### Step 4: Integrate with Section Initialization

**File:** `sections/4012-SectionXX.js`

**Find the `onSectionRendered()` function** and add tooltip initialization:

```javascript
function onSectionRendered() {
  // ... existing initialization code ...

  // Your existing setup code here
  initializeEventHandlers();
  calculateAll();

  // ✅ ADD THIS AT THE END:
  // Apply validation tooltips to fields
  if (window.TEUI.TooltipManager && window.TEUI.TooltipManager.initialized) {
    setTimeout(() => {
      window.TEUI.TooltipManager.applyTooltipsToSection(sectionRows);
    }, 300);
  }
}
```

**Why 300ms delay?** Ensures DOM is fully rendered before applying Bootstrap popovers.

---

## Architecture: Why Central Management?

### Single Source of Truth (Current Implementation) ✅

**Advantages:**
- ✅ One place to update all tooltips
- ✅ Easy to regenerate from Excel (just re-run script)
- ✅ No duplication across section files
- ✅ Consistent tooltip behavior app-wide

**Structure:**
```
4011-TooltipManager.js (CENTRAL DATA)
    ↓
Section Files (FLAGS ONLY: tooltip: true)
    ↓
TooltipManager.applyTooltipsToSection() (AUTO-APPLY)
```

### Alternative: Distributed Management ❌ (NOT USED)

We **don't** use this approach, but for reference:

```javascript
// DON'T DO THIS - keeping data in section files duplicates effort
h: {
  fieldId: "h_14",
  type: "editable",
  tooltip: {
    title: "Project Name",
    message: "Long message here..."
  }
}
```

**Why not?**
- ❌ Can't regenerate from Excel easily
- ❌ Data duplicated across sections
- ❌ Hard to maintain consistency

---

## Quick Reference: Tooltip Flow

```
1. Excel REPORT Sheet
   ↓ (extract-validation.py)
2. validation-tooltips.json
   ↓ (manual copy/paste)
3. 4011-TooltipManager.js → VALIDATION_TOOLTIPS object
   ↓ (automatic)
4. Section file field definitions → tooltip: true
   ↓ (automatic)
5. TooltipManager.applyTooltipsToSection(sectionRows)
   ↓ (automatic)
6. Bootstrap Popover on field hover
```

---

## Adding Stragglers (Missing Tooltips)

**Q: Where do I add tooltips that were missed?**

**A:** Add them to `4011-TooltipManager.js` in the `VALIDATION_TOOLTIPS` object.

**Steps:**

1. **Open Excel** and find the cell with Data Validation
2. **Copy the validation message** (Data → Data Validation → Input Message)
3. **Add to TooltipManager:**

```javascript
// In 4011-TooltipManager.js, around line 14-195
const VALIDATION_TOOLTIPS = {
  // ... existing tooltips ...

  "your_missing_field": {
    "cell": "D42",
    "title": "Title from Excel",
    "message": "Message from Excel_x000a_Second line here"
  },

  // ... more tooltips ...
};
```

4. **Add flag to section file:**

```javascript
// In sections/4012-SectionXX.js
d: {
  fieldId: "your_missing_field",
  type: "dropdown",
  tooltip: true,  // ✅ Add this
  options: [...]
},
```

5. **Refresh browser** - tooltip should now work!

---

## Example: Adding Tooltips to Section 08

Let's say you want to add tooltips to Section 08 (Envelope).

### Step 1: Check if tooltips exist

Look in `4011-TooltipManager.js` for Section 08 field IDs (e.g., `d_61`, `d_62`, etc.)

### Step 2: If missing, extract from Excel

```bash
python3 extract-validation.py "/path/to/TEUIv3042.xlsx"
```

Check the output for Section 08 cells.

### Step 3: Add to TooltipManager

```javascript
// In 4011-TooltipManager.js
const VALIDATION_TOOLTIPS = {
  // ... existing S02-S07 tooltips ...

  // Section 08 tooltips
  "d_61": {
    "cell": "D61",
    "title": "Wall Assembly Type",
    "message": "Select the primary wall construction type..."
  },
  "d_62": {
    "cell": "D62",
    "title": "RSI Value",
    "message": "Enter the effective thermal resistance..."
  },
  // ... more S08 fields ...
};
```

### Step 4: Mark fields in Section08.js

```javascript
// In sections/4012-Section08.js
const sectionRows = {
  61: {
    cells: {
      d: {
        fieldId: "d_61",
        type: "dropdown",
        tooltip: true,  // ✅ Add this
        options: [...]
      }
    }
  },
  62: {
    cells: {
      d: {
        fieldId: "d_62",
        type: "editable",
        tooltip: true,  // ✅ Add this
        value: "4.5"
      }
    }
  }
};
```

### Step 5: Add to onSectionRendered()

```javascript
// In sections/4012-Section08.js
function onSectionRendered() {
  // ... existing code ...

  // Apply tooltips
  if (window.TEUI.TooltipManager && window.TEUI.TooltipManager.initialized) {
    setTimeout(() => {
      window.TEUI.TooltipManager.applyTooltipsToSection(sectionRows);
    }, 300);
  }
}
```

### Step 6: Test!

Refresh browser, hover over Section 08 fields, tooltips should appear.

---

## Troubleshooting

### Tooltip not appearing?

**Check console for errors:**

```javascript
// Should see:
✅ [TooltipManager] Loaded 36 validation tooltips
✅ [TooltipManager] Applied tooltip to d_61
✅ [TooltipManager] Applied 5 tooltips to section
```

**Common issues:**

1. **Element not found**
   ```
   [TooltipManager] Element not found for field: d_61
   ```
   - Solution: Field may not be rendered yet. Increase timeout from 300ms to 500ms.

2. **No tooltip data**
   ```
   [TooltipManager] No tooltip data for field: d_61
   ```
   - Solution: Add field to `VALIDATION_TOOLTIPS` in TooltipManager.js

3. **Tooltip doesn't show on hover**
   - Check if Bootstrap is loaded: `console.log(typeof bootstrap.Popover)` should be `"function"`
   - Check element has attributes: Inspect element, should see `data-bs-toggle="popover"`

### Tooltip content is wrong?

Update the tooltip in `4011-TooltipManager.js` and refresh browser.

### Need to extract more tooltips from Excel?

Run the extraction script on specific rows:

```bash
python3 extract-validation.py "/path/to/excel.xlsx"
```

Then manually add any new tooltips to `4011-TooltipManager.js`.

---

## Coverage Status

| Section | Fields with Tooltips | Total Fields | Coverage |
|---------|---------------------|--------------|----------|
| S02 - Building Info | 11 | 11 | 100% ✅ |
| S03 - Climate | 0 | 6 | 0% ⏳ |
| S04 - Energy | 0 | 6 | 0% ⏳ |
| S05 - Emissions | 0 | 2 | 0% ⏳ |
| S06 - Renewable | 0 | 1 | 0% ⏳ |
| S07 - Water | 0 | 7 | 0% ⏳ |
| S08+ | 0 | ? | 0% ⏳ |

**Next Priority:** Section 03 (Climate) - 6 tooltips already in TooltipManager

---

## Summary Checklist

To add tooltips to a new section:

- [ ] Check if tooltips exist in `4011-TooltipManager.js`
- [ ] If missing, extract from Excel or manually add
- [ ] Add `tooltip: true` to field definitions in section file
- [ ] Add `applyTooltipsToSection()` call to `onSectionRendered()`
- [ ] Test in browser
- [ ] Commit changes

**That's it! The centralized architecture makes it easy to add tooltips to any section.**

---

**Last Updated:** Oct 8, 2025
**Current Total:** 35 tooltips available, 11 applied (S02)
**Extraction Source:** TEUIv3042.xlsx
