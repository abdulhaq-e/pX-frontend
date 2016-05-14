// import {
//   it,
//   inject,
//   injectAsync,
//   describe,
//   beforeEachProviders,
//   TestComponentBuilder
// } from '@angular/testing';
//
// import {Component, provide} from '@angular/core';
// import {BaseRequestOptions, Http} from '@angular/http';
// import {MockBackend} from '@angular/http/testing';
// import {WebpackState} from 'angular2-hmr';
//
// // Load the implementations that should be tested
// import {Home} from './home.component';
// import {Title} from './title';
// import {AppState} from '../app.service';
//
// describe('Home', () => {
//   // provide our implementations or mocks to the dependency injector
//   beforeEachProviders(() => [
//     BaseRequestOptions,
//     MockBackend,
//     provide(Http, {
//       useFactory: function(backend, defaultOptions) {
//         return new Http(backend, defaultOptions);
//       },
//       deps: [MockBackend, BaseRequestOptions]
//     }),
//
//     WebpackState,
//     AppState,
//     Title,
//     Home
//   ]);
//
//   it('should have default data', inject([ Home ], (home) => {
//     expect(home.localState).toEqual({ value: '' });
//   }));
//
//   it('should have a title', inject([ Home ], (home) => {
//     expect(!!home.title).toEqual(true);
//   }));
//
//   it('should log ngOnInit', inject([ Home ], (home) => {
//     spyOn(console, 'log');
//     expect(console.log).not.toHaveBeenCalled();
//
//     home.ngOnInit();
//     expect(console.log).toHaveBeenCalled();
//   }));
//
// });
