
// RxJS
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';

// Shared
import * as fromRoot from '../../../root/reducers';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromLogin from '../reducers/login.reducer';

import { LoginActions } from '../actions';


export interface AuthState {
    status: fromAuth.State;
    login: fromLogin.State;

}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState, LoginActions.LoginActionsUnion> = {
    status: fromAuth.reducer,
    login: fromLogin.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(selectAuthState, (state: AuthState) => state.status);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
export const getLoggedIn = createSelector(getUser, user => !!user && user.authenticated);

export const selectLoginState = createSelector(selectAuthState, (state: AuthState) => state.login);
export const getLoginError = createSelector(selectLoginState, fromLogin.getError);
export const getLoginPending = createSelector(selectLoginState, fromLogin.getPending);
