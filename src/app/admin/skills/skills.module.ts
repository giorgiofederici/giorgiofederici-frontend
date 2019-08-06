import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Containers
import { SkillsComponent } from './containers/skills/skills.component';

export const ROUTES: Routes = [{ path: '', component: SkillsComponent }];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
  declarations: [SkillsComponent],
  providers: []
})
export class SkillsModule {}
