import { Component, Input } from '@angular/core';

@Component({
  selector: 'website-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent {
  @Input() image: string;
  @Input() name: string;
  @Input() description: string;
  @Input() repository: string;

  constructor() {}
}
