import {transactions} from './transaction';
import {actions} from './action';
import {STATE_TASK} from './states';


export class StateManager {
    public currentState = null;

    public findTransitionFor = (...args) => {
        return transactions[this.currentState]
            .find(({ when }) => {
                return when(...args).every((condition) => condition);
            });
    }
    public performTransition = ({ to: newState }) => (...args) => {
        this.currentState = newState;
        console.log(newState, 'performTransition newState');
        actions[newState](...args);
    }

    constructor(initialState) {
        this.currentState = initialState;
    }

}
