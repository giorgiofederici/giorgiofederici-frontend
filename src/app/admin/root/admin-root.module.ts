import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Ng Bootstrap
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Admin Root
import { AdminRootComponent } from './containers/admin-root/admin-root.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminNavItemComponent } from './components/admin-nav-item/admin-nav-item.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AdminRootComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'skills',
        loadChildren: '../skills/skills.module#SkillsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgbCollapseModule,
    FontAwesomeModule
  ],
  declarations: [
    AdminRootComponent,
    AdminHeaderComponent,
    AdminNavItemComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  exports: []
})
export class AdminRootModule {
  constructor() {
    library.add(faBars);
  }
}
