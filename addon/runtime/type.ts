import type { Instance } from "@runtime/instance.ts";

class LostType extends globalThis.ISDKObjectTypeBase<Instance> {
	constructor() {
		super();
	}
	
	_onCreate() {}
};

/** Important to save export type for Typescript compiler */
export type { LostType };