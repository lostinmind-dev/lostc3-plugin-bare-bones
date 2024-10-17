const Config = {"Type":"plugin","Deprecated":false,"SupportsWorkerMode":false,"MinConstructVersion":"r397-4","CanBeBundled":false,"IsSingleGlobal":true,"ObjectName":"LostPluginName","AddonId":"Lost_MyAddon","AddonName":"Lost addon for Construct 3","AddonDescription":"Amazing addon made with Lost.","Category":"general","Version":"1.0.0.0","Author":"lostinmind.","WebsiteURL":"https://addon.com","DocsURL":"https://docs.addon.com"};
const C3 = globalThis.C3;
class LostInstance extends globalThis.ISDKInstanceBase {
    constructor() {
        super();
        this.PluginConditions = C3.Plugins[Config.AddonId].Cnds;
        const properties = this._getInitProperties();
        if (properties) {
        }
    }
    _release() {
        super._release();
    }
}
;
C3.Plugins[Config.AddonId].Instance = LostInstance;
