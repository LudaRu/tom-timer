import {Component, OnInit} from '@angular/core';
import {TimerService} from './task-execution/timer.service';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="row mt-5">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrls: ['./app.component.css'],
    providers: [TimerService]
})
export class AppComponent implements OnInit {

    state = null;

    constructor(private timerService: TimerService) {
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
