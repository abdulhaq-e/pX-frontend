import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';

import { AssessmentsFormComponent } from './assessments.form.component';
import { saveGrade } from '../services';

@Component({
  selector: 'assessments',
  directives: [AssessmentsFormComponent],
  template: require('./assessments.html')
})
export class AssessmentsComponent implements OnInit, OnDestroy {

  constructor(
    private _store: Store<any>
    ) {
  }

  // dom event streams
  public onSaveGrade$ = new Subject<any>();

  public saveGradeAction$ = this.onSaveGrade$
    .map(event => {
    const path = event.colDef.field.replace('grade', 'id').split('.');
    const id = event.data[path[0]][path[1]][path[2]];
    console.log(event);
    return saveGrade({
      assessmentId: id,
      grade: event.newValue
    });
  });

  private rowData: any = this._store.select('assessmentsReducer');
  // subscription helpers
  private _subscription: Subscription;

  ngOnInit() {
    this._subscription = Observable
      .merge(
      this.saveGradeAction$
      )
      .subscribe(this._store);
    console.log(this.rowData);
  }
  //
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }



}
