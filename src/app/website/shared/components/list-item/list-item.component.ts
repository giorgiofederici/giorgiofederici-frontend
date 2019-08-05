import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './list-item.component.html',
    styleUrls: ['list-item.component.scss']
})
export class ListItemComponent {

    toggled = false;

    @Input() item: any;

    @Output() remove: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    toggle() {
        this.toggled = !this.toggled;
    }

    removeItem() {
        this.remove.emit(this.item);
    }

    getRoute(item: any) {
        return item.link;
    }
}
