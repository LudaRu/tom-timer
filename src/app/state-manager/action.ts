import {
    STATE_PAUSE,
    STATE_BIG_PAUSE,
    STATE_TASK,
    STATE_FINISH
} from './states';

export const actions = {
    [STATE_TASK]: (v) => {
    },

    [STATE_PAUSE]: (v) => {
    },

    [STATE_BIG_PAUSE]: (v) => {
    },

    [STATE_FINISH]: (v) => {
        console.log(v, 'STATE_FINISH');
        clearInterval(v.timerLoop);
    }
};
