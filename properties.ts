import { Property } from 'jsr:@lost-c3/lib';

const Properties: Property[] = [
    new Property({
        Type: 'integer',
        Id: 'integerProperty',
        Name: 'Integer',
        InitialValue: 0,
    }),
    new Property({
        Type: 'float',
        Id: 'floatProperty',
        Name: 'Float',
        InitialValue: 0,
    }),
    new Property({
        Type: 'percent',
        Id: 'percentProperty',
        Name: 'Percent',
        InitialValue: 1,
    }),
    new Property({
        Type: 'text',
        Id: 'textProperty',
        Name: 'Text',
        InitialValue: '...',
    }),
    new Property({
        Type: 'longtext',
        Id: 'longtextProperty',
        Name: 'Long Text',
        InitialValue: '',
    }),
    new Property({
        Type: 'check',
        Id: 'checkProperty',
        Name: 'Check',
        InitialValue: true,
    }),
    new Property({
        Type: 'font',
        Id: 'fontProperty',
        Name: 'Font',
    }),
    new Property({
        Type: 'combo',
        Id: 'comboProperty',
        Name: 'Combo',
        Items: [
            ['item1','Item 1'],
            ['item2', 'Item 2'],
        ],
    }),
    new Property({
        Type: 'color',
        Id: 'colorProperty',
        Name: 'Color',
    }),
    new Property({
        Type: 'object',
        Id: 'objectProperty',
        Name: 'Object',
    }),
    new Property({
        Type: 'group',
        Id: 'groupProperty',
        Name: 'Awesome Group',
    }),
    new Property({
        Type: 'info',
        Id: 'infoProperty',
        Name: 'Info',
        Value: 'lostinmind.',
    })
];

export default Properties;
