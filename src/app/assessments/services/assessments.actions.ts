import { Action } from '@ngrx/store';

import { ASSESSMENTS_ACTIONS_TYPE } from '../reducers';

export interface IGradePayload {
  assessmentId: any;
  grade: number;
}

export const saveGrade = (payload: IGradePayload) => {
  return {
    type: ASSESSMENTS_ACTIONS_TYPE.ASSESSMENT_SAVE_GRADE,
    payload: payload
  };
};
