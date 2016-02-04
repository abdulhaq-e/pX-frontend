import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';


import {Title} from './services/title';
import {XLarge} from './directives/x-large';

@Component({
    selector: 'home',  // <home></home>
    providers: [
        Title
    ],
    directives: [
            ...FORM_DIRECTIVES,
        XLarge
    ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
    styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {

  data = { value: '' };
  // TypeScript public modifiers
  constructor(public title: Title) {

  }

  ngOnInit() {
    console.log('hello Home component');
  }

}
