import { Category, Action, Condition, Expression, addParam, Param } from 'jsr:@lost-c3/lib@2.1.0';
import type { Instance } from '@Instance';

@Category('categoyId', 'My Category')
export default class MyCategory {
    /** @Actions */
    @Action('doAction', 'Do action', 'Do action', 'Do something...', {
        params: [
            addParam('', '', { type: Param.String })
        ]
    })
    doAction(this: Instance) {

    }

    /** @Conditions */
    @Condition('onCondition', 'On condition', 'On condition')
    onCondition() {
        return false;
    }

    /** @Expressions */
    @Expression('expression', 'Expression')
    Expression() {
        return 'Value';
    }

}