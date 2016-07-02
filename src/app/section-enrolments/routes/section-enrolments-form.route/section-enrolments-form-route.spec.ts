import {
  Component,
  Injectable,
  Output,
  EventEmitter,
  provide
} from '@angular/core';

import {
  APP_BASE_HREF
} from '@angular/common';

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

import {
  ComponentFixture,
  TestComponentBuilder
} from '@angular/compiler/testing';

import {
  provideStore,
  combineReducers
} from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import {
  RouteParams,
  provideRouter
} from '@ngrx/router';

import {  SectionEnrolmentsFormComponent } from '../../components';
import {  SectionEnrolmentsFormRoute } from '../../routes';

import { assessmentsReducer, sectionEnrolmentsReducer } from '../../reducers';

import { SectionEnrolmentsActions } from '../../actions';
import { SectionEnrolmentsRoutes } from '../../routes';

@Component({
  selector: 'mock-child-comp',
  template: `<span>Hello I'm the Mock Child</span>`
})
class MockChildComp {
  @Output() gradeChanged: EventEmitter<any> = new EventEmitter();
}

let builder;
let actions;
let routeParams;

describe('Section Enrolments Form Route Component', () => {

  beforeEachProviders(() => [TestComponentBuilder,
    SectionEnrolmentsActions,
    provide(RouteParams, {
      useFactory: () =>
        Observable.of({ 'sectionId': '1' })
    }),
    provideStore({ assessments: assessmentsReducer }, {
      assessments: [
        {
          assessmentId: 1,
          grade: undefined
        },
        {
          assessmentId: 2,
          grade: undefined
        }
      ]
    })
    // provideRouter(SectionEnrolmentsRoutes),
    // provide(APP_BASE_HREF, {useValue: '/'})
  ]);

  beforeEach(inject([TestComponentBuilder, SectionEnrolmentsActions,
    RouteParams],
    (tcb, seca, params) => {
      builder = tcb;
      actions = seca;
      routeParams = params;
    }));

  it('should override template', async(() => {
    builder.overrideTemplate(
      SectionEnrolmentsFormRoute,
      `<span>Hello</span>`)
      .createAsync(SectionEnrolmentsFormRoute).then(
      (fixture: ComponentFixture<SectionEnrolmentsFormRoute>) => {
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled).toHaveText('Hello');
      });
  }));

  it('should override the component directives', async(() => {
    builder.overrideDirective(
      SectionEnrolmentsFormRoute,
      SectionEnrolmentsFormComponent, MockChildComp)
      .overrideTemplate(
      SectionEnrolmentsFormRoute,
      '<mock-child-comp></mock-child-comp>')
      .createAsync(SectionEnrolmentsFormRoute).then(
      (fixture: ComponentFixture<SectionEnrolmentsFormRoute>) => {
        // fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        // console.log(compiled);
        expect(compiled).toHaveText(`Hello I'm the Mock Child`);
      });
  }));

  // it('should listen to gradeChanged events', fakeAsync(() => {
  //   let fixture: ComponentFixture<SectionEnrolmentsFormRoute> = builder.overrideDirective(
  //     SectionEnrolmentsFormRoute,
  //     SectionEnrolmentsFormComponent, MockChildComp)
  //     .overrideTemplate(
  //     SectionEnrolmentsFormRoute,
  //     '<mock-child-comp (gradeChanged)="sayHello()"></mock-child-comp>')
  //     .createFakeAsync(SectionEnrolmentsFormRoute);
  //   let compiled = fixture.debugElement.nativeElement;
  //   let listened = fixture.debugElement.componentInstance.listened;
  //   listened = false;
  //   expect(listened).toBe(false);
  //   fixture.debugElement.componentInstance.sayHello = () => {
  //     listened = true;
  //   };
  //   tick();
  //   let mock = fixture.debugElement.children[0].componentInstance;
  //   mock.gradeChanged.emit(10);
  //   expect(listened).toBe(false);
  //   tick();
  //   expect(listened).toBe(true);
  //   // console.log(fixture);
  //   // });
  // }));

  describe('save grade action', () => {
    it('should recieve a gradeChanged event and create a save grade action',
      fakeAsync(() => {
        let fixture: ComponentFixture<SectionEnrolmentsFormRoute>
          = builder.overrideDirective(
            SectionEnrolmentsFormRoute,
            SectionEnrolmentsFormComponent, [])
            .overrideTemplate(
            SectionEnrolmentsFormRoute,
            '<span>Mi chiamo Alessandro Volta</span>')
            .createFakeAsync(SectionEnrolmentsFormRoute);
        let saveGradeAction$ = fixture.debugElement.componentInstance.saveGradeAction$;
        // console.log(fixture.debugElement.componentInstance.onSaveGrade$);
        let event1 = {
          colDef: {
            colId: 'carryMarks'
          },
          newValue: 50,
          data: {
            carryMarksId: 1
          }
        };
        let event2 = {
          colDef: {
            colId: 'finalExam'
          },
          newValue: 40,
          data: {
            finalExamId: 2
          }
        };
        // tick();
        let subscription1 = saveGradeAction$.subscribe(event => {
          // console.log(event);
          expect(event).toEqual(actions.saveGrade({
            assessmentId: 1,
            grade: 50
          }));
        });
        saveGradeAction$.next(event1);

        tick();
        subscription1.unsubscribe();
        tick();

        let subscription2 = saveGradeAction$.subscribe(event => {
          // console.log(event);
          expect(event).toEqual(actions.saveGrade({
            assessmentId: 2,
            grade: 40
          }));
        });
        saveGradeAction$.next(event2);
        tick();
      }));

    it('should update the store',
      fakeAsync(() => {
        let fixture: ComponentFixture<SectionEnrolmentsFormRoute> = builder.overrideDirective(
          SectionEnrolmentsFormRoute,
          SectionEnrolmentsFormComponent, [])
          .overrideTemplate(
          SectionEnrolmentsFormRoute,
          '<span>Mi chiamo Alessandro Volta</span>')
          .createFakeAsync(SectionEnrolmentsFormRoute);
        let saveGradeAction$ = fixture.debugElement.componentInstance.saveGradeAction$;
        // console.log(fixture.debugElement.componentInstance.onSaveGrade$);
        fixture.detectChanges();
        let event1 = {
          colDef: {
            colId: 'carryMarks'
          },
          newValue: 50,
          data: {
            carryMarksId: 1
          }
        };
        let event2 = {
          colDef: {
            colId: 'finalExam'
          },
          newValue: 40,
          data: {
            finalExamId: 2
          }
        };
        // tick();
        let store = fixture.debugElement.componentInstance.store;
        let assessments;
        store.select(state => state.assessments).subscribe(data => {
          // console.log(data);
          assessments = data;
        });
        tick();
        saveGradeAction$.next(event1);
        saveGradeAction$.next(event2);
        tick();
        let subscription = fixture.debugElement.componentInstance.subscription;
        // console.log(store);
        // console.log(subscription);
        // console.log(assessments);
        expect(assessments).toEqual(
          [
            {
              assessmentId: 1,
              grade: 50
            },
            {
              assessmentId: 2,
              grade: 40
            }
          ]
        );
      }));
  });

  describe('sectionId', () => {

    it('should receive values from RouteParams',
      fakeAsync(() => {
        let fixture: ComponentFixture<SectionEnrolmentsFormRoute> = builder.overrideDirective(
          SectionEnrolmentsFormRoute,
          SectionEnrolmentsFormComponent, [])
          .overrideTemplate(
          SectionEnrolmentsFormRoute,
          '<span>Mi chiamo Leonardo Da Vinci</span>')
          .createFakeAsync(SectionEnrolmentsFormRoute);
        let sectionId$ = fixture.debugElement.componentInstance.sectionId$;
        // console.log(sectionId$);
        // fixture.detectChanges();
        sectionId$.subscribe(s => {
          console.log(s);
          expect(s).toEqual('1');
        })
        // tick();
      }));
  });
});


describe('enrolments', () => {

  beforeEachProviders(() => [TestComponentBuilder,
    SectionEnrolmentsActions,
    provide(RouteParams, {
      useFactory: () =>
        Observable.of({ 'sectionId': '1' })
    }),
    provideStore(combineReducers({
      sectionEnrolments: sectionEnrolmentsReducer,
      assessments: assessmentsReducer
    }), {
        sectionEnrolments: [
          {
            sectionId: '1',
            sectionEnrolmentId: '1',
            assessments: [
              { assessmentId: '1' },
              { assessmentId: '2' }
            ]
          },
          {
            sectionId: '2',
            sectionEnrolmentId: '2',
            assessments: [
              { assessmentId: '3' },
              { assessmentId: '4' }
            ]
          }
        ],
        assessments: [
          {
            assessmentId: '1',
            grade: 40
          },
          {
            assessmentId: '2',
            grade: 50
          },
          {
            assessmentId: '3',
            grade: undefined
          },
          {
            assessmentId: 4,
            grade: undefined
          }
        ]
      })
    // provideRouter(SectionEnrolmentsRoutes),
    // provide(APP_BASE_HREF, {useValue: '/'})
  ]);

  beforeEach(inject([TestComponentBuilder, SectionEnrolmentsActions,
    RouteParams],
    (tcb, seca, params) => {
      builder = tcb;
      actions = seca;
      routeParams = params;
    }));


  it('should obtain values based on sectionId',
    fakeAsync(() => {
      let fixture: ComponentFixture<SectionEnrolmentsFormRoute> = builder.overrideDirective(
        SectionEnrolmentsFormRoute,
        SectionEnrolmentsFormComponent, [])
        .overrideTemplate(
        SectionEnrolmentsFormRoute,
        '<span>Mi chiamo Aljazari</span>')
        .createFakeAsync(SectionEnrolmentsFormRoute);
      let sectionId$ = fixture.debugElement.componentInstance.sectionId$;
      let enrolments$ = fixture.debugElement.componentInstance.enrolments$;
      // console.log(enrolments$);
      // fixture.detectChanges();
      // sectionId$.subscribe(s => console.log(s));
      // enrolments$.subscribe(s => {
        // console.log(s);
        // expect(s).toEqual('1');
      // });
      // routeParams =
      tick();
    }));
});
