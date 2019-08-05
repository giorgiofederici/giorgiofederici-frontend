import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { Routes, RouterModule } from '@angular/router';

// Firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Material
import { MaterialModule } from '../material/material.module';

// Shared
import { SharedModule } from './shared/shared.module';

// Env
import { environment } from '../../environments/environment';

// Logout
import { LogoutModule } from './logout/logout.module';



export const ROUTES: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        // forRoot() specified here to avoid AuthService duplicates. Not needed to do the same in login and register module
        SharedModule.forRoot(),
        LogoutModule
    ],
    declarations: [ ],
    entryComponents: [ ]
})
export class AuthModule { }
