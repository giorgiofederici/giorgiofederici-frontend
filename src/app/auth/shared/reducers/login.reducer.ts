import { LoginActions } from '../actions';

export interface State {
    error: string | null;
    pending: boolean;
}

export const initialState: State = {
    error: null,
    pending: false,
};

export function reducer(
    state = initialState,
    action: | LoginActions.LoginActionsUnion
): State {
    switch (action.type) {
        case LoginActions.LoginActionTypes.Login: {
            return {
                ...state,
                error: null,
                pending: true,
            };
        }

        case LoginActions.LoginActionTypes.LoginSuccess: {
            return {
                ...state,
                error: null,
                pending: false,
            };
        }

        case LoginActions.LoginActionTypes.LoginFailure: {
            return {
                ...state,
                error: action.payload.error,
                pending: false,
            };
        }

        default: {
            return state;
        }
    }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
