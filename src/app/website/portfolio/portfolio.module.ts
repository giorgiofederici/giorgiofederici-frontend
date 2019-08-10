import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Portoflio
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';

// Shared
import { SharedModule as AdminSharedModule } from '../../admin/shared/shared.module';

export const ROUTES: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AdminSharedModule.forRoot()
  ],
  declarations: [PortfolioComponent, PortfolioItemComponent]
})
export class PortfolioModule {}
