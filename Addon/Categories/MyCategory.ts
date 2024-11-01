import { Category, Action, Condition, Expression, Param } from 'jsr:@lost-c3/lib';
//@ts-ignore
import type { Instance } from '../Instance.ts';

@Category({Id: 'categoyId', Name: 'Category Name'})
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
    
    /**
     * Expressions
     */
    
}