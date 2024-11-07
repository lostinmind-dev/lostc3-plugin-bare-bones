import { type LostConfig, STABLE, BETA, LTS } from "jsr:@lost-c3/lib@1.2.5";

const Config: LostConfig<'plugin'> = {
    Type: 'plugin',
    Deprecated: false,

    SupportsWorkerMode: false,
    MinConstructVersion: STABLE.R407_2,
    CanBeBundled: false,
    IsSingleGlobal: true,

    ObjectName: 'LostPluginName',
    AddonId: 'Lost_MyAddon',
    AddonName: 'Lost addon for Construct 3',
    AddonDescription: 'Amazing addon made with Lost.',
    Category: 'general',
    Version: '1.0.0.0',
    Author: 'lostinmind.',
    WebsiteURL: `https://addon.com`,
    DocsURL: `https://docs.addon.com`,

    Files: [
        {FileName: "styles.css", Type: 'copy-to-output'}
    ]

};

export default Config;