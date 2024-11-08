import { Category, Action, Condition, Expression, Param } from 'jsr:@lost-c3/lib';
import type { Instance } from '../Instance.ts';

@Category({Id: 'categoyId', Name: 'My Category'})
export default class MyCategory {
    /**
     * Actions
     */
    @Action({
        Id: `doAction`,
        Name: `Name`,
        DisplayText: `Action`,
        Description: ``,
        Params: [
            
        ]
    })
    doAction(this: Instance) {
        
    };
    
    /**
     * Conditions
     */
    @Condition({
        Id: `onCondition`,
        Name: `On condition`,
        DisplayText: `On condition`,
        Description: ``,
        IsTrigger: true
    })
    onCondition(this: Instance) { return false };
    
    /**
     * Expressions
     */
    @Expression({
        Id: `Expression`,
        Name: `Expression`,
        Description: ``,
        ReturnType: 'string'
    })
    Expression(this: Instance) {
        return '';
    };
    
}