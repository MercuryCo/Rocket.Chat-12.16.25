import { PaletteStyleTag } from '@rocket.chat/fuselage';
// Conditional import for FOSS builds (ui-theming is EE-only)
let useThemeMode: () => [string, (mode: string) => void, any];
try {
	const uiTheming = require('@rocket.chat/ui-theming');
	useThemeMode = uiTheming.useThemeMode;
} catch {
	// ui-theming not available in FOSS builds - create stub
	useThemeMode = () => ['light', () => {}, {}];
}

import { codeBlock } from '../lib/codeBlockStyles';

export const MainLayoutStyleTags = () => {
	const [, , theme] = useThemeMode();

	return (
		<>
			<PaletteStyleTag theme={theme} selector='.rcx-content--main, .rcx-tile' tagId={`main-palette-${theme}`} />
			<PaletteStyleTag theme='dark' selector='.rcx-sidebar--main, .rcx-sidepanel, .rcx-navbar' tagId='sidebar-palette' />
			{theme === 'dark' && <PaletteStyleTag selector='.rcx-content--main' palette={codeBlock} tagId='codeBlock-palette' />}
		</>
	);
};
