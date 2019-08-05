import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'admin-nav-item',
    templateUrl: './admin-nav-item.component.html',
    styleUrls: ['./admin-nav-item.component.scss']
})
export class AdminNavItemComponent {
    @Input() routerLink: string | any[];
    @Output() navigate = new EventEmitter();
}
