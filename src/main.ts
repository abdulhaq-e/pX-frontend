
/*
 * Providers provided by Angular
 */
import * as browser from '@angular/platform/browser';
import * as ngCore from '@angular/core';
import {
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/router';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';
import {RouterActive} from './app/directives/router-active';


// import {API} from './app/api/api.service';
// import {API_BASE_URL, API_BASE_URL_VALUE} from './app/api/apiBaseUrl.ts';
// import {AUTH_PROVIDERS} from './app/auth/auth.service';
// import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';

// import {appInjector} from './app/utils/appInjector';


/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
// application_providers: providers that are global through out the application
const APPLICATION_PROVIDERS = [
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  ...FORM_PROVIDERS,
  ngCore.provide(LocationStrategy, { useClass: HashLocationStrategy })
];

// application_directives: directives that are global through out the application
const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  RouterActive
];

// application_pipes: pipes that are global through out the application
const APPLICATION_PIPES = [

];

// Environment
if ('production' === ENV) {
  // Production
  ngCore.enableProdMode();
  APPLICATION_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS_PROD_MODE);
} else {
  // Development
  APPLICATION_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS);
}


/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
  return browser.bootstrap(App, [
    ...APPLICATION_PROVIDERS,
    ngCore.provide(ngCore.PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true}),
    ngCore.provide(ngCore.PLATFORM_PIPES, {useValue: APPLICATION_PIPES, multi: true})
  ])
  .catch(err => console.error(err));
}
    // ngCore.provide(API_BASE_URL, { useValue: API_BASE_URL_VALUE }),
    // API,
    // AUTH_PROVIDERS,
    // ngCore.provide(AuthHttp, {
      // useFactory: (http) => {
          // headerName: YOUR_HEADER_NAME,
          // headerPrefix: 'JWT',
          // tokenName: 'token',
          // tokenGetter: YOUR_TOKEN_GETTER_FUNCTION,
          // noJwtError: false
        // }), http);
      // },
      // deps: [Http]
    // }),
    //AuthHttp,
  // .then(
    // (appRef: ngCore.ComponentRef) => {
    //   // store a reference to the injector
    //   appInjector(appRef.injector);
    // })
//    .catch(err => console.error(err));
//}

/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */

function bootstrapDomReady() {
  // bootstrap after document is ready
  return document.addEventListener('DOMContentLoaded', main);
}

if ('development' === ENV) {
  // activate hot module reload
  if (HMR) {
    if (document.readyState === 'complete') {
      main();
    } else {
      bootstrapDomReady();
    }
    module.hot.accept();
  } else {
    bootstrapDomReady();
  }
} else {
  bootstrapDomReady();
}



/*
 * App Environment Providers
 * providers that only live in certain environment
 */
const ENV_PROVIDERS = [];

if ('production' === process.env.ENV) {
  ngCore.enableProdMode();
  ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS_PROD_MODE);
} else {
  ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS);
}
