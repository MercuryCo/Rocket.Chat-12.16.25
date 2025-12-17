// Stub implementation for FOSS builds
// This package provides a minimal implementation of license for builds without EE

export const License = {
	hasModule: () => false,
	hasValidLicense: () => false,
	getModules: () => [],
	getTags: () => [],
};

