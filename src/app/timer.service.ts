import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TimerService {
    TASK_SECONDS = 25;
    PAUSE_SECONDS = 5;
    BIG_PAUSE_SECONDS = 30;
    COUNT_TASK = 4;


    STATES = {
        STOP: 0,
        TASK: 1,
        PAUSE: 2,
        BIG_PAUSE: 3,
        FINISH: 4,
    };

    public seconds$ = new BehaviorSubject(this.TASK_SECONDS);
    public state$ = new BehaviorSubject(this.STATES.STOP);

    private timerLoop: any = null;

    constructor() {
    }

    start() {
        this.state$.next(this.STATES.TASK);
        this.startTimerLoop();
    }

    nextTask() {
        this.state$.next(this.STATES.TASK);
    }

    pause() {
        this.state$.next(this.STATES.PAUSE);
    }

    finish() {
        clearInterval(this.timerLoop);
    }

    startTimerLoop() {
        this.timerLoop = setInterval(() => {
            const second = this.seconds$.value - 1;
            if (second >= 0) {
                this.seconds$.next(second);
            } else {
                this.nextTask();
            }

            this.seconds$.next(second);
        }, 1000);
    }
}
