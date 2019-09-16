import {Component, OnInit} from '@angular/core';
import {TimerService} from './timer.service';
import {TaskCreatorService} from '../task-creator/task-creator.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-task-execution',
    templateUrl: './task-execution.component.html',
    providers: [TimerService]
})
export class TaskExecutionComponent implements OnInit {
    state = null;
    tasks = [];
    activeTaskNumber = 1;

    constructor(
        private timerService: TimerService,
        private taskCreatorService: TaskCreatorService,
        private router: Router
    ) {
        if (!this.taskCreatorService.tasks$.value.length) {
            router.navigate(['']); // Нет задач, реддирект на создание
        }
    }

    start() {
        this.timerService.start(this.taskCreatorService.tasks$.value.length);
    }

    startNextTask() {
        this.taskCreatorService.addTomatToTask(this.tasks[this.activeTaskNumber - 1]);
        this.timerService.startNextTask();
    }

    // Скрутить время для отладки
    skip() {
        this.timerService.seconds$.next(1);
    }

    ngOnInit() {
        this.taskCreatorService.tasks$.subscribe(v => this.tasks = v);
        this.timerService.numberTaskProcess$.subscribe(v => this.activeTaskNumber = v);
        this.timerService.state$.subscribe(
            (v) => {
                this.state = v;
            }
        );
    }

}
