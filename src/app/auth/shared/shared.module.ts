import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// RxJS
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Cookies
import { CookieService } from 'ngx-cookie-service';

// Shared
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { reducers } from './reducers';
import { AuthEffects } from './effects/auth.effects';

// Services
import { AuthService } from './services/auth/auth.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent]
})
export class SharedModule {
  // Avoid the creation of many instances of AuthService, because ShareModule is imported in login and register module
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, AuthGuard, CookieService]
    };
  }
}
