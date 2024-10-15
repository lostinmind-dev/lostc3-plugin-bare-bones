import { PluginProperty } from "jsr:@lost-c3/lib@0.1.6";

const PluginProperties: PluginProperty[] = [
    new PluginProperty({Type: 'integer', Id: 'integerProperty',
        Name: 'Integer',
        InitialValue: 0
    }),
]

export { PluginProperties };