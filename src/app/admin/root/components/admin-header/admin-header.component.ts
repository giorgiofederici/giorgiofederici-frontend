import { Component, Input, EventEmitter, Output } from '@angular/core';

// Auth
import { User } from '../../../../auth/shared/models/user.model';

@Component({
    selector: 'admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {

    @Input()
    user: User;

    @Input()
    loggedIn: boolean;

    @Output()
    logout: EventEmitter<any> = new EventEmitter();

    onLogout() {
        this.logout.emit();
    }

}
