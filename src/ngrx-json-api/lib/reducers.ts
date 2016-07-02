import { Action, ActionReducer } from '@ngrx/store';

import { JsonApiActions } from './actions';
import { JsonApiStore } from './store';
import { updateOrCreateReducer } from './utils';
import { JsonApiOptions } from './api';


export interface JsonApiPayload {
  data: {[key: string]: any};
  options?: JsonApiOptions;
}

export const JsonApiReducer: ActionReducer<any> =
  (state: JsonApiStore, action: Action) => {
    let newState;

    switch (action.type) {
      case JsonApiActions.API_CREATE_INIT:
        return Object.assign({}, state, { 'isCreating': true });

      case JsonApiActions.API_READ_INIT:
        return Object.assign({}, state, { 'isReading': true });

      case JsonApiActions.API_UPDATE_INIT:
        return Object.assign({}, state, { 'isUpdating': true });

      case JsonApiActions.API_DELETE_INIT:
        return Object.assign({}, state, { 'isDeleting': true });

      case JsonApiActions.API_CREATE_SUCCESS:
        newState = Object.assign({},
          state,
          updateOrCreateReducer(state, action.payload.data),
          { 'isCreating': false }
        );
        return newState;

      case JsonApiActions.API_READ_SUCCESS:
        newState = Object.assign({},
          state,
          updateOrCreateReducer(state, action.payload.data),
          { 'isReading': false }
        );
        return newState;

      case JsonApiActions.API_UPDATE_SUCCESS:
        newState = Object.assign(
          {},
          state,
          updateOrCreateReducer(state, action.payload.data),
          { 'isUpdating': false }
        );
        return newState;

      case JsonApiActions.API_DELETE_SUCCESS:
        newState = Object.assign({}, state, { 'isDeleting': false });
        return newState;

      case JsonApiActions.API_CREATE_FAIL:
        newState = Object.assign({}, state, { 'isCreating': false });
        return newState;

      case JsonApiActions.API_READ_FAIL:
        newState = Object.assign({}, state, { 'isReading': false });
        return newState;

      case JsonApiActions.API_UPDATE_FAIL:
        newState = Object.assign({}, state, { 'isUpdating': false });
        return newState;

      case JsonApiActions.API_DELETE_FAIL:
        newState = Object.assign({}, state, { 'isDeleting': false });
        return newState;

      default:
        return state;
    }
  };
