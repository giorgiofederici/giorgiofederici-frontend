import { Injectable } from '@angular/core';


export interface ContactMessage {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

@Injectable()
export class ContactService {

    constructor() { }

    sendMessage(contactMessage: ContactMessage): void {
        console.log('Message sent: ', contactMessage);
    }
}
