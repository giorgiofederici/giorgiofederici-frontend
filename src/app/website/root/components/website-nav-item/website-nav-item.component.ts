import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'website-nav-item',
  templateUrl: './website-nav-item.component.html',
  styleUrls: ['./website-nav-item.component.scss']
})
export class WebsiteNavItemComponent {
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
}
