import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faUniversity,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

// CV
import { CVComponent } from './containers/cv/cv.component';
import { CVTimelineComponent } from './components/cv-timeline/cv-timeline.component';
import { CVSkillsComponent } from './components/cv-skills/cv-skills.component';
import { NodeJSComponent } from './components/nodejs/nodejs.component';

// Shared
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: CVComponent },
  { path: 'nodejs', component: NodeJSComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    CVComponent,
    CVTimelineComponent,
    CVSkillsComponent,
    NodeJSComponent
  ]
})
export class CVModule {
  constructor() {
    library.add(
      faBriefcase,
      faUniversity,
      faGithub,
      faTwitter,
      faLinkedin,
      faInstagram,
      faExternalLinkAlt
    );
  }
}
