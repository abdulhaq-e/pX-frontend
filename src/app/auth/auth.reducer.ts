import {Action, Reducer} from '@ngrx/store';

export const AUTH_ACTIONS_TYPE = {
  AUTH_REQUEST: 'AUTH_REQUEST',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE'
};

export var AUTH_INITIAL_STATE = {
  isLogged: false,
  user: null,
  error: null
};

export const authReducer: Reducer<any> = (state: any = AUTH_INITIAL_STATE, action: Action) => {

    switch (action.type) {
        // case AUTH_ACTIONS_TYPE.AUTH_INIT:
            // return '';
        case AUTH_ACTIONS_TYPE.AUTH_SUCCESS:
            return Object.assign({}, state,
              {user: action.payload});

        case AUTH_ACTIONS_TYPE.AUTH_FAILURE:
            return Object.assign({}, state,
              {error: action.payload, user: null});

        default:
            return state;
    }

};
