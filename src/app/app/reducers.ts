import { Observable } from 'rxjs/Observable';

import { compose } from '@ngrx/core/compose';

import { storeLogger } from 'ngrx-store-logger';

import { provideStore, combineReducers } from '@ngrx/store';

import { assessmentsReducer, sectionEnrolmentsReducer } from '../section-enrolments';
import * as fromSectionEnrolments from '../section-enrolments/reducers';

const reducer = compose(storeLogger(), combineReducers)({
  assessments: assessmentsReducer,
  sectionEnrolments: sectionEnrolmentsReducer
});

export const APP_REDUCERS_PROVIDER = provideStore({
  reducer
});


export interface AppState {
  assessments: any;
  sectionEnrolments: any;
};

// Selectors:

/*
 * Main selectors that gives the child reducers the child states
 *
 */
export const getSectionEnrolmentsState = () => {
 return (state$: Observable<AppState>) => state$
   .select(s => {
     return s.sectionEnrolments;
   });
};


/*
 * Section Enrolments selectors
 *
 */

export const getSectionEnrolments = (id: string, idType: string) => {
  return compose(fromSectionEnrolments.getSectionEnrolments(id, idType),
  getSectionEnrolmentsState());
  // return getSectionEnrolmentsState();
  // return fromSectionEnrolments.getSectionEnrolments(id, idType);
};
