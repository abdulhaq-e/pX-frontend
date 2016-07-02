import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

export interface GradePayload {
  assessmentId: any;
  grade: number;
}

@Injectable()
export class SectionEnrolmentsActions {

  static ASSESSMENT_SAVE_GRADE = 'ASSESSMENT_SAVE_GRADE';
  saveGrade(payload: GradePayload): Action {
    return {
      type: SectionEnrolmentsActions.ASSESSMENT_SAVE_GRADE,
      payload: payload
    };
  }

}
