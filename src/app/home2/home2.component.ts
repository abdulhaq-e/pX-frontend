import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {AppStore} from '../app.interface';

import { Subscription } from 'rxjs/Subscription';

import {SECOND, DAY, HOUR} from '../reducers/tick';
import {Store} from '@ngrx/store';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home-two',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [require('./home.css')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home2.html')
})
export class Home2 implements OnInit, OnDestroy {

  clock: Observable<Date>;
  timer: Subscription;

  constructor(public store: Store<AppStore>) {
  }

  ngOnInit() {

    this.clock = this.store.select('tick');
    this.timer = Observable
    .interval(1000)
    .map(()=> ({
      type: SECOND,
      payload: 1
    }))
    .subscribe(this.store.dispatch.bind(this.store))
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }

  onDayBack() {
    this.store.dispatch({
      type: DAY,
      payload: -1
    })
  }

  onDayForward() {
    this.store.dispatch({
      type: DAY,
      payload: 1
    })
  }

  onHourBack() {
    this.store.dispatch({
      type: HOUR,
      payload: -1
    })
  }

  onHourForward() {
    this.store.dispatch({
      type: HOUR,
      payload: 1
    })
  }

}
