import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Tasks {
    name: any;
    tomatos: number;
}


@Injectable({
    providedIn: 'root'
})

export class TaskCreatorService {

    public tasks$ = new BehaviorSubject([]);

    constructor() {}

    addTask(task: any) {
        this.tasks$.next(this.tasks$.getValue().concat([task]));
    }

    deleteTask(task: any) {
        const taskArr: any[] = this.tasks$.getValue();
        taskArr.forEach((item, index) => {
            if (item === task) { taskArr.splice(index, 1); }
        });
        this.tasks$.next(taskArr);
    }
}
