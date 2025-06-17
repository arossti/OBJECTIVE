/**
 * 4012-SectionRenderer.js
 * Grid-based section renderer for TEUI 4.012
 * Replaces table layouts with CSS Grid
 */

(function () {
  "use strict";

  // Ensure namespace exists
  window.TEUI = window.TEUI || {};
  window.TEUI.v4012 = window.TEUI.v4012 || {};

  // Section Renderer Module
  const SectionRenderer = {
    // Render a section based on layout definition
    renderSection: function (sectionId, layout) {
      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) {
        console.error(`Section element not found: ${sectionId}`);
        return;
      }

      const contentElement = sectionElement.querySelector(".section-content");
      if (!contentElement) {
        console.error(`Section content element not found for: ${sectionId}`);
        return;
      }

      // Clear existing content
      contentElement.innerHTML = "";

      // Create grid container
      const gridContainer = document.createElement("div");
      gridContainer.className = "section-grid";

      // Render each row
      if (layout.rows && Array.isArray(layout.rows)) {
        layout.rows.forEach((row, index) => {
          const rowElement = this.renderRow(row, index);
          if (rowElement) {
            gridContainer.appendChild(rowElement);
          }
        });
      }

      contentElement.appendChild(gridContainer);
    },

    // Render a single row
    renderRow: function (row, rowIndex) {
      const rowElement = document.createElement("div");
      rowElement.className = "section-row";
      if (row.id) {
        rowElement.setAttribute("data-row-id", row.id);
      }

      // Add row number in column A
      const rowNumberCell = document.createElement("div");
      rowNumberCell.className = "section-cell col-a";
      // Use explicit rowNumber if provided, otherwise use index (but not for header row)
      const displayNumber = row.rowNumber || (rowIndex > 0 ? rowIndex : "");
      rowNumberCell.textContent = displayNumber;
      rowElement.appendChild(rowNumberCell);

      // Render cells B through N from the row definition
      const columns = [
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
      ];
      let skipColumns = [];

      columns.forEach((col) => {
        // Skip if this column was covered by a previous colspan
        if (skipColumns.includes(col)) {
          return;
        }

        const cellDef = row.cells?.[col] || {};
        const cellElement = this.renderCell(cellDef, col);

        // Handle colspan
        if (cellDef.colspan && cellDef.colspan > 1) {
          cellElement.classList.add(`colspan-${cellDef.colspan}`);
          // Mark the next columns as skipped
          const colIndex = columns.indexOf(col);
          for (
            let i = 1;
            i < cellDef.colspan && colIndex + i < columns.length;
            i++
          ) {
            skipColumns.push(columns[colIndex + i]);
          }
        }

        rowElement.appendChild(cellElement);
      });

      return rowElement;
    },

    // Render a single cell
    renderCell: function (cell, columnLetter) {
      const cellDiv = document.createElement("div");
      cellDiv.className = "section-cell col-" + columnLetter;

      // Handle colspan
      if (cell.colspan) {
        cellDiv.setAttribute("colspan", cell.colspan);
        cellDiv.style.gridColumn = `span ${cell.colspan}`;
      }

      // Add custom classes
      if (cell.classes && Array.isArray(cell.classes)) {
        cellDiv.classList.add(...cell.classes);
      }

      // Handle different cell types
      if (cell.type === "dropdown" && cell.options) {
        const select = document.createElement("select");
        select.className = "form-select form-select-sm";
        if (cell.fieldId) select.setAttribute("data-field-id", cell.fieldId);
        if (cell.dropdownId)
          select.setAttribute("data-dropdown-id", cell.dropdownId);

        // Add options
        cell.options.forEach((opt) => {
          const option = document.createElement("option");
          option.value = opt.value;
          option.textContent = opt.name || opt.value;
          if (opt.value === cell.value) option.selected = true;
          select.appendChild(option);
        });

        cellDiv.appendChild(select);
      } else if (cell.type === "editable") {
        cellDiv.contentEditable = true;
        cellDiv.classList.add("editable");
        if (cell.fieldId) cellDiv.setAttribute("data-field-id", cell.fieldId);
        cellDiv.textContent = cell.value || "";
      } else if (cell.type === "slider") {
        const container = document.createElement("div");
        container.className = "slider-container";

        const slider = document.createElement("input");
        slider.type = "range";
        slider.className = "slider";
        if (cell.fieldId) slider.setAttribute("data-field-id", cell.fieldId);
        slider.min = cell.min || 0;
        slider.max = cell.max || 100;
        slider.step = cell.step || 1;
        slider.value = cell.value || 50;

        const valueSpan = document.createElement("span");
        valueSpan.className = "slider-value";
        valueSpan.textContent = cell.value || "50";

        container.appendChild(slider);
        container.appendChild(valueSpan);
        cellDiv.appendChild(container);
      } else if (cell.type === "calculated") {
        cellDiv.classList.add("calculated-value");
        if (cell.fieldId) cellDiv.setAttribute("data-field-id", cell.fieldId);
        cellDiv.textContent = cell.value || "";
      } else if (cell.label) {
        cellDiv.textContent = cell.label;
      } else if (cell.content !== undefined) {
        cellDiv.textContent = cell.content;
      }

      return cellDiv;
    },

    // Create dropdown element
    createDropdown: function (cellDef) {
      const select = document.createElement("select");
      select.className = "form-select form-select-sm";

      if (cellDef.dropdownId) {
        select.setAttribute("data-dropdown-id", cellDef.dropdownId);
      }
      if (cellDef.fieldId) {
        select.setAttribute("data-field-id", cellDef.fieldId);
      }

      // Add options
      if (cellDef.options && Array.isArray(cellDef.options)) {
        cellDef.options.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option.value;
          optionElement.textContent = option.name || option.value;

          if (option.value === cellDef.value) {
            optionElement.selected = true;
          }

          select.appendChild(optionElement);
        });
      }

      return select;
    },

    // Create editable element
    createEditable: function (cellDef) {
      const span = document.createElement("span");
      span.className = "editable";
      span.contentEditable = true;
      span.textContent = cellDef.value || "0";

      if (cellDef.fieldId) {
        span.setAttribute("data-field-id", cellDef.fieldId);
      }

      // Add custom classes
      if (cellDef.classes && Array.isArray(cellDef.classes)) {
        span.classList.add(...cellDef.classes);
      }

      return span;
    },

    // Create slider element
    createSlider: function (cellDef) {
      const container = document.createElement("div");
      container.className = "slider-container";

      const slider = document.createElement("input");
      slider.type = "range";
      slider.className = "form-range";
      slider.min = cellDef.min || 0;
      slider.max = cellDef.max || 100;
      slider.step = cellDef.step || 1;
      slider.value = cellDef.value || 50;

      if (cellDef.fieldId) {
        slider.setAttribute("data-field-id", cellDef.fieldId);
      }

      const valueDisplay = document.createElement("span");
      valueDisplay.className = "slider-value ms-2";
      valueDisplay.textContent = slider.value;

      // Update display on slider change
      slider.addEventListener("input", function () {
        valueDisplay.textContent = this.value;
      });

      container.appendChild(slider);
      container.appendChild(valueDisplay);

      return container;
    },

    // Create calculated/derived element
    createCalculated: function (cellDef) {
      const span = document.createElement("span");
      span.className = "calculated-value";
      span.textContent = cellDef.value || "0";

      if (cellDef.fieldId) {
        span.setAttribute("data-field-id", cellDef.fieldId);
      }

      // Add custom classes
      if (cellDef.classes && Array.isArray(cellDef.classes)) {
        span.classList.add(...cellDef.classes);
      }

      return span;
    },
  };

  // Expose the module
  window.TEUI.v4012.SectionRenderer = SectionRenderer;
})();
