import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

// Shared
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './root/admin-root.module#AdminRootModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), CommonModule, SharedModule.forRoot()]
})
export class AdminModule {}
