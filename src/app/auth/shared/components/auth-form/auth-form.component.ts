import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    template: `
        <div class="auth-form">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">

                <!-- content projection -->
                <ng-content select="h1"></ng-content>

                <label>
                    <input type="email" placeholder="Email address" formControlName="email" />
                </label>

                <label>
                    <input type="password" placeholder="Enter password" formControlName="password" />
                </label>

                <div class="error" *ngIf="emailFormat">
                    Invalid email format
                </div>

                <div class="error" *ngIf="passwordInvalid">
                    Password is required
                </div>

                <!-- content projection -->
                <ng-content select=".error"></ng-content>

                <div class="auth-form__action">
                    <!-- content projection -->
                    <ng-content select="button"></ng-content>
                </div>

                <div class="auth-form__toggle">
                    <!-- content projection -->
                    <ng-content select="a"></ng-content>
                </div>

            </form>
        </div>
    `
})
export class AuthFormComponent {

    @Output()
    submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    form: FormGroup = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
    });

    constructor(
        private fb: FormBuilder
    ) {}

    onSubmit(): void {
        if (this.form.valid) {
            this.submitted.emit(this.form);
        }
    }

    get passwordInvalid(): boolean {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }

    get emailFormat(): boolean {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }
}