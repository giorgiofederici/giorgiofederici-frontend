import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

// RxJS
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  map,
  take,
  delay,
  tap,
  filter,
  switchMap,
  catchError
} from 'rxjs/operators';

// Auth shared
import * as fromAuth from '../reducers';
import { LoginActions, UserActions } from '../actions';
import { User } from '../models/user.model';
import { AuthService } from '../../shared/services/auth/auth.service';
import { debug } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {
  user$: Observable<User>;

  constructor(
    private store: Store<fromAuth.State>,
    private authService: AuthService
  ) {}

  // wrapping the logic so we can .switchMap it
  getFromStoreOrCookies(): Observable<any> {
    // return an Observable stream from the store
    return this.store.pipe(
      // selecting the user state using a feature selecting
      select(fromAuth.getLoggedIn),
      // the tap() operator allow for a side effect, at this point,
      // I'm checking if the user property exists in my
      // Store slice of state
      tap((loggedIn: boolean) => {
        // if there is no user, dispatch an action to check the cookies (jwt auth)
        if (!loggedIn) {
          this.store.dispatch(new UserActions.IsLoggedIn());
        }
      }),
      filter((loggedIn: boolean) => loggedIn),
      // which if loggedIn is false, we will never .take()
      // this is the same as .first() which will only
      // take 1 value from the Observable then complete
      // which does our unsubscribing, technically.
      take(1)
    );
  }

  canActivate(): Observable<boolean> {
    // return our Observable stream from above
    return this.getFromStoreOrCookies().pipe(
      // if it was successful, we can return Observable.of(true)
      switchMap(() => of(true)),
      // otherwise, something went wrong
      catchError(() => of(false))
    );
  }
}
