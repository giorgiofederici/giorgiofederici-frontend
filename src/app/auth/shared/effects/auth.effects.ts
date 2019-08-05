import { Injectable } from '@angular/core';

// Router
import { Router } from '@angular/router';

// RxJs
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap } from 'rxjs/operators';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';

// Material
import { MatDialog } from '@angular/material';

// Auth
import { LoginActions, LogoutActions, UserActions } from '../actions';
import { Credentials, User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { LogoutConfirmationDialogComponent } from '../../logout/components/logout-confirmation-dialog/logout-confirmation-dialog.component';



@Injectable()
export class AuthEffects {
    @Effect()
    login$ = this.actions$.pipe(
        ofType(LoginActions.LoginActionTypes.Login),
        map((action: LoginActions.Login) => action.payload.credentials),
        switchMap((payload: Credentials) => {
            return from(this.authService.login(payload));
        }),
        map((credential: firebase.auth.UserCredential) => {
            const user: User = {
                email: credential.user.email,
                uid: credential.user.uid,
                authenticated: true
            };
            return new LoginActions.LoginSuccess({ user });
        }),
        catchError(error => of(new LoginActions.LoginFailure({ error })))
    );

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType(LoginActions.LoginActionTypes.LoginSuccess),
        tap(() => this.router.navigate(['/admin/dashboard']))
    );

    @Effect({ dispatch: false })
    loginRedirect$ = this.actions$.pipe(
        ofType(
            LoginActions.LoginActionTypes.LoginRedirect,
            LogoutActions.LogoutActionTypes.Logout
        ),
        tap(authed => {
            this.router.navigate(['/login']);
        })
    );


    @Effect()
    logoutConfirmation$ = this.actions$.pipe(
        ofType(LogoutActions.LogoutActionTypes.LogoutConfirmation),
        exhaustMap(() => {
            const dialogRef = this.dialog.open<
                LogoutConfirmationDialogComponent,
                undefined,
                boolean
            >(LogoutConfirmationDialogComponent);

            return dialogRef.afterClosed();
        }),
        map(
            result =>
                result ? new LogoutActions.Logout() : new LogoutActions.LogoutConfirmationDismiss()
        )
    );

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType(LogoutActions.LogoutActionTypes.Logout),
        tap(() => this.authService.logoutUser()),
        catchError(error => of(new UserActions.AuthenticationError({ error }))) // TODO
    );

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType(UserActions.UserActionTypes.GetUser),
        map((action: UserActions.GetUser) => action.payload),
        switchMap(payload => this.af.authState),
//      delay(2000) // delay to show loading spinner, delete me!
        map((auth: firebase.User) => {
            if (auth) {
                /// User logged in
                const user: User = {
                    email: auth.email,
                    uid: auth.uid,
                    authenticated: true
                };
                return new UserActions.Authenticated({user});
            } else {
                /// User not logged in
                return new UserActions.NotAuthenticated();
            }

        }),
        catchError(error => of(new UserActions.AuthenticationError({ error })))
    );



    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private af: AngularFireAuth,
        private router: Router,
        private dialog: MatDialog
    ) { }
}
