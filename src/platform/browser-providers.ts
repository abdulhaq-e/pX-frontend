/*
 * These are globally available services in any component or any other service
 */

import {provide} from '@angular/core';

// Angular 2
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

// Angular 2 Http
import {HTTP_PROVIDERS} from '@angular/http';

// Angular 2 Router
// import {ROUTER_PROVIDERS} from '@angular/router'; // not using it

// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';

// Angular 2 Material
import {MATERIAL_PROVIDERS} from './angular2-material2';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms
  disableDeprecatedForms(),
  provideForms(),

  ...HTTP_PROVIDERS,

  ...MATERIAL_PROVIDERS,
  // ...ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
