import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactMessage } from '../../../shared/services/contact/contact.service';


@Component({
    selector: 'website-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

    @Output()
    send: EventEmitter<ContactMessage> = new EventEmitter<ContactMessage>();

    form: FormGroup = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
    });

    constructor(
        private fb: FormBuilder
    ) { }

    get firstNameRequired(): boolean {
        return (
            this.form.get('firstName').hasError('required') &&
            this.form.get('firstName').touched
        );
    }

    get lastNameRequired(): boolean {
        return (
            this.form.get('lastName').hasError('required') &&
            this.form.get('lastName').touched
        );
    }

    get emailNotValid(): boolean {
        return (
            (this.form.get('email').hasError('required') || this.form.get('email').hasError('email')) &&
            this.form.get('email').touched
        );
    }

    get messageRequired(): boolean {
        return (
            this.form.get('message').hasError('required') &&
            this.form.get('message').touched
        );
    }

    sendMessage(): void {
        if (this.form.valid) {
            this.send.emit(this.form.value);
        }
    }


}
