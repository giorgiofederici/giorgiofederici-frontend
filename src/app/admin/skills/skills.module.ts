import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// ngRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

// Components
import { SkillsComponent } from './containers/skills/skills.component';

// Reducers
import { skillsReducer } from './reducers/skills.reducer';

// Effects
import { SkillsEffects } from './effects/skills.effects';

// Shared
import { SharedModule } from '../shared/shared.module';
import { SkillsService } from './services/skills.service';

export const ROUTES: Routes = [{ path: '', component: SkillsComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    FontAwesomeModule,
    StoreModule.forFeature('skills', skillsReducer),
    EffectsModule.forFeature([SkillsEffects]),
    SharedModule
  ],
  declarations: [SkillsComponent],
  providers: [SkillsService]
})
export class SkillsModule {
  constructor() {
    library.add(faStar);
  }
}
