import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

// Components
import { SkillsComponent } from './containers/skills/skills.component';
import { SkillComponent } from './containers/skill/skill.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';

// Shared
import { SharedModule } from '../shared/shared.module';
import { SkillResolver } from '../shared/resolvers/skills/skill.resolver';

export const ROUTES: Routes = [
  { path: '', component: SkillsComponent },
  { path: 'new', component: SkillComponent },
  {
    path: ':id',
    resolve: {
      skill: SkillResolver
    },
    component: SkillComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    FontAwesomeModule,
    SharedModule.forRoot()
  ],
  declarations: [SkillsComponent, SkillComponent, SkillFormComponent],
  providers: []
})
export class SkillsModule {
  constructor() {
    library.add(faStar);
  }
}
