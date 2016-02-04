/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';

import {Home} from './home/home';
import {CoursesComponent} from './courses/courses.component';

@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  // styles: [require('../assets/css/semantic.min.css')],
  template: `
  <div class="container-fluid">
  <div class="row">
  <div class="col-md-3">
    <header>
      <nav>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Courses'] ">Courses</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['About'] ">About</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <div class="col-md-6">
    <main>
      <router-outlet></router-outlet>
    </main>

    </div>
  <div class="col-md-3">
  what should be here
  </div>
  </div>
  </div>
  `
})
@RouteConfig([
    {
        path: '/',
        component: Home,
        name: 'Home',
        useAsDefault: true
    },
    {
        path: '/courses/...',
        component: CoursesComponent,
        name: 'Courses'
    },
    // Async load a component using Webpack's require with es6-promise-loader
    { path: '/about', loader: () => require('./about/about')('About'), name: 'About' },
    { path: '/**',
      redirectTo: ['Home']
    }
])
export class App {

    constructor() {

  }
}
