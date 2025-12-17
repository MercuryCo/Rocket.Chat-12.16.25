import { css } from '@rocket.chat/css-in-js';
import { Box, SidebarDivider, Palette, SidebarFooter as Footer } from '@rocket.chat/fuselage';
import { useSetting } from '@rocket.chat/ui-contexts';
// Conditional import for FOSS builds (ui-theming is EE-only)
let useThemeMode: () => [string, (mode: string) => void, any];
try {
	const uiTheming = require('@rocket.chat/ui-theming');
	useThemeMode = uiTheming.useThemeMode;
} catch {
	// ui-theming not available in FOSS builds - create stub
	useThemeMode = () => ['light', () => {}, {}];
}
import DOMPurify from 'dompurify';
import type { ReactElement } from 'react';

import { SidebarFooterWatermark } from './SidebarFooterWatermark';

const SidebarFooterDefault = (): ReactElement => {
	const [, , theme] = useThemeMode();
	const logo = useSetting(theme === 'dark' ? 'Layout_Sidenav_Footer_Dark' : 'Layout_Sidenav_Footer', '').trim();

	const sidebarFooterStyle = css`
		& img {
			max-width: 100%;
			height: 100%;
		}

		& a:any-link {
			color: ${Palette.text['font-info']};
		}
	`;

	return (
		<Footer>
			<SidebarDivider />
			<Box
				is='footer'
				pb={12}
				pi={16}
				height='x48'
				width='auto'
				className={sidebarFooterStyle}
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(logo),
				}}
			/>
			<SidebarFooterWatermark />
		</Footer>
	);
};

export default SidebarFooterDefault;
