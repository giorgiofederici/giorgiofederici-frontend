import { Injectable } from '@angular/core';

// Router
import { Router } from '@angular/router';

// RxJs
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap } from 'rxjs/operators';

// Material
import { MatDialog } from '@angular/material';

// Auth
import { LoginActions, LogoutActions, UserActions } from '../actions';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { LogoutConfirmationDialogComponent } from '../../logout/components/logout-confirmation-dialog/logout-confirmation-dialog.component';

// Shared
import { APIResponse } from '../../../shared/models/api-response.model';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(LoginActions.LoginActionTypes.Login),
    map((action: LoginActions.Login) => action.payload.user),
    switchMap((payload: User) => {
      return this.authService.login(payload);
    }),
    map((res: APIResponse) => {
      const user = res.data.user;
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
    map(result =>
      result
        ? new LogoutActions.Logout()
        : new LogoutActions.LogoutConfirmationDismiss()
    )
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(LogoutActions.LogoutActionTypes.Logout),
    switchMap(() => this.authService.logout()),
    map(() => new LoginActions.LoginRedirect()),
    catchError(error => of(new UserActions.AuthenticationError({ error }))) // TODO
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GetUser),
    map((action: UserActions.GetUser) => action.payload),
    switchMap(payload => of(true)),
    //      delay(2000) // delay to show loading spinner, delete me!
    map((auth: any) => {
      if (auth) {
        /// User logged in
        const user: User = {
          email: auth.email
        };
        return new UserActions.Authenticated({ user });
      } else {
        /// User not logged in
        return new UserActions.NotAuthenticated();
      }
    }),
    catchError(error => of(new UserActions.AuthenticationError({ error })))
  );

  @Effect()
  isLoggedIn$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.IsLoggedIn),
    map((action: UserActions.IsLoggedIn) => action.payload),
    switchMap(payload => {
      return this.authService.isLoggedIn();
    }),
    map((res: APIResponse) => {
      if (res.data.user) {
        // User logged in
        const user = res.data.user;
        return new UserActions.Authenticated({ user });
      } else {
        // User not logged in
        return new LoginActions.LoginRedirect();
      }
    }),
    catchError(error => of(new LoginActions.LoginRedirect()))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}
}
