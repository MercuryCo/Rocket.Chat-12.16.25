// Stub implementation for FOSS builds
// This package provides a minimal implementation of license for builds without EE

type LicenseCallback = () => void | Promise<void>;

export const License = {
	hasModule: () => false,
	hasValidLicense: () => false,
	getModules: () => [],
	getTags: () => [],
	// Event handlers - no-op in FOSS builds
	onLimitReached: (_limit: string, _callback: LicenseCallback): void => {
		// No-op: FOSS builds don't have license limits
	},
	onValidateLicense: (_callback: LicenseCallback): void => {
		// No-op: FOSS builds don't validate licenses
	},
	onInvalidateLicense: (_callback: LicenseCallback): void => {
		// No-op: FOSS builds don't have license invalidation
	},
	onRemoveLicense: (_callback: LicenseCallback): void => {
		// No-op: FOSS builds don't have license removal
	},
	onModule: (_callback: LicenseCallback): void => {
		// No-op: FOSS builds don't have module callbacks
	},
	// Action prevention - always allow in FOSS builds
	shouldPreventAction: async (_limit: string): Promise<boolean> => {
		// Always return false (don't prevent) in FOSS builds
		return false;
	},
};

