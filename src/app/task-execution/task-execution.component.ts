import {Component, OnInit} from '@angular/core';
import {TimerService} from './timer.service';
import {TaskCreatorService} from '../task-creator/task-creator.service';

@Component({
    selector: 'app-task-execution',
    templateUrl: './task-execution.component.html',
    providers: [TimerService]
})
export class TaskExecutionComponent implements OnInit {
    state = null;
    tasks = [];

    constructor(
        private timerService: TimerService,
        private taskCreatorService: TaskCreatorService,
    ) {
    }

    start() {
        const tasks = this.taskCreatorService.tasks$.value;
        console.log('tasks', tasks);
        this.timerService.start(this.taskCreatorService.tasks$.value.length);
    }

    skip() {
        this.timerService.seconds$.next(1);
    }

    ngOnInit() {
        this.taskCreatorService.tasks$.subscribe(v => this.tasks = v);
        this.timerService.state$.subscribe(
            (v) => {
                console.log('asdasd', v);
                this.state = v;
            }
        );
    }

}
