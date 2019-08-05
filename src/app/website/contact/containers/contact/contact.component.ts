import { Component } from '@angular/core';
import { ContactService, ContactMessage } from 'src/app/website/shared/services/contact/contact.service';

@Component({
    selector: 'website-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    constructor(
        private contactService: ContactService
    ) { }

    sendMessage(event: ContactMessage): void {
        this.contactService.sendMessage(event);
    }
}
