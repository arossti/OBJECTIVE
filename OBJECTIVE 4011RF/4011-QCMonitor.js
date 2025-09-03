/**
 * 4011-QCMonitor.js
 * 
 * Quality Control Monitor for TEUI 4.011 Calculator
 * Systematic detection of state mixing violations and dependency issues
 * 
 * Implements the QC framework from 4012-QC.md for automated debugging
 * of dual-state architecture compliance across all 15 sections.
 */

// Ensure TEUI namespace exists
window.TEUI = window.TEUI || {};

TEUI.QCMonitor = (function() {
    
    // QC Monitor state
    let isActive = false;
    let baseline = new Map();
    let violations = [];
    let staleDetector = new Map();
    let pathwayTracker = new Map();
    let mirrorTargetMode = false;
    
    // Performance tracking
    let monitoringOverhead = {
        startTime: 0,
        totalCalls: 0,
        totalTime: 0
    };
    
    /**
     * Initialize the QC Monitor
     * Only activates when ?qc=true in URL for zero production overhead
     */
    function initialize() {
        // Check if QC monitoring is requested
        const urlParams = new URLSearchParams(window.location.search);
        isActive = urlParams.get('qc') === 'true';
        
        if (!isActive) {
            console.log('[QCMonitor] QC monitoring disabled. Add ?qc=true to URL to activate.');
            return false;
        }
        
        console.log('[QCMonitor] 🔍 Quality Control monitoring ACTIVATED');
        console.log('[QCMonitor] Systematic state mixing detection enabled');
        
        // Initialize tracking structures
        baseline.clear();
        violations = [];
        staleDetector.clear();
        pathwayTracker.clear();
        
        // Hook into StateManager if available
        if (window.TEUI?.StateManager) {
            instrumentStateManager();
        } else {
            console.warn('[QCMonitor] StateManager not available for instrumentation');
        }
        
        // Set up periodic violation checking
        setInterval(performPeriodicChecks, 1000); // Every second
        
        // Initialize Mirror Target baseline if requested
        const mirrorTarget = urlParams.get('mirror') === 'true';
        if (mirrorTarget) {
            initializeMirrorTarget();
        }
        
        return true;
    }
    
    /**
     * Initialize Mirror Target baseline validation
     * Reference defaults = Target defaults for identical model comparison
     */
    function initializeMirrorTarget() {
        mirrorTargetMode = true;
        console.log('[QCMonitor] 🎯 Mirror Target baseline validation enabled');
        
        // Wait for StateManager to be fully initialized
        setTimeout(() => {
            if (!window.TEUI?.StateManager) {
                console.error('[QCMonitor] StateManager not available for Mirror Target init');
                return;
            }
            
            // Get all current Target values as baseline
            const stateManager = window.TEUI.StateManager;
            const targetBaseline = new Map();
            const referenceBaseline = new Map();
            
            // Collect current state
            if (typeof stateManager.getAllValues === 'function') {
                const allValues = stateManager.getAllValues();
                
                Object.entries(allValues).forEach(([key, value]) => {
                    if (key.startsWith('ref_')) {
                        // Reference value
                        const baseKey = key.substring(4); // Remove 'ref_' prefix
                        referenceBaseline.set(baseKey, value);
                    } else {
                        // Target value
                        targetBaseline.set(key, value);
                    }
                });
            }
            
            // Store baselines
            baseline.set('Target', targetBaseline);
            baseline.set('Reference', referenceBaseline);
            
            console.log(`[QCMonitor] Mirror Target baseline captured: ${targetBaseline.size} Target, ${referenceBaseline.size} Reference values`);
            
            // Immediate baseline comparison
            detectStateMixing();
            
        }, 2000); // Allow time for initialization
    }
    
    /**
     * Instrument StateManager to monitor setValue/getValue operations
     */
    function instrumentStateManager() {
        const stateManager = window.TEUI.StateManager;
        
        // Store original methods
        const originalSetValue = stateManager.setValue;
        const originalGetValue = stateManager.getValue;
        
        // Instrument setValue
        stateManager.setValue = function(fieldId, value, source) {
            const startTime = performance.now();
            
            // Track the write operation
            trackWrite(fieldId, value, source, startTime);
            
            // Call original method
            const result = originalSetValue.call(this, fieldId, value, source);
            
            // Update performance metrics
            updatePerformanceMetrics(startTime);
            
            return result;
        };
        
        // Instrument getValue  
        stateManager.getValue = function(fieldId) {
            const startTime = performance.now();
            
            // Call original method
            const result = originalGetValue.call(this, fieldId);
            
            // Track the read operation
            trackRead(fieldId, result, startTime);
            
            // Update performance metrics
            updatePerformanceMetrics(startTime);
            
            return result;
        };
        
        console.log('[QCMonitor] StateManager instrumentation complete');
    }
    
    /**
     * Track write operations (setValue calls)
     */
    function trackWrite(fieldId, value, source, timestamp) {
        if (!isActive) return;
        
        // Detect potential state mixing violations
        if (mirrorTargetMode) {
            checkMirrorTargetViolation(fieldId, value, source);
        }
        
        // Track staleness
        staleDetector.set(fieldId, {
            lastWrite: timestamp,
            value: value,
            source: source
        });
        
        // Track pathway - mark as written
        updatePathwayTracker(fieldId, 'written', { value, source, timestamp });
        
        // Log significant writes for debugging
        if (shouldLogWrite(fieldId, source)) {
            console.log(`[QCMonitor] 📝 Write: ${fieldId}="${value}" (${source}) at ${timestamp.toFixed(2)}ms`);
        }
    }
    
    /**
     * Track read operations (getValue calls) with caller tracing
     */
    function trackRead(fieldId, value, timestamp) {
        if (!isActive) return;
        
        // Get caller information for debugging
        const caller = getCaller();
        
        // Track pathway - mark as read
        updatePathwayTracker(fieldId, 'read', { value, timestamp, caller });
        
        // Detect fallback usage (indicates missing values)
        if (value === null || value === undefined) {
            logViolation({
                type: 'MISSING_VALUE',
                field: fieldId,
                message: `${fieldId}=null, caller=${caller}`,
                timestamp: timestamp,
                severity: 'warning',
                caller: caller
            });
        }
    }
    
    /**
     * Get detailed caller information from stack trace  
     */
    function getCaller() {
        try {
            const stack = new Error().stack;
            const lines = stack.split('\n');
            
            // Find first meaningful caller (skip QCMonitor internals)
            for (let i = 3; i < lines.length; i++) {
                const line = lines[i];
                if (line && !line.includes('QCMonitor') && !line.includes('trackRead') && !line.includes('trackWrite')) {
                    // Enhanced pattern matching for better caller identification
                    const match = line.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
                    if (match) {
                        const func = match[1] || 'anonymous';
                        const file = match[2].split('/').pop() || 'unknown';
                        const lineNum = match[3];
                        const colNum = match[4];
                        return `${func}@${file}:${lineNum}:${colNum}`;
                    }
                    
                    // Try alternative pattern for different browsers
                    const altMatch = line.match(/(\w+)@(.+?):(\d+):(\d+)/);
                    if (altMatch) {
                        const func = altMatch[1];
                        const file = altMatch[2].split('/').pop();
                        const lineNum = altMatch[3];
                        return `${func}@${file}:${lineNum}`;
                    }
                    
                    // Fallback: return more of the line for manual inspection
                    return line.trim().substring(0, 60).replace(/\s+/g, ' ');
                }
            }
            return 'no-meaningful-caller';
        } catch (e) {
            return `trace-error: ${e.message}`;
        }
    }
    
    /**
     * Check for Mirror Target violations
     */
    function checkMirrorTargetViolation(fieldId, value, source) {
        if (!mirrorTargetMode) return;
        
        const targetBaseline = baseline.get('Target');
        const referenceBaseline = baseline.get('Reference');
        
        if (!targetBaseline || !referenceBaseline) return;
        
        // Check if this is a field that should match between Target and Reference
        if (fieldId.startsWith('ref_')) {
            // Reference field - compare with Target equivalent
            const baseField = fieldId.substring(4);
            const targetValue = targetBaseline.get(baseField);
            
            if (shouldMatch(baseField) && targetValue !== value) {
                logViolation({
                    type: 'MIRROR_TARGET_DIVERGENCE',
                    field: fieldId,
                    message: `Reference ${fieldId}="${value}" diverges from Target ${baseField}="${targetValue}"`,
                    expected: targetValue,
                    actual: value,
                    severity: 'error'
                });
            }
        } else {
            // Target field - compare with Reference equivalent  
            const refField = `ref_${fieldId}`;
            const referenceValue = referenceBaseline.get(fieldId);
            
            if (shouldMatch(fieldId) && referenceValue !== value) {
                logViolation({
                    type: 'MIRROR_TARGET_DIVERGENCE', 
                    field: fieldId,
                    message: `Target ${fieldId}="${value}" diverges from Reference ref_${fieldId}="${referenceValue}"`,
                    expected: referenceValue,
                    actual: value,
                    severity: 'error'
                });
            }
        }
    }
    
    /**
     * Determine if a field should match between Target and Reference in Mirror Target mode
     */
    function shouldMatch(fieldId) {
        // Fields that should be identical in Mirror Target mode
        const mirrorFields = [
            // Building geometry (should be same for both models)
            'h_15', 'd_85', 'd_86', 'd_89', 'd_90', 'd_91', 'd_92', 'd_95',
            
            // Climate data (same location for both models)  
            'd_20', 'd_21', 'd_23', 'd_24',
            
            // Occupancy (same building use for both models)
            'd_63', 'd_12',
            
            // Areas and volumes (same building for both models)
            'd_105', 'i_101', 'i_102', 'i_103', 'i_104'
        ];
        
        return mirrorFields.includes(fieldId);
    }
    
    /**
     * Update pathway tracking for a field
     */
    function updatePathwayTracker(fieldId, operation, metadata) {
        if (!pathwayTracker.has(fieldId)) {
            pathwayTracker.set(fieldId, {
                read: false,
                calculated: false, 
                written: false,
                operations: []
            });
        }
        
        const tracker = pathwayTracker.get(fieldId);
        tracker[operation] = true;
        tracker.operations.push({
            operation,
            timestamp: performance.now(),
            ...metadata
        });
        
        // Check for pathway violations
        if (operation === 'calculated' && !tracker.written) {
            // Calculated but not written - potential violation
            setTimeout(() => {
                const updatedTracker = pathwayTracker.get(fieldId);
                if (updatedTracker && updatedTracker.calculated && !updatedTracker.written) {
                    logViolation({
                        type: 'CALCULATED_NOT_WRITTEN',
                        field: fieldId,
                        message: `Field ${fieldId} was calculated but never written to StateManager`,
                        severity: 'error'
                    });
                }
            }, 100); // Give some time for write to occur
        }
    }
    
    /**
     * Detect state mixing violations
     */
    function detectStateMixing() {
        if (!mirrorTargetMode) return [];
        
        const violations = [];
        const targetBaseline = baseline.get('Target');
        const referenceBaseline = baseline.get('Reference');
        
        if (!targetBaseline || !referenceBaseline) return violations;
        
        // Check for divergence in fields that should match
        for (const [fieldId, targetValue] of targetBaseline) {
            if (shouldMatch(fieldId)) {
                const referenceValue = referenceBaseline.get(fieldId);
                
                if (referenceValue !== targetValue) {
                    violations.push({
                        type: 'BASELINE_DIVERGENCE',
                        field: fieldId,
                        reference: referenceValue,
                        target: targetValue,
                        message: `Field ${fieldId} diverged: Target="${targetValue}", Reference="${referenceValue}"`
                    });
                }
            }
        }
        
        return violations;
    }
    
    /**
     * Detect stale values (values that haven't been updated recently)
     */
    function detectStaleValues() {
        const staleThreshold = 5000; // 5 seconds
        const currentTime = performance.now();
        const violations = [];
        
        for (const [fieldId, metadata] of staleDetector) {
            if (currentTime - metadata.lastWrite > staleThreshold) {
                violations.push({
                    type: 'STALE_VALUE',
                    field: fieldId,
                    age: currentTime - metadata.lastWrite,
                    lastValue: metadata.value,
                    message: `Field ${fieldId} hasn't been updated in ${((currentTime - metadata.lastWrite) / 1000).toFixed(1)}s`
                });
            }
        }
        
        return violations;
    }
    
    /**
     * Detect pathway violations (calculated but not written, etc.)
     */
    function detectPathwayViolations() {
        const violations = [];
        
        for (const [fieldId, tracker] of pathwayTracker) {
            // Check for calculated but not written
            if (tracker.calculated && !tracker.written) {
                violations.push({
                    type: 'CALCULATED_NOT_WRITTEN',
                    field: fieldId,
                    message: `Field ${fieldId} was calculated but never written to StateManager`
                });
            }
            
            // Check for reads from missing sources
            const readOps = tracker.operations.filter(op => op.operation === 'read');
            const nullReads = readOps.filter(op => op.value === null || op.value === undefined);
            
            if (nullReads.length > 0) {
                violations.push({
                    type: 'FALLBACK_READ',
                    field: fieldId,
                    count: nullReads.length,
                    message: `Field ${fieldId} returned null/undefined ${nullReads.length} times`
                });
            }
        }
        
        return violations;
    }
    
    /**
     * Get all current violations
     */
    function getAllViolations() {
        let allViolations = [...violations]; // Current logged violations
        
        // Add fresh detection results
        allViolations = allViolations.concat(detectStateMixing());
        allViolations = allViolations.concat(detectStaleValues()); 
        allViolations = allViolations.concat(detectPathwayViolations());
        
        return allViolations;
    }
    
    /**
     * Generate comprehensive QC report
     */
    function generateQCReport() {
        const allViolations = getAllViolations();
        
        const report = {
            timestamp: new Date().toISOString(),
            monitoring: {
                active: isActive,
                mirrorTarget: mirrorTargetMode,
                overhead: {
                    totalCalls: monitoringOverhead.totalCalls,
                    avgTime: monitoringOverhead.totalCalls > 0 ? 
                        (monitoringOverhead.totalTime / monitoringOverhead.totalCalls).toFixed(3) + 'ms' : '0ms',
                    totalTime: monitoringOverhead.totalTime.toFixed(3) + 'ms'
                }
            },
            summary: {
                total: allViolations.length,
                byType: allViolations.reduce((acc, v) => {
                    acc[v.type] = (acc[v.type] || 0) + 1;
                    return acc;
                }, {}),
                bySeverity: allViolations.reduce((acc, v) => {
                    const severity = v.severity || 'info';
                    acc[severity] = (acc[severity] || 0) + 1;
                    return acc;
                }, {})
            },
            violations: allViolations.sort((a, b) => {
                // Sort by severity (error > warning > info)
                const severityOrder = { error: 3, warning: 2, info: 1 };
                return (severityOrder[b.severity] || 1) - (severityOrder[a.severity] || 1);
            })
        };
        
        // Console output
        if (allViolations.length > 0) {
            console.group('[QCMonitor] 🚨 QUALITY CONTROL REPORT');
            console.log(`Total violations: ${report.summary.total}`);
            console.table(report.summary.byType);
            
            if (report.violations.length > 0) {
                console.group('Violations by severity:');
                report.violations.forEach(violation => {
                    const emoji = violation.severity === 'error' ? '❌' : 
                                 violation.severity === 'warning' ? '⚠️' : 'ℹ️';
                    console.log(`${emoji} ${violation.type}: ${violation.message}`);
                });
                console.groupEnd();
            }
            
            console.groupEnd();
        } else {
            console.log('[QCMonitor] ✅ No violations detected');
        }
        
        return report;
    }
    
    /**
     * Perform periodic checks (called every second)
     */
    function performPeriodicChecks() {
        if (!isActive) return;
        
        // Check for new violations
        const newViolations = detectStateMixing()
            .concat(detectStaleValues())
            .concat(detectStateContamination())
            .concat(detectMissingRefValues());
        
        // Log any new critical violations immediately
        newViolations.forEach(violation => {
            if (violation.severity === 'error') {
                console.error(`[QCMonitor] 🚨 ${violation.type}: ${violation.message}`);
            }
        });
    }
    
    /**
     * Detect state contamination by checking for suspicious value patterns
     */
    function detectStateContamination() {
        if (!window.TEUI?.StateManager) return [];
        
        const violations = [];
        const stateManager = window.TEUI.StateManager;
        
        // Check for known contamination patterns
        const criticalFields = ['h_10', 'e_10', 'j_32', 'k_32'];
        
        criticalFields.forEach(fieldId => {
            const targetValue = stateManager.getValue(fieldId);
            const refValue = stateManager.getValue(`ref_${fieldId}`);
            
            // If both exist and are identical, might be contamination
            if (targetValue && refValue && targetValue === refValue) {
                violations.push({
                    type: 'POTENTIAL_STATE_CONTAMINATION',
                    field: fieldId,
                    message: `Target and Reference values are identical: ${targetValue}`,
                    severity: 'warning',
                    target: targetValue,
                    reference: refValue
                });
            }
        });
        
        return violations;
    }
    
    /**
     * Detect missing Reference values that should exist
     */
    function detectMissingRefValues() {
        if (!window.TEUI?.StateManager) return [];
        
        const violations = [];
        const stateManager = window.TEUI.StateManager;
        
        // Check for missing ref_ values where Target values exist
        const expectedRefFields = ['d_20', 'd_21', 'h_15', 'j_32', 'k_32', 'i_98'];
        
        expectedRefFields.forEach(fieldId => {
            const targetValue = stateManager.getValue(fieldId);
            const refValue = stateManager.getValue(`ref_${fieldId}`);
            
            if (targetValue && !refValue) {
                violations.push({
                    type: 'MISSING_REFERENCE_VALUE',
                    field: `ref_${fieldId}`,
                    message: `Target ${fieldId} exists but ref_${fieldId} is missing`,
                    severity: 'error',
                    targetValue: targetValue
                });
            }
        });
        
        return violations;
    }
    
    /**
     * Analyze current StateManager contents for debugging
     */
    function analyzeStateManagerContents() {
        if (!window.TEUI?.StateManager) return null;
        
        const stateManager = window.TEUI.StateManager;
        const analysis = {
            totalFields: 0,
            targetFields: 0,
            referenceFields: 0,
            suspiciousPatterns: [],
            sampleFields: {}
        };
        
        // Try to get all values if method exists
        if (typeof stateManager.getAllValues === 'function') {
            const allValues = stateManager.getAllValues();
            
            Object.entries(allValues).forEach(([key, value]) => {
                analysis.totalFields++;
                analysis.sampleFields[key] = value;
                
                if (key.startsWith('ref_')) {
                    analysis.referenceFields++;
                } else {
                    analysis.targetFields++;
                }
            });
        } else {
            // Fallback: check specific known fields
            const knownFields = ['h_10', 'e_10', 'j_32', 'k_32', 'd_20', 'd_21', 'h_15'];
            
            knownFields.forEach(fieldId => {
                const targetValue = stateManager.getValue(fieldId);
                const refValue = stateManager.getValue(`ref_${fieldId}`);
                
                if (targetValue !== null) {
                    analysis.targetFields++;
                    analysis.sampleFields[fieldId] = targetValue;
                }
                if (refValue !== null) {
                    analysis.referenceFields++;
                    analysis.sampleFields[`ref_${fieldId}`] = refValue;
                }
            });
        }
        
        console.group('[QCMonitor] 📊 StateManager Analysis');
        console.log(`Total fields: ${analysis.totalFields}`);
        console.log(`Target fields: ${analysis.targetFields}`);
        console.log(`Reference fields: ${analysis.referenceFields}`);
        console.log('Sample fields:', analysis.sampleFields);
        console.groupEnd();
        
        return analysis;
    }
    
    /**
     * Log a violation
     */
    function logViolation(violation) {
        violation.timestamp = violation.timestamp || performance.now();
        violation.id = `${violation.type}_${violation.field}_${Date.now()}`;
        
        violations.push(violation);
        
        // Immediate console output for critical violations
        if (violation.severity === 'error') {
            console.error(`[QCMonitor] 🚨 ${violation.type}: ${violation.message}`);
        } else if (violation.severity === 'warning') {
            console.warn(`[QCMonitor] ⚠️ ${violation.type}: ${violation.message}`);
        }
    }
    
    /**
     * Determine if a write operation should be logged
     */
    function shouldLogWrite(fieldId, source) {
        // Log critical fields and state mixing indicators
        const criticalFields = ['h_10', 'e_10', 'j_32', 'k_32', 'ref_j_32', 'ref_k_32'];
        const criticalSources = ['calculated', 'user-modified'];
        
        return criticalFields.includes(fieldId) || criticalSources.includes(source);
    }
    
    /**
     * Update performance metrics
     */
    function updatePerformanceMetrics(startTime) {
        const duration = performance.now() - startTime;
        monitoringOverhead.totalCalls++;
        monitoringOverhead.totalTime += duration;
    }
    
    /**
     * Create QC Dashboard UI (basic implementation)
     */
    function createQCDashboard() {
        if (!isActive) return;
        
        // Create dashboard container
        const dashboard = document.createElement('div');
        dashboard.id = 'qc-dashboard';
        dashboard.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            width: 300px;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            z-index: 10000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-size: 12px;
        `;
        
        // Dashboard content
        dashboard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h6 style="margin: 0; color: #333;">QC Monitor</h6>
                <button id="qc-close" style="border: none; background: none; font-size: 16px; cursor: pointer;">×</button>
            </div>
            <div id="qc-status">
                <div>Status: <span style="color: green;">Active</span></div>
                <div>Mirror Target: <span>${mirrorTargetMode ? 'Enabled' : 'Disabled'}</span></div>
            </div>
            <div id="qc-violations" style="margin-top: 10px;">
                <div>Violations: <span id="violation-count">0</span></div>
                <div style="font-size: 10px; color: #666; margin-top: 5px;">
                    <span id="error-count">0 errors</span> | 
                    <span id="warning-count">0 warnings</span>
                </div>
            </div>
            <button id="qc-report" style="width: 100%; margin-top: 10px; padding: 5px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Generate Report
            </button>
        `;
        
        // Add event listeners
        dashboard.querySelector('#qc-close').onclick = () => dashboard.remove();
        dashboard.querySelector('#qc-report').onclick = () => generateQCReport();
        
        // Append to body
        document.body.appendChild(dashboard);
        
        // Update dashboard every 2 seconds
        setInterval(updateQCDashboard, 2000);
        
        console.log('[QCMonitor] QC Dashboard created');
    }
    
    /**
     * Update QC Dashboard with current violation counts
     */
    function updateQCDashboard() {
        const dashboard = document.getElementById('qc-dashboard');
        if (!dashboard) return;
        
        const allViolations = getAllViolations();
        const errorCount = allViolations.filter(v => v.severity === 'error').length;
        const warningCount = allViolations.filter(v => v.severity === 'warning').length;
        
        const violationCountEl = dashboard.querySelector('#violation-count');
        const errorCountEl = dashboard.querySelector('#error-count');
        const warningCountEl = dashboard.querySelector('#warning-count');
        
        if (violationCountEl) violationCountEl.textContent = allViolations.length;
        if (errorCountEl) errorCountEl.textContent = `${errorCount} errors`;
        if (warningCountEl) warningCountEl.textContent = `${warningCount} warnings`;
        
        // Update colors based on violation severity
        if (errorCount > 0) {
            violationCountEl.style.color = 'red';
        } else if (warningCount > 0) {
            violationCountEl.style.color = 'orange';
        } else {
            violationCountEl.style.color = 'green';
        }
    }
    
    /**
     * Force activate QC monitoring (for Section 18 toggle)
     */
    function forceActivate() {
        isActive = true;
        console.log('[QCMonitor] 🔍 Force activated by Section 18');
        
        // Initialize tracking structures
        baseline.clear();
        violations = [];
        staleDetector.clear();
        pathwayTracker.clear();
        
        // Hook into StateManager if available
        if (window.TEUI?.StateManager) {
            instrumentStateManager();
        }
        
        return true;
    }
    
    /**
     * Force deactivate QC monitoring
     */
    function forceDeactivate() {
        isActive = false;
        console.log('[QCMonitor] QC monitoring deactivated');
        return false;
    }

    // Public API
    return {
        initialize,
        isActive: () => isActive,
        generateQCReport,
        getAllViolations,
        detectStateMixing,
        detectStaleValues,
        detectPathwayViolations,
        detectStateContamination,
        detectMissingRefValues,
        analyzeStateManagerContents,
        initializeMirrorTarget,
        createQCDashboard,
        logViolation,
        forceActivate,
        forceDeactivate
    };
    
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure other modules are loaded
    setTimeout(() => {
        if (TEUI.QCMonitor.initialize()) {
            // Create dashboard if QC is active
            setTimeout(() => {
                TEUI.QCMonitor.createQCDashboard();
            }, 1000);
        }
    }, 500);
});

// Export for global access
window.TEUI.QCMonitor = TEUI.QCMonitor;
