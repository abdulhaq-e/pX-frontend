// import {Component, ChangeDetectionStrategy} from '@angular/core';
// import {Observable} from 'rxjs/Rx';
//
// import {AppStore} from '../app/app.interface';
//
// import {INCREMENT, DECREMENT, RESET} from '../reducers/counter';
// import {Store} from '@ngrx/store';
//
// @Component({
//   // The selector is what angular internally uses
//   // for `document.querySelectorAll(selector)` in our index.html
//   selector: 'home',  // <home></home>
//   // We need to tell Angular's Dependency Injection which providers are in our app.
//   providers: [
//   ],
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   // We need to tell Angular's compiler which directives are in our template.
//   // Doing so will allow Angular to attach our behavior to an element
//   directives: [
//   ],
//   // We need to tell Angular's compiler which custom pipes are in our template.
//   pipes: [ ],
//   // Our list of styles in our component. We may add more to compose many styles together
//   styles: [ require('./home.css') ],
//   // Every Angular template is first compiled by the browser before Angular runs it's compiler
//   template: require('./home.html')
// })
// export class Home {
//
//   count: Observable<Date>;
//
//   constructor(public store: Store<AppStore>) {
//     this.count = store.select('counter');
//   }
//
//   increment() {
//     this.store.dispatch({ type: INCREMENT });
//     // console.log(`count is now ${this.count}`);
//     // this.counter.subscribe(d => console.log(d));
//   }
//
//   decrement() {
//     this.store.dispatch({ type: DECREMENT });
//     // console.log(`count is now ${this.count}`);
//     // this.counter.subscribe(d => console.log(d));
//   }
//
//   reset() {
//     this.store.dispatch({ type: RESET })
//   }
//
//   ngOnInit() {
//     console.log('hello `Home` component');
//     // this.title.getData().subscribe(data => this.data = data);
//   }
//
// }
