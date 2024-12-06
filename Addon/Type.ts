import type { Instance } from "@Runtime/Instance.ts";

class LostType extends globalThis.ISDKObjectTypeBase<Instance> {
	constructor() {
		super();
	}
	
	_onCreate() {}
};

export type { LostType };