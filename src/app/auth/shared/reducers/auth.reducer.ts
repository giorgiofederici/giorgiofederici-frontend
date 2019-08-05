

// Shared
import { LoginActions, LogoutActions, UserActions } from '../actions';
import { User } from '../models/user.model';

export interface State {
    user: User | null;
}

export const initialState: State = {
    user: null,
};

export function reducer(
    state = initialState,
    action: LoginActions.LoginActionsUnion | LogoutActions.LogoutActionsUnion | UserActions.UserActionsUnion
): State {
    switch (action.type) {
        case LoginActions.LoginActionTypes.LoginSuccess: {
            return {
                ...state,
                user: action.payload.user
            };
        }

        case LogoutActions.LogoutActionTypes.Logout: {
            return initialState;
        }

        case UserActions.UserActionTypes.Authenticated: {
            return {
                ...state,
                user: action.payload.user
            };
        }

        case UserActions.UserActionTypes.NotAuthenticated: {
            return initialState;
        }

        case UserActions.UserActionTypes.AuthenticationError: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getUser = (state: State) => state.user;
