import { PluginProperty } from "jsr:@lost-c3/lib";

const PluginProperties: PluginProperty[] = [
    new PluginProperty({Type: 'integer', Id: 'integerProperty',
        Name: 'Integer',
        InitialValue: 0
    }),
]

export default PluginProperties;