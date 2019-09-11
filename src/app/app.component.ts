import {Component, OnInit} from '@angular/core';
import {TimerService} from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [TimerService]
})
export class AppComponent implements OnInit {
    constructor(private timerService: TimerService) {}

    start() {
        this.timerService.start();
    }

    ngOnInit() {
    }
}
