import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ngRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Components
import { ListItemComponent } from './components/list-item/list-item.component';

// Reducer
import { skillsReducer } from './reducers/skills/skills.reducer';

// Effects
import { SkillsEffects } from './effects/skills/skills.effects';

// Services
import { SkillsService } from './services/skills/skills.service';

// Resolvers
import { SkillResolver } from './resolvers/skills/skill.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('skills', skillsReducer),
    EffectsModule.forFeature([SkillsEffects])
  ],
  declarations: [ListItemComponent],
  providers: [],
  exports: [ListItemComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SkillsService, SkillResolver]
    };
  }
}
