// Conditional import for FOSS builds (license is EE-only)
let License: any;
try {
	License = require('@rocket.chat/license').License;
} catch {
	// Stub for FOSS builds
	License = {
		getLicense: () => null,
		hasValidLicense: () => false,
		hasModule: () => false,
		getModules: () => [],
		getTags: () => [],
	};
}

export const disableCustomScripts = () => {
	const license = License.getLicense();

	if (!license) {
		return false;
	}

	const isCustomScriptDisabled = process.env.DISABLE_CUSTOM_SCRIPTS === 'true';
	const isTrialLicense = license?.information.trial;

	return isCustomScriptDisabled && isTrialLicense;
};
