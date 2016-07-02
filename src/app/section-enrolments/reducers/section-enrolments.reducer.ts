import { Observable } from 'rxjs/Observable';

import { Action, ActionReducer } from '@ngrx/store';

export const sectionEnrolmentsReducer: ActionReducer<any> =
  (state: Array<any> = [], action: Action) => {
    // switch (action.type) {

    // default: return state;
    // };
    return state;
  };

/*
 * Selectors
 */

export const getSectionEnrolments = (id: string, idType: string) => {
  return (state$: Observable<any>) => {
    // console.log(state$);
    return state$.map(s => s.filter(e => {
      return e[idType] === id;
    }));
  };
};
