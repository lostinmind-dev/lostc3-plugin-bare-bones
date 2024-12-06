import { defineAddon, Plugin, Property } from "./deps.ts";
import type { EditorInstance } from "@Editor/Instance.ts";
import type { EditorType } from "@Editor/Type.ts";
import config from "./lost.config.ts";


export default defineAddon(
    new Plugin<EditorInstance, EditorType>(config)
        /** Adds files to project bundle */
        .addFilesToOutput()

        /** Change script dependencyType to: 'external-runtime-script' */
        .setRuntimeScripts()

        /** Adds a remote URL to load a script from. */
        .addRemoteScripts('https://cdn.com/index.js')

        /** @Properties  */
        .addProperty('integer', 'Integer', { type: Property.Integer })
        .addProperty('float', 'Float', { type: Property.Float })
        .addProperty('percent', 'Percent', { type: Property.Percent })
        .addProperty('text', 'Text', { type: Property.Text })
        .addProperty('longText', 'Long Text', { type: Property.LongText })
        .addProperty('check', 'Check', { type: Property.Checkbox })
        .addProperty('font', 'Font', { type: Property.Font })
        .addProperty('combo', 'Combo', {
            type: Property.Combo,
            items: [['item1', 'item2']]
        })
        .addProperty('color', 'Color', { type: Property.Color, initialValue: [255, 210, 155] })
        .createGroup('group', 'Awesome Group')
            .addProperty('info', 'Info', { type: Property.Info, callback: () => { return 'Lost' } })
            .addProperty('link', 'Link', {
                type: Property.Link,
                callbackType: 'for-each-instance',
                callback: (inst) => {
                    console.log('Link property for each instance');
                }
            })
            .addProperty('link2', 'Link', {
                type: Property.Link,
                callbackType: 'once-for-type',
                callback: (type) => {
                    console.log('Link property once for type');
                }
            })
)

