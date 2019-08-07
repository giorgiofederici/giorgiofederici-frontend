// ngRx
import { Action } from '@ngrx/store';

// Auth shared
import { User } from '../models/user.model';

export enum LoginActionTypes {
  Login = '[Login] Login',
  LoginSuccess = '[Login] Login Success',
  LoginFailure = '[Login] Login Failure',
  LoginRedirect = '[Login] Login Redirect'
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;

  constructor(public payload: { user: User }) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;

  constructor(public payload: { error: any }) {}
}

export class LoginRedirect implements Action {
  readonly type = LoginActionTypes.LoginRedirect;
}

export type LoginActionsUnion =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect;
