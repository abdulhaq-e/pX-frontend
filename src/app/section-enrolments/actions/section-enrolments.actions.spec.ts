import { SectionEnrolmentsActions } from '../actions';

import {
  async,
  it,
  inject,
  injectAsync,
  ddescribe,
  xdescribe,
  describe,
  beforeEachProviders,
  beforeEach,
  expect,
  fakeAsync,
  iit,
  tick,
  xit
} from '@angular/core/testing';


describe('ٍSection Enrolments Actions', () => {
  let actions;

  beforeEachProviders(() => [SectionEnrolmentsActions]);

  beforeEach(inject([SectionEnrolmentsActions], (seca) => {
    actions = seca;
  }));

  it('should have an assessment save grade action',
    () => {
      expect(SectionEnrolmentsActions.ASSESSMENT_SAVE_GRADE).toBeDefined();
    });


  it('should create a save grade action',
    () => {
      const expectation = {
        type: 'ASSESSMENT_SAVE_GRADE',
        payload: {
          assessmentId: 1,
          grade: 50
        }
      };
      const result = actions.saveGrade(
        {
          assessmentId: 1,
          grade: 50
        });
      expect(result).toEqual(expectation);
    });
});
