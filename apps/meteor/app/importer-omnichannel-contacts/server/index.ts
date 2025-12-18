// Conditional import for FOSS builds (license is EE-only)
let License: any;
try {
	License = require('@rocket.chat/license').License;
} catch {
	// Stub for FOSS builds - no-op
	License = {
		onValidFeature: () => {
			// No-op for FOSS builds - feature not available
		},
	};
}

import { ContactImporter } from './ContactImporter';
import { Importers } from '../../importer/server';

License.onValidFeature('contact-id-verification', () => {
	Importers.add({
		key: 'omnichannel_contact',
		name: 'omnichannel_contacts_importer',
		importer: ContactImporter,
	});
});
