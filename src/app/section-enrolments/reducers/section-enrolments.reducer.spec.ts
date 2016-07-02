// let deepFreeze = require('deep-freeze');
//
// import {
//   async,
//   it,
//   inject,
//   injectAsync,
//   ddescribe,
//   xdescribe,
//   describe,
//   beforeEachProviders,
//   beforeEach,
//   expect,
//   fakeAsync,
//   iit,
//   tick,
//   xit
// } from '@angular/core/testing';
//
// import { Observable } from 'rxjs/Observable';
//
// import { sectionEnrolmentsReducer, getSectionEnrolments } from '../reducers';
//
// describe('Section Enrolments reducer', () => {
//   let beforeState;
//   beforeEach(() => {
//     beforeState = [{
//       sectionEnrolmentId: '1'
//     }];
//     deepFreeze(beforeState);
//   });
//
//   describe('main reducer', () => {
//
//     it('should perform a sanity check', () => {
//
//       expect(beforeState).toBeDefined();
//       expect(beforeState).toEqual([{
//         sectionEnrolmentId: '1'
//       }]);
//     });
//
//     it('should return state for unkown actions', () => {
//
//       let afterState = sectionEnrolmentsReducer(
//         beforeState, { type: 'RANDOM_ACTION' });
//
//       expect(afterState).toEqual(beforeState);
//
//     });
//   });
//
// });
//
// describe('Section Enrolments selectors', () => {
//
//   let beforeState;
//   beforeEach(() => {
//     beforeState = [
//       // beforeState: [
//         {
//           sectionEnrolmentId: '1',
//           studentId: '1',
//           sectionId: '1'
//         },
//         {
//           sectionEnrolmentId: '2',
//           studentId: '2',
//           sectionId: '1'
//         },
//         {
//           sectionEnrolmentId: '1',
//           studentId: '3',
//           sectionId: '2'
//         }
//       // ]
//     ];
//     deepFreeze(beforeState);
//   });
//
//   describe('getSectionEnrolments selector', () => {
//
//     it('should select enrolments based on sectionEnrolmentId',
//       fakeAsync(() => {
//         let obs = Observable.of(beforeState).let(
//           getSectionEnrolments('1', 'sectionEnrolmentId'))
//           .map(e => e.sectionEnrolmentId).subscribe(s => {
//             // console.log(s);
//             // expect(s.sectionEnrolmentId).toEqual('1');
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
//       }));
//   });
//
// });
