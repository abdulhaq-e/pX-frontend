/*
 * These are globally available directives in any template
 */

import {PLATFORM_DIRECTIVES} from '@angular/core';

// Angular 2 Router
// import {ROUTER_DIRECTIVES} from '@angular/router'; // not using it;

// Angular 2 Material 2
import {MATERIAL_DIRECTIVES} from './angular2-material2';

// Angular 2 Forms
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  // ...ROUTER_DIRECTIVES,
  ...MATERIAL_DIRECTIVES,
  ...REACTIVE_FORM_DIRECTIVES
];

export const DIRECTIVES = [
  {provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }
];
