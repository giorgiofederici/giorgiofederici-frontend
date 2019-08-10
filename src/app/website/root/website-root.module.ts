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

// Website Root
import { WebsiteRootComponent } from './containers/website-root/website-root.component';
import { WebsiteHeaderComponent } from './components/website-header/website-header.component';
import { WebsiteFooterComponent } from './components/website-footer/website-footer.component';
import { WebsiteNavComponent } from './components/website-nav/website-nav.component';
import { WebsiteNavItemComponent } from './components/website-nav-item/website-nav-item.component';
import { WebsiteClipTextComponent } from './components/website-clip-text/website-clip-text.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: WebsiteRootComponent,
    children: [
      { path: '', loadChildren: '../home/home.module#HomeModule' },
      { path: 'cv', loadChildren: '../cv/cv.module#CVModule' },
      {
        path: 'projects',
        loadChildren: '../portfolio/portfolio.module#PortfolioModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule'
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
    WebsiteRootComponent,
    WebsiteHeaderComponent,
    WebsiteFooterComponent,
    WebsiteNavComponent,
    WebsiteNavItemComponent,
    WebsiteClipTextComponent
  ],
  exports: []
})
export class WebsiteRootModule {
  constructor() {
    library.add(faBars);
  }
}
