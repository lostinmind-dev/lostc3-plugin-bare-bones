import type { Instance } from "@Runtime/Instance.ts";

class LostType extends globalThis.ISDKObjectTypeBase<Instance> {
	constructor() {
		super();
	}
	
	_onCreate() {}
};

/** Important to save export type for Typescript compiler */
export type { LostType };