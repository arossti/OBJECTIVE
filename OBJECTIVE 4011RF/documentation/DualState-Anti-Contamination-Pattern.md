# DualState Anti-Contamination Pattern

## 🚨 **CRITICAL: StateManager = Contamination Source**

**NEVER** write to StateManager from DualState sections. StateManager acts as a shared global store that creates cross-contamination between Target and Reference modes.

## ❌ **CONTAMINATION PATTERN (AVOID)**

```javascript
// THIS CREATES CONTAMINATION:
dropdown.addEventListener('change', function(e) {
  DualStateManager.setValue(fieldId, e.target.value, 'user-modified');
  
  // ❌ CONTAMINATION SOURCE - writes to shared StateManager
  window.TEUI.StateManager.setValue(fieldId, e.target.value, 'user-modified');
});

// RESULT: Reference mode overwrites Target data in StateManager
```

## ✅ **ANTI-CONTAMINATION PATTERN (REQUIRED)**

```javascript
// ISOLATED - No StateManager interaction
dropdown.addEventListener('change', function(e) {
  DualStateManager.setValue(fieldId, e.target.value, 'user-modified'); // ONLY DualState
  console.log(`${sectionName}: ${DualStateManager.currentMode} mode - ${fieldId} = ${e.target.value}`);
});
```

## 🏗️ **SECTION REFACTORING CHECKLIST**

For each section implementing DualState:

### ✅ **Step 1: Complete StateManager Elimination**
- [ ] Remove ALL `window.TEUI.StateManager.setValue()` calls
- [ ] Remove ALL `window.TEUI.StateManager.getValue()` calls for section fields
- [ ] Use ONLY DualState for section field management

### ✅ **Step 2: Isolated Event Handlers**
- [ ] Event handlers write ONLY to DualState
- [ ] No "backwards compatibility" StateManager writes
- [ ] Add console logging for debugging state changes

### ✅ **Step 3: Complete UI Refresh**
- [ ] Implement `refreshUI()` that switches ALL form elements
- [ ] UI reads from current DualState mode only
- [ ] No fallback to StateManager for UI display

### ✅ **Step 4: Section-Specific Restrictions**
- [ ] Identify fields that should be locked in Reference mode
- [ ] Implement `applyReferenceModeRestrictions()`
- [ ] Ensure critical fields (like d_14) never affect global state

## 🛡️ **S01 INTEGRATION PATTERN**

S01 Key Values has a unique role - it displays totals from all sections:

### **Three Isolated Columns:**
1. **Reference Column**: Totals from all sections' ReferenceState
2. **Target Column**: Totals from all sections' TargetState  
3. **Actual Column**: Utility bill data from S04 (ground truth)

### **S01 Reading Pattern:**
```javascript
// S01 reads from section DualStates - NEVER writes to them
function updateS01Totals() {
  // Reference column
  const referenceTotal = S02DualState.ReferenceState.getValue('calculatedValue') +
                        S03DualState.ReferenceState.getValue('calculatedValue') +
                        S04DualState.ReferenceState.getValue('calculatedValue');
  
  // Target column  
  const targetTotal = S02DualState.TargetState.getValue('calculatedValue') +
                     S03DualState.TargetState.getValue('calculatedValue') +
                     S04DualState.TargetState.getValue('calculatedValue');
                     
  // Actual column (utility bills only)
  const actualTotal = S04DualState.getActualValues(); // Ground truth data
  
  // Update S01 display - no contamination
  updateS01Display(referenceTotal, targetTotal, actualTotal);
}
```

## 🔥 **COMMON CONTAMINATION SOURCES**

### ❌ **Source 1: "Backwards Compatibility"**
```javascript
// NEVER DO THIS:
if (window.TEUI?.StateManager) {
  window.TEUI.StateManager.setValue(fieldId, value, 'user-modified');
}
```

### ❌ **Source 2: Fallback Reads**
```javascript
// NEVER DO THIS:
function getFieldValue(fieldId) {
  return DualState.getValue(fieldId) || window.TEUI.StateManager.getValue(fieldId);
}
```

### ❌ **Source 3: Calculation Functions**
```javascript
// NEVER DO THIS in calculation functions:
function calculateSomething() {
  const value = window.TEUI.StateManager.getValue('d_15'); // Contaminated read
  window.TEUI.StateManager.setValue('d_16', result, 'calculated'); // Contaminated write
}
```

## ✅ **VERIFICATION TESTS**

For each refactored section:

1. **Isolation Test**: Set different values in Target vs Reference mode
2. **Persistence Test**: Refresh page, verify both modes maintain separate values
3. **UI Switch Test**: Toggle between modes, verify complete UI switching
4. **S01 Test**: Verify S01 shows separate Target/Reference totals

## 🎯 **SUCCESS CRITERIA**

✅ Target 2025 ≠ Reference 2017 (independent reporting years)  
✅ Reference changes NEVER affect Target state  
✅ Target changes NEVER affect Reference state  
✅ S01 displays three isolated columns correctly  
✅ No StateManager contamination pathways  

## 🚀 **IMPLEMENTATION ORDER**

1. **S02 Building Information** (NEEDS FIXING - still contaminated)
2. **S03 Climate Data** (WORKING - proven pattern)
3. **S04 Energy & Carbon** (demonstrates d13-controlled fields)
4. **S05 Emissions** (carbon calculation differences)
5. **S06-S18** (systematic application)

---

**REMEMBER**: StateManager is legacy architecture. DualState sections must be completely isolated to achieve true Target/Reference modeling. 