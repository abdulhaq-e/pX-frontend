const deepFreeze = require('deep-freeze');

import { ASSESSMENTS_ACTIONS_TYPE, assessmentsReducer, assessment
} from '../reducers';
import { saveGrade } from '../services';

describe('Assessment action types', () => {

  it('should have an assessment save grade', () => {
    expect(ASSESSMENTS_ACTIONS_TYPE.ASSESSMENT_SAVE_GRADE).toBeDefined();
  });

});

describe('Assessments reducer', () => {

  it('should save grade using the subreducer given a single assessmentf',
    () => {
      const beforeState = {
        assessmentId: 1,
        grade: undefined
      };
      deepFreeze(beforeState);

      const afterState = assessment(beforeState, saveGrade(
        {
          assessmentId: 1,
          grade: 50
        }));

      expect(afterState).toEqual({
        assessmentId: 1,
        grade: 50
      });
    });

  it('should save grade given a list of assessments', () => {
    const beforeState = [{
      assessmentId: 1,
      grade: undefined
    }];
    deepFreeze(beforeState);

    const afterState = assessmentsReducer(beforeState, saveGrade(
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

    const afterState = assessmentsReducer(beforeState, saveGrade(
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
