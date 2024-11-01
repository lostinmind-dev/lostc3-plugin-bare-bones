import * as MyModule from './Modules/mymodule.js';

const C3 = globalThis.C3;

class LostInstance extends globalThis.ISDKInstanceBase {

	readonly PluginConditions = C3.Plugins[Config.AddonId].Cnds;
	constructor() {
		super();
		const properties = this._getInitProperties();

		console.log(MyModule.VAR);

        if (properties) {

        }

	}

	_release() {
		super._release();
	}

};

C3.Plugins[Config.AddonId].Instance = LostInstance;
export type { LostInstance as Instance };