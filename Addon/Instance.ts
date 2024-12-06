class LostInstance extends globalThis.ISDKInstanceBase {

	readonly Conditions = globalThis.C3.Plugins[Lost.addonId].Cnds;

	constructor() {
		super();
		const properties = this._getInitProperties();

	}

	_release() {
		super._release();
	}

};

export type { LostInstance as Instance };