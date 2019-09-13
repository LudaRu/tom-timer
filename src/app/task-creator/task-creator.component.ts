import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskCreatorService} from './task-creator.service';

@Component({
    selector: 'app-task-creator',
    template: `
        <form [formGroup]="form" (submit)="onSubmit()">
            <input type="text" formControlName="name" placeholder="Задача"/>
            <button type="submit">+</button>
        </form>
        <div class="btn" routerLink="/execution">Готово</div>
    `,
    providers: [TaskCreatorService],
    styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            name: ['', [Validators.required]],
        });
    }

    onSubmit() {
        const controls = this.form.controls;
        console.log(this.form.value);
        if (this.form.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
    }
}
