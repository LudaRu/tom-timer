import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {StateManager} from './state-manager/manager';
import * as fsmStates from './state-manager/states';
import {STATE_TASK} from './state-manager/states';

@Injectable({
    providedIn: 'root'
})
export class TimerService {
    TASK_SECONDS = 25;
    PAUSE_SECONDS = 5;
    BIG_PAUSE_SECONDS = 30;
    COUNT_TASK = 4;

    public seconds$ = new BehaviorSubject(this.TASK_SECONDS);
    public state$ = new BehaviorSubject(null);

    private timerLoop: any = null;
    private countTask = 0;
    private numberTask = {
        number: 0,
    };

    constructor() {}

    start() {
        const fsm = new StateManager(fsmStates.STATE_TASK);

        this.startTimerLoop(fsm);
    }

    startTimerLoop(fsm) {
        this.timerLoop = setInterval(() => {
            const second = this.seconds$.value - 1;
            if (second >= 0) {
                this.seconds$.next(second);
            } else {
                const transition = fsm.findTransitionFor({numberTask: this.numberTask, seconds: second});
                if (transition) {
                    fsm.performTransition(transition)({numberTask: this.numberTask, state$: this.state$, timerLoop: this.timerLoop });
                }
            }
        }, 1000);
    }
}
