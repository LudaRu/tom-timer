import { Component, OnInit } from '@angular/core';
import {TimerService} from './timer.service';
import {TaskCreatorService} from '../task-creator/task-creator.service';

@Component({
  selector: 'app-task-execution',
  templateUrl: './task-execution.component.html',
    providers: [TimerService, TaskCreatorService]
})
export class TaskExecutionComponent implements OnInit {
    state = null;

    constructor(
        private timerService: TimerService,
        private taskCreatorService: TaskCreatorService,
    ) {}

    start() {
        const tasks = this.taskCreatorService.tasks$.value;
        console.log(tasks);
        this.timerService.start(5);
    }

    skip() {
        this.timerService.seconds$.next(1);
    }

    ngOnInit() {
        this.timerService.state$.subscribe(
            (v) => {
                console.log('asdasd', v);
                this.state = v;
            }
        );
    }

}
