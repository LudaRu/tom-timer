import {
    STATE_PAUSE,
    STATE_BIG_PAUSE,
    STATE_TASK,
    STATE_FINISH
} from './states';

const TASK_SECONDS = 25;
const PAUSE_SECONDS = 5;
const BIG_PAUSE_SECONDS = 30;


export const actions = {
    [STATE_TASK]: (v) => {
        v.seconds$.next(TASK_SECONDS);
        v.processInfo.numberTaskProcess++; // +1 задача выполнена
        v.processInfo.counter++;
    },

    [STATE_PAUSE]: (v) => {
        v.seconds$.next(PAUSE_SECONDS);
    },

    [STATE_BIG_PAUSE]: (v) => {
        v.seconds$.next(BIG_PAUSE_SECONDS);
    },

    [STATE_FINISH]: (v) => {
        v.seconds$.next(0);
        clearInterval(v.timerLoop);
    },

    DEFAULT: (v) => {
        v.seconds$.next(0);
        clearInterval(v.timerLoop);
    }
};
