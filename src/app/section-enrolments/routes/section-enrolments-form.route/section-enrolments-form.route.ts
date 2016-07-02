import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { RouteParams } from '@ngrx/router';

import { SectionEnrolmentsFormComponent } from '../../components';
import { SectionEnrolmentsActions } from '../../actions';
import { getSectionEnrolments } from '../../../app/reducers';

@Component({
  selector: 'section-enrolments-form-route',
  directives: [SectionEnrolmentsFormComponent],
  template: require('./section-enrolments-form.route.html')
})
export class SectionEnrolmentsFormRoute implements OnInit, OnDestroy {


  public sectionId$: Observable<any>;
  public enrolments$: Observable<any>;

  // dom event streams
  public onSaveGrade$ = new Subject<any>();

  public saveGradeAction$ = this.onSaveGrade$
    .map(event => {
      let typeOfId;
      if (event.colDef.colId === 'carryMarks') {
        typeOfId = 'carryMarksId';
      } else if (event.colDef.colId === 'finalExam') {
        typeOfId = 'finalExamId';
      }
      // console.log(event.data[typeOfId]);
      return this.sectionEnrolmentsActions.saveGrade({
        assessmentId: event.data[typeOfId],
        grade: event.newValue
      });
    });

  // public enrolments: any = [
  //   {
  //     'studentName': 'abdulhaq',
  //     'carryMarks': 50,
  //     'finalExam': 50,
  //     'notes': '',
  //     'sectionEnrolmentId': 1,
  //     'carryMarksId': 1,
  //     'finalExamId': 1
  //   }
  // ];
  // this.store.select('assessmentsReducer');

  // subscription helpers
  private subscription: Subscription;

  constructor(
    private store: Store<any>,
    private sectionEnrolmentsActions: SectionEnrolmentsActions,
    private routeParams$: RouteParams
  ) {

    this.sectionId$ = this.routeParams$.select<string>(
      'sectionId');
    this.enrolments$ = store.let(getSectionEnrolments('1', 'sectionId'));
    // this.sectionId$.switchMap(
    //   sectionId => store.let(getSectionEnrolments(
    //     '1', 'sectionId')));
  }

  ngOnInit() {
    this.sectionId$.subscribe(d => console.log(d));
    this.subscription = Observable
      .merge(
      this.saveGradeAction$
      )
      .subscribe(this.store);
    // console.log(this.enrolments);
  }
  //
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  add() {
    // this.enrolments = [{'count': this.enrolments[0]['count']+1}]
    // console.log(this.enrolments);
  }

}
