import { saveGrade } from '../services';


describe('Assessments Actions', () => {

  it('should create a save grade action', () => {
    const expectation = {
      type: 'ASSESSMENT_SAVE_GRADE',
      payload: {
        assessmentId: 1,
        grade: 50
      }
    };
    const result = saveGrade(
      {
        assessmentId: 1,
        grade: 50
      });
    expect(result).toEqual(expectation);
  });
});
