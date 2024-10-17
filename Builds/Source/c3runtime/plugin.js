const ADDON_ID = "Lost_MyAddon";
const C3 = globalThis.C3;
C3.Plugins[ADDON_ID] = class LostPlugin extends globalThis.ISDKPluginBase {
    constructor() {
        super();
    }
};