import { Action, ActionReducer } from '@ngrx/store';

import { SectionEnrolmentsActions } from '../actions';

export const assessmentsSaveGradeReducer: ActionReducer<any> =
  (state: Array<any> = [], action: Action) => {
    // console.log(state);
      return state.map(a => {
        if (a.assessmentId === action.payload.assessmentId) {
          return Object.assign({}, a,
            { grade: action.payload.grade });
        } else {
          return a;
        }
      });
  };

export const assessmentsReducer: ActionReducer<any> =
  (state: Array<any> = [], action: Action) => {
    // console.log(action);
    switch (action.type) {
      case SectionEnrolmentsActions.ASSESSMENT_SAVE_GRADE:
        return assessmentsSaveGradeReducer(state, action);

      default:
        return state;
    };
  };
