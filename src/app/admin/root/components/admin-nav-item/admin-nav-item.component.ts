import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'admin-nav-item',
  templateUrl: './admin-nav-item.component.html',
  styleUrls: ['./admin-nav-item.component.scss']
})
export class AdminNavItemComponent implements OnInit {
  @Input() routerLink: string | any[];
  @Input() disableActive: boolean;
  @Output() navigate = new EventEmitter();

  activeClass: string;

  ngOnInit() {
    this.activeClass = this.disableActive ? '' : 'active';
  }
}
