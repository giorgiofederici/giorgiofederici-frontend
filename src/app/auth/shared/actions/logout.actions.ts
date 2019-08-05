import { Action } from '@ngrx/store';

export enum LogoutActionTypes {
    Logout = '[Logout] Logout',
    LogoutConfirmation = '[Logout] Logout Confirmation',
    LogoutConfirmationDismiss = '[Logout] Logout Confirmation Dismiss',
}

export class Logout implements Action {
    readonly type = LogoutActionTypes.Logout;
}

export class LogoutConfirmation implements Action {
    readonly type = LogoutActionTypes.LogoutConfirmation;
}

export class LogoutConfirmationDismiss implements Action {
    readonly type = LogoutActionTypes.LogoutConfirmationDismiss;
}

export type LogoutActionsUnion =
    | Logout
    | LogoutConfirmation
    | LogoutConfirmationDismiss;