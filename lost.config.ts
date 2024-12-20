import { defineConfig } from "./deps.ts";

export default defineConfig<'plugin', 'object'>({
    type: 'plugin',
    pluginType: 'object',
    // deprecated?: boolean;
    // minConstructVersion?: string;
    // canBeBundled?: boolean;
    isSingleGlobal: true,
    objectName: 'LostPlugin',

    addonId: 'LostPluginId',
    category: 'general',
    addonName: 'Lost plugin for Construct 3',
    addonDescription: 'My awesome addon was made with Lost',
    version: '1.0.0.0',
    author: 'lostinmind.',
    docsUrl: 'https://myaddon.com/docs',
    helpUrl: 'https://myaddon.com/help/en',
    websiteUrl: 'https://myaddon.com'
})
