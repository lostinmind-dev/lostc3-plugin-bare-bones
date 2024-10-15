import { Category, Action, Condition, Expression, Param, Bold } from "jsr:@lost-c3/lib@0.1.6";
import type { Instance } from "../Instance.ts";

@Category({Id: 'myCategory', Name: 'Category Name', Deprecated: false, InDevelopment: false})
class MyCategory {
    /**
     * Actions
     */
    @Action({
        Id: `doAction`,
        Name: `Do action`,
        DisplayText: `Do action ${Bold('{0}')}`,
        Params: [
            new Param({Type: 'string', Id: 'actionType',
                Name: 'Type',
                Description: 'Action type',
                InitialValue: '"Enter action type..."'
            })
        ]
    })
    doAction(this: Instance, actionType: string) {
        console.log('Do action:', actionType);
    };

    /**
     * Conditions
     */
    @Condition({
        Id: `onEvent`,
        Name: `On event`,
        DisplayText: `On event`,
        IsTrigger: true
    })
    onEvent(this: Instance) {
        console.log('Triggered "On event" condition');
        return true;
    };

    /**
     * Expressions
     */
    @Expression({
        Id: `GetValue`,
        Name: `GetValue`,
        ReturnType: 'string'
    })
    GetValue(this: Instance) {
        return 'Value'
    };
}
export const LostCategory = new MyCategory();
