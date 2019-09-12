import {
    STATE_TASK,
    STATE_PAUSE,
    STATE_BIG_PAUSE,
    STATE_FINISH,
} from './states';

export const transactions = {
    [STATE_TASK]: [
        {
            to: STATE_FINISH,
            when: (v) => [
                v.second === 10,
            ]
        },
        {
            to: STATE_BIG_PAUSE,
            when: (v) => [
                v.seconds <= 0,
                v.numberTask % 4 === 0,
            ]
        },
        {
            to: STATE_PAUSE,
            when: (v) => [
                v.seconds <= 0,
                v.numberTask % 4 !== 0,
            ]
        },
    ],

    [STATE_PAUSE]: [
        {
            to: STATE_FINISH,
            when: (v) => [
            ]
        },
    ],

    [STATE_BIG_PAUSE]: [
        {
            to: STATE_FINISH,
            when: (v) => [
            ]
        },
    ]
};
