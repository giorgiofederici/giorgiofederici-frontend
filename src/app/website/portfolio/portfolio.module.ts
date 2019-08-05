import { NgModule } from '@angular/core';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Portoflio
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';

export const ROUTES: Routes = [
    { path: '', component: PortfolioComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        PortfolioComponent,
        PortfolioItemComponent
    ]
})
export class PortfolioModule { }
