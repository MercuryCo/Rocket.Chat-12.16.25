// Stub implementation for FOSS builds
// This package provides a minimal implementation of ui-theming for builds without EE

// Type definitions to match real implementation
type ThemeMode = 'light' | 'dark' | 'auto' | 'high-contrast';
type Themes = 'light' | 'dark' | 'high-contrast';

/**
 * Returns the current theme mode, a function to set it, and the resolved theme.
 * Stub implementation always returns 'light' theme.
 * @returns [currentThemeMode, setThemeMode, resolvedThemeMode]
 */
export const useThemeMode = (): [ThemeMode, (value: ThemeMode) => () => void, Themes] => {
	// Return default theme mode (light) with no-op setter
	// The setter function takes a ThemeMode and returns a no-op function
	const setTheme = (value: ThemeMode): (() => void) => {
		return () => {
			// No-op: FOSS builds don't support theme changes
		};
	};
	return ['light', setTheme, 'light'];
};
