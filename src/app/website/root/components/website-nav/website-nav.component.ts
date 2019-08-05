import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'website-nav',
    templateUrl: './website-nav.component.html',
    styleUrls: ['./website-nav.component.scss']
})
export class WebsiteNavComponent implements OnInit {

    isCollapsed: boolean;

    constructor() { }

    ngOnInit() {
        this.isCollapsed = true;
    }
}
