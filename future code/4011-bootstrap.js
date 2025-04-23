// In a new file: 4011-bootstrap.js
window.TEUI = window.TEUI || {};

TEUI.bootstrap = function() {
    // Initialize components in correct order
    TEUI.StateManager.initialize();
    TEUI.FieldRenderer.renderAllSections();
    TEUI.ComponentBridge.initAll();
    TEUI.Calculator.initialize();
    
    console.log('TEUI Calculator 4.011 initialization complete');
};

// Call when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if all dependencies are loaded
    if (TEUI.StateManager && TEUI.FieldRenderer && 
        TEUI.ComponentBridge && TEUI.Calculator) {
        TEUI.bootstrap();
    } else {
        console.error('Missing TEUI dependencies. Check script loading order.');
    }
});