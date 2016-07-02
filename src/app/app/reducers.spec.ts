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

import { Observable } from 'rxjs/Observable';

let deepFreeze = require('deep-freeze');

import { AppState,
  getSectionEnrolmentsState,
  getSectionEnrolments} from './reducers';
// import * as fromSectionEnrolments from '../section-enrolments/reducers';


describe('Main state selectors', () => {
  let state;
  beforeEach(() => {
    state = [{
      sectionEnrolments: 'sectionEnrolments'
    }];
  });

  describe('section enrolments state selector', () => {

    it('should select the child section enrolments state', fakeAsync(() => {
      let obs = Observable.from(state).let(
        getSectionEnrolmentsState()).subscribe(s => {
          expect(s).toEqual('sectionEnrolments');
        });
      tick();
    }));

  });

});

// describe('Section Enrolments root selectors', () => {
//
//   let beforeState;
//   beforeEach(() => {
//     beforeState = [
//       {
//         sectionEnrolments:
//         [
//           {
//             sectionEnrolmentId: '1',
//             studentId: '1',
//             sectionId: '1'
//           },
//           {
//             sectionEnrolmentId: '2',
//             studentId: '2',
//             sectionId: '1'
//           },
//           {
//             sectionEnrolmentId: '3',
//             studentId: '3',
//             sectionId: '2'
//           }
//         ]
//       }];
//     deepFreeze(beforeState);
//   });
//
//   describe('getSectionEnrolments selector', () => {
//
//     it('should select enrolments based on sectionEnrolmentId',
//       fakeAsync(() => {
//         let obs = Observable.from(beforeState).let(
//           getSectionEnrolments('1', 'sectionEnrolmentId')).subscribe(s => {
//             expect(s.sectionEnrolmentId).toEqual('1');
//           });
//         tick();
//       }));
//
//     it('should select enrolments based on sectionId',
//       fakeAsync(() => {
//         let obs = Observable.from(beforeState).let(
//           getSectionEnrolments('1', 'sectionId')).subscribe(s => {
//             expect(s.sectionId).toEqual('1');
//           });
//         tick();
//       }));
//
//     it('should select enrolments based on studentId',
//       fakeAsync(() => {
//         let obs = Observable.from(beforeState).let(
//           getSectionEnrolments('2', 'studentId')).subscribe(s => {
//             expect(s.studentId).toEqual('2');
//           });
//         tick();
//         let obs2 = Observable.from(beforeState).let(
//           getSectionEnrolments('10000', 'studentId')).subscribe(s => {
//             expect(s).not.toBeDefined();
//           });
//         tick();
//
//       }));
//
//   });
// });
