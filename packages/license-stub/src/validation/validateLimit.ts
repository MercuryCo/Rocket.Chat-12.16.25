// Stub implementation for FOSS builds
// This package provides a minimal implementation of license validation for builds without EE

export const validateWarnLimit = (max: number, value: number, behavior: string): boolean => {
	// Always return false (no warnings in FOSS builds)
	return false;
};

