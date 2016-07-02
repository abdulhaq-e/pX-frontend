/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <md-toolbar color="primary">
    <span>{{name}}</span>
      <nav>
        <ul>
          <li>
            <a linkTo="/">Home</a>
          </li>
          |
          <li>
            <a linkTo="/home2">Home2</a>
          </li>
          |
          <li>
            <a linkTo="/login">Login</a>
          </li>
        </ul>
      </nav>
    </md-toolbar>
    <main>
      <route-view></route-view>
    </main>
    <footer>
    FOOTER
    </footer>
  `
})
export class App {

  constructor() { }

}
