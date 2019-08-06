import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Env
import { environment } from '../../environments/environment';

// Root
import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

// Auth
import { AuthModule } from '../auth/auth.module';

export const ROUTES: Routes = [
  { path: '', loadChildren: '../website/website.module#WebsiteModule' },
  { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Returns all providers for an @ngrx/store based application
    StoreModule.forRoot(reducers, { metaReducers }),
    // @ngrx/router-store keeps router state up-to-date in the store
    StoreRouterConnectingModule.forRoot(),
    // Store devtools instrument the store retaining past versions of state
    // and recalculating new states. This enables powerful time-travel debugging.
    StoreDevtoolsModule.instrument({
      name: 'Giorgio Federici',
      // Disable all features in production
      logOnly: environment.production
    }),
    // Sets up the effects class to be initialized immediately when the application starts
    EffectsModule.forRoot([]),
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [AppComponent, NotFoundPageComponent],
  bootstrap: [AppComponent]
})
export class RootModule {}
