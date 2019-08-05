// NgRx
import { Action } from '@ngrx/store';

// Auth
import { User } from '../models/user.model';

export enum UserActionTypes {
    GetUser = '[User] Get User',
    Authenticated = '[User] Authenticated',
    NotAuthenticated = '[User] Not Authenticated',
    AuthenticationError = '[User] Authentication Error'
}

export class GetUser implements Action {
    readonly type = UserActionTypes.GetUser;
    constructor(public payload?: any) {}
}

export class Authenticated implements Action {
    readonly type = UserActionTypes.Authenticated;
    constructor(public payload: { user: User }) {}
}

export class NotAuthenticated implements Action {
    readonly type = UserActionTypes.NotAuthenticated;
    constructor(public payload?: any) {}
}

export class AuthenticationError implements Action {
    readonly type = UserActionTypes.AuthenticationError;
    constructor(public payload?: any) {}
}

export type UserActionsUnion = GetUser
    | Authenticated
    | NotAuthenticated
    | AuthenticationError;
