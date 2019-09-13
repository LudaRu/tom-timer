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

    public tasks$ = new BehaviorSubject(null);

    constructor() {
    }

    addTask(task: Tasks) {
        this.tasks$.next(task);
    }

    deleteTask() {
        this.tasks$.next(0);
    }

    getTasks(): [Tasks] {
        return this.tasks$.value();
    }
}
