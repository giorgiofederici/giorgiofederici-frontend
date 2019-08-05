import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

// RxJS
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';

// Auth shared
import * as fromAuth from '../reducers';
import { LoginActions, UserActions } from '../actions';
import { User } from '../models/user.model';
import { AuthService } from '../../shared/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    user$: Observable<User>;

    constructor(
        private store: Store<fromAuth.State>,
        private authService: AuthService
    ) { }

    canActivate(): Observable<boolean> {
        return this.authService.authState.pipe(
            map((user) => {
                if (!user) {
                    this.store.dispatch(new LoginActions.LoginRedirect());
                }
                // We need to return a boolean -> double bangs !!
                // If the user is null, !!user -> false
                // If the user is an object, !!{} -> true
                return !!user;
            })
        );
    }
}
