import { Plugin, Property, defineAddon } from './deps.ts';
import config from './lost.config.ts';

export default defineAddon(
    new Plugin<'object'>(config)
        /** @Settings */
        /** @Properties */
        .addProperty('te', 'test', {
            type: Property.Text
        })
);