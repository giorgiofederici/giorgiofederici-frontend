import { NgModule } from '@angular/core';

// Routing
import { RouterModule, Routes } from '@angular/router';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Home
import { HomeComponent } from './containers/home/home.component';
import { HomePresentationComponent } from './components/home-presentation/home-presentation.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        FontAwesomeModule
    ],
    declarations: [
        HomeComponent,
        HomePresentationComponent
    ]
})
export class HomeModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(faGithub, faTwitter, faLinkedin, faInstagram);
    }
}
