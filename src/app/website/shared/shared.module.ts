import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router
import { RouterModule } from '@angular/router';

// Contact
import { ContactService } from './services/contact/contact.service';

// Portfolio
import { PortfolioService } from './services/portfolio/portfolio.service';

// Components
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ListItemComponent
    ],
    providers: [],
    exports: [
        ListItemComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ContactService,
                PortfolioService
            ]
        };
    }
}
