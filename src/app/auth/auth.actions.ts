import { Injectable, EventEmitter } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Action } from '@ngrx/store';

import { AUTH_ACTIONS_TYPE } from './auth.reducer';
import { AppStore } from '../app.interface';


@Injectable()
export class AuthActions {

  constructor() {
  }

  auth_request(credentials: any) {
    return {
      type: AUTH_ACTIONS_TYPE.AUTH_REQUEST,
      payload: credentials
    }
  }

  auth_success(response: any) {
     return {
      type: AUTH_ACTIONS_TYPE.AUTH_SUCCESS,
      payload: response
    }
  }

  auth_failure(response: any) {
    return {
      type: AUTH_ACTIONS_TYPE.AUTH_FAILURE,
      payload: response
    }
  }

}
