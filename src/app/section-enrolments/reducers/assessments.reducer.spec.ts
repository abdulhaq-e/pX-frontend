let deepFreeze = require('deep-freeze');

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

import { assessmentsSaveGradeReducer, assessmentsReducer } from '../reducers';
import { SectionEnrolmentsActions } from '../actions';

describe('Assessments reducer', () => {
  let actions;

  beforeEachProviders(() => [SectionEnrolmentsActions]);

  beforeEach(inject([SectionEnrolmentsActions], (seca) => {
    actions = seca;
  }));

  describe('save grade reducer', () => {

    it('should save grade given a list made of a single assessment',
      () => {
        const beforeState = [{
          assessmentId: 1,
          grade: undefined
        }];
        deepFreeze(beforeState);

        const afterState = assessmentsSaveGradeReducer(beforeState,
          actions.saveGrade(
            {
              assessmentId: 1,
              grade: 50
            })
        );

        expect(afterState).toEqual([{
          assessmentId: 1,
          grade: 50
        }]);
      });

    it('should save grade given a list of multiple assessments', () => {
      const beforeState = [
        {
          assessmentId: 1,
          grade: undefined
        },
        {
          assessmentId: 2,
          grade: 10
        }
      ];
      deepFreeze(beforeState);

      const afterState = assessmentsSaveGradeReducer(beforeState, actions.saveGrade(
        {
          assessmentId: 1,
          grade: 50
        }));

      expect(afterState).toEqual([
        {
          assessmentId: 1,
          grade: 50
        },
        {
          assessmentId: 2,
          grade: 10
        }
      ]);
    });
  });

  describe('main assessments reducer', () => {

    it('should save grade given a list of assessments',
      () => {
        const beforeState = [{
          assessmentId: 1,
          grade: undefined
        }];
        deepFreeze(beforeState);

        const afterState = assessmentsReducer(beforeState, actions.saveGrade(
          {
            assessmentId: 1,
            grade: 50
          }));

        expect(afterState).toEqual([{
          assessmentId: 1,
          grade: 50
        }]);
      });

    it('should save grade given a list of multiple assessments', () => {
      const beforeState = [
        {
          assessmentId: 1,
          grade: undefined
        },
        {
          assessmentId: 2,
          grade: 10
        }
      ];
      deepFreeze(beforeState);

      const afterState = assessmentsReducer(beforeState, actions.saveGrade(
        {
          assessmentId: 1,
          grade: 50
        }));

      expect(afterState).toEqual([
        {
          assessmentId: 1,
          grade: 50
        },
        {
          assessmentId: 2,
          grade: 10
        }
      ]);
    });
  });
});
