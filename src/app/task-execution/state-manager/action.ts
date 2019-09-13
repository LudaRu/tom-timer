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
        console.log(v, 'STATE_TASK');
        v.seconds$.next(TASK_SECONDS);
        v.processInfo.completedTask++; // +1 задача выполнена
    },

    [STATE_PAUSE]: (v) => {
        console.log(v, 'STATE_PAUSE');
        v.seconds$.next(PAUSE_SECONDS);
    },

    [STATE_BIG_PAUSE]: (v) => {
        console.log(v, 'STATE_BIG_PAUSE');
        v.seconds$.next(BIG_PAUSE_SECONDS);
    },

    [STATE_FINISH]: (v) => {
        console.log(v, 'STATE_FINISH');
        v.seconds$.next(0);
        clearInterval(v.timerLoop);
    },

    DEFAULT: (v) => {
        console.log(v, 'DEFAULT');
        v.seconds$.next(0);
        clearInterval(v.timerLoop);
    }
};
