// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
// import '@angular/router-deprecated'; // not using this router

// RxJS
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';

import '@ngrx/core/add/operator/select';
// import 'rxjs/Rx';

// Angular 2 Material 2
import '@angular2-material/button';
import '@angular2-material/card';
import '@angular2-material/checkbox';
import '@angular2-material/grid-list';
import '@angular2-material/input';
import '@angular2-material/list';
import '@angular2-material/radio';
import '@angular2-material/progress-bar';
import '@angular2-material/progress-circle';
import '@angular2-material/sidenav';
import '@angular2-material/slide-toggle';
import '@angular2-material/tabs';
import '@angular2-material/toolbar';
// look in src/platform/angular2-material2 and src/platform/providers

if ('production' === ENV) {
  // Production


} else {
  // Development
}

import '@ngrx/core';
import '@ngrx/store';
import '@ngrx/effects';
import '@ngrx/router';
import 'ag-grid-ng2';
// import 'jquery';
// import 'jsonapi-datastore/dist/jsonapi-datastore';
// import 'angular2-jwt/angular2-jwt';
