const ADDON_ID = "Lost_MyAddon";
const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins[ADDON_ID];
PLUGIN_CLASS.Type = class LostPluginType extends SDK.ITypeBase {
    constructor(sdkPlugin, iObjectType) {
        super(sdkPlugin, iObjectType);
    }
};
export {};