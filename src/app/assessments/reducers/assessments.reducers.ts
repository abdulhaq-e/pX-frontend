import { Action, Reducer } from '@ngrx/store';

export const ASSESSMENTS_ACTIONS_TYPE = {
  ASSESSMENT_SAVE_GRADE: 'ASSESSMENT_SAVE_GRADE'
};

export const assessment: Reducer<any> =
  (state: any = {}, action: Action) => {

    switch (action.type) {
      case ASSESSMENTS_ACTIONS_TYPE.ASSESSMENT_SAVE_GRADE:
        if (state.assessmentId === action.payload.assessmentId) {
          return Object.assign({}, state,
            { grade: action.payload.grade });
        }
        return state;

      default:
        return state;
    };
  };

const initial = [{
  name: 'abdulhaq',
  assessments: {
    carry_marks:
    {
      id: 5,
      grade: 70
    },
    final_exam:
    {
      id: 6,
      grade: 50
    },
    total:
    {
      id: 7,
      grade: 60
    },
  },
  notes: ''
}];

export const assessmentsReducer: Reducer<any> =
  (state: Array<any> = initial, action: Action) => {

    switch (action.type) {
      case ASSESSMENTS_ACTIONS_TYPE.ASSESSMENT_SAVE_GRADE:
        return state.map(a => assessment(a, action));

      default:
        return state;
    };
  };
