## QC Report 9/6/2025

**Summary**: 771 violations detected
**Types**: HIGH_TRAFFIC_STALE_VALUE(216), NORMAL_STALE_VALUE(443), CRITICAL_STALE_VALUE(13), UPSTREAM_STALE_VALUE(14), FALLBACK_READ(85)
**Sections**: All Sections
**Status**: QC monitoring active, Mirror Target disabled

### Violation Categories:
- **💤 Normal Stale (low priority)**: 443 violations
- **⚠️ High Traffic Stale (calculation issues)**: 221 violations
- **unknown (unknown category)**: 85 violations
- **📤 Upstream Stale (normal for input fields)**: 14 violations
- **🔥 Critical Integration Stale (affects data flow)**: 8 violations

### Top Priority Violations:
#### 🔥 Critical Issues (8):
- **CRITICAL_STALE_VALUE**: `ref_h_136` - Critical integration field ref_h_136 stale for 11.4s - Reference TEUI Summary feeds dashboard
- **CRITICAL_STALE_VALUE**: `ref_d_144` - Critical integration field ref_d_144 stale for 11.4s - Reference reduction % feeds dashboard
- **CRITICAL_STALE_VALUE**: `h_136` - Critical integration field h_136 stale for 11.4s - TEUI Summary feeds dashboard
- **CRITICAL_STALE_VALUE**: `d_144` - Critical integration field d_144 stale for 11.4s - Reduction % feeds dashboard
- **CRITICAL_STALE_VALUE**: `f_32` - Critical integration field f_32 stale for 11.4s - Actual energy total for emissions
- **CRITICAL_STALE_VALUE**: `j_32` - Critical integration field j_32 stale for 11.4s - Target energy total for TEUI calc
- **CRITICAL_STALE_VALUE**: `ref_f_32` - Critical integration field ref_f_32 stale for 11.4s - Reference actual energy total
- **CRITICAL_STALE_VALUE**: `ref_j_32` - Critical integration field ref_j_32 stale for 11.4s - Reference target energy total

#### ⚠️ Top Warnings (10 shown):
- **HIGH_TRAFFIC_STALE_VALUE**: `d_60` - High-traffic field d_60 stale for 11.0s (11 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `ref_d_101` - High-traffic field ref_d_101 stale for 11.5s (154 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `d_135` - High-traffic field d_135 stale for 11.4s (80 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `d_136` - High-traffic field d_136 stale for 11.4s (7 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `ref_d_102` - High-traffic field ref_d_102 stale for 11.5s (78 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `ref_d_106` - High-traffic field ref_d_106 stale for 11.5s (11 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `i_39` - High-traffic field i_39 stale for 11.4s (21 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `d_38` - High-traffic field d_38 stale for 11.4s (21 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `g_38` - High-traffic field g_38 stale for 11.4s (17 reads) - may indicate calculation issue
- **HIGH_TRAFFIC_STALE_VALUE**: `i_38` - High-traffic field i_38 stale for 11.4s (8 reads) - may indicate calculation issue

*For complete detailed report, visit S18 Notes section*