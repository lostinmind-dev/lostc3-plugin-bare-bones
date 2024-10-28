import Config from "../lost.config.ts";

const C3 = globalThis.C3;

class LostInstance extends globalThis.ISDKInstanceBase {

	readonly PluginConditions = C3.Plugins[Config.AddonId].Cnds;

	constructor() {
		super();
		const properties = this._getInitProperties();

        if (properties) {
			C3.Plugins['']
        }

	}

	_release() {
		super._release();
	}

};

C3.Plugins[Config.AddonId].Instance = LostInstance;
export type { LostInstance as Instance };