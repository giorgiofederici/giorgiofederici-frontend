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
import { projectsReducer } from './reducers/projects/projects.reducer';

// Effects
import { SkillsEffects } from './effects/skills/skills.effects';
import { ProjectsEffects } from './effects/projects/projects.effects';

// Services
import { SkillsService } from './services/skills/skills.service';
import { ProjectsService } from './services/projects/projects.service';

// Resolvers
import { SkillResolver } from './resolvers/skills/skill.resolver';
import { ProjectResolver } from './resolvers/projects/project.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('skills', skillsReducer),
    StoreModule.forFeature('projects', projectsReducer),
    EffectsModule.forFeature([SkillsEffects, ProjectsEffects])
  ],
  declarations: [ListItemComponent],
  providers: [],
  exports: [ListItemComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SkillsService,
        SkillResolver,
        ProjectsService,
        ProjectResolver
      ]
    };
  }
}
