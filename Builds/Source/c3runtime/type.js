const ADDON_ID = "Lost_MyAddon";
const C3 = globalThis.C3;
C3.Plugins[ADDON_ID].Type = class LType extends globalThis.ISDKObjectTypeBase {
    constructor() {
        super();
    }
    _onCreate() { }
};