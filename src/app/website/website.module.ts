import { NgModule } from '@angular/core';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Shared
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    { path: '', loadChildren: './root/website-root.module#WebsiteRootModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ]
})
export class WebsiteModule { }
