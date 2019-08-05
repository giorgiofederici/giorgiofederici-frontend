import { Component, Input } from '@angular/core';


@Component({
    selector: 'website-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent {

    @Input()
    portfolioItemImgUrl: string;

    @Input()
    portfolioItemTitle: string;

    @Input()
    portfolioItemText: string;

    constructor() {

    }

}
