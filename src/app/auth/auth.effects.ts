import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { createSaga, whenAction } from 'store-saga';

import { AuthActions } from './auth.actions';
import { AUTH_ACTIONS_TYPE } from './auth.reducer';


const loginSagaFactory = function(http: Http){ // }, auth_actions: AuthActions) {

  return function(saga$: Observable<any>) {
    return saga$
    .filter(whenAction(AUTH_ACTIONS_TYPE.AUTH_REQUEST))
    .map(iteration => iteration.action.payload)
    .map(payload => {
      return {
        type: AUTH_ACTIONS_TYPE.AUTH_SUCCESS,
        payload: payload
      }
      // return auth_actions.auth_success(payload);
      // return http.post('/auth', JSON.stringify(payload))
      //   .map(res => {
      //     return {
      //       type: 'AUTH_SUCCESS',
      //       payload: res.json()
      //     }
      //   })
      // .catch(err => {
      //   return auth_actions.auth_failure(err.json())
      //   });
    });
  };
}

export const loginEffect = createSaga(loginSagaFactory, [Http]);
