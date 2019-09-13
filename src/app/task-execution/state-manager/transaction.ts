import {
    STATE_TASK,
    STATE_PAUSE,
    STATE_BIG_PAUSE,
    STATE_FINISH,
} from './states';

export const transactions = {

    [STATE_TASK]: [
        {
            to: STATE_PAUSE,
            when: (v) => [
                v.processInfo.completedTask < v.processInfo.limitTask,
                v.processInfo.completedTask % 4 !== 0 || v.processInfo.completedTask === 0,
            ]
        },
        {
            to: STATE_BIG_PAUSE,
            when: (v) => [
                v.processInfo.completedTask < v.processInfo.limitTask,
                v.processInfo.completedTask % 4 === 0 && v.processInfo.completedTask !== 0,
            ]
        },
        {
            to: STATE_FINISH,
            when: (v) => [
                v.processInfo.completedTask >= v.processInfo.completedTask,
            ]
        },
    ],

    [STATE_PAUSE]: [
        {
            to: STATE_TASK,
            when: (v) => [
                v.processInfo.completedTask < v.processInfo.limitTask,
            ]
        },
        {
            to: STATE_FINISH,
            when: (v) => [
                v.processInfo.completedTask >= v.processInfo.limitTask,
            ]
        },
    ],

    [STATE_BIG_PAUSE]: [
        {
            to: STATE_TASK,
            when: (v) => [
                v.processInfo.completedTask < v.processInfo.limitTask,
            ]
        },
        {
            to: STATE_FINISH,
            when: (v) => [
                v.processInfo.completedTask >= v.processInfo.limitTask,
            ]
        },
    ]
};
