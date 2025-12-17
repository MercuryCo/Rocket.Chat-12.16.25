// Stub implementation for FOSS builds
// This package provides a minimal implementation of ui-theming for builds without EE

export const useThemeMode = (): [string, (mode: string) => void, any] => {
	// Return default theme mode (light) with no-op setter
	return ['light', () => {}, {}];
};

