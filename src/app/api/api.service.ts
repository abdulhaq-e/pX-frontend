// import {Injectable, Inject} from '@angular/core';
// import {Http, URLSearchParams} from '@angular/http';
// import {Filter} from './filter.interface';
// import JsonApi = require('jsonapi-datastore');
// import * as Rx from 'rxjs';
//
// import {API_BASE_URL} from './apiBaseUrl';
// // import {AuthHttp} from 'angular2-jwt/angular2-jwt';
// //console.log(JsonApi.JsonApiDataStore);
//
// //console.log(store);
//
// @Injectable()
// export class API {
//
//   public store = new JsonApi.JsonApiDataStore();
//
//   constructor(private http: Http, @Inject(API_BASE_URL) public apiBaseUrl: string) {
//     //  console.log(this.store);
//     // console.log(api.query({ 'findRelated': { type:
//     //'PeriodCourse', id: '124', relationship: 'assessments' }}));
//   }
//
//   findAll(ResourceType: string, ResourceTypeUrl: string,
//     filters?: Filter[]) {
//     var searchParams = new URLSearchParams();
//     // console.log('hello there');
//     if (filters) {
//       // console.log('hello again');
//       filters.forEach(filter => {
//         searchParams.set(
//           'filter[' + filter.field + ']',
//           filter.value);
//       }
//         );
//     };
//     //      console.log('iam here');
//     return Rx.Observable.create(observer => {
//       this.http.get(this.apiBaseUrl + ResourceTypeUrl,
//         { search: searchParams })
//         .map(response => response.json())
//         .subscribe(data => {
//         this.store.syncWithMeta(data);
// //        console.log(this.store);
//         observer.next(this.store.findAll(ResourceType));
//         observer.complete();
//       });
//     }
//   );
//   }
//
//   findOne(baseType: string, id: string, entityType: string) {
//     return Rx.Observable.create(observer => {
//       this.http.get(this.apiBaseUrl + baseType + '/' + id)
//         .map(response => response.json())
//         .subscribe(data => {
//           this.store.syncWithMeta(data);
//           observer.next(this.store.find(entityType, id));
//           observer.complete();
//         });
//     })
// }
//   //
//   // getCourses() {
//   //   var params = new URLSearchParams();
//   //   params.set('filter[course.code]', 'AE325');
//   //   console.log(params);
//   //   return this.http
//   //     .get('http://localhost:8001/api/v1/period-courses',
//   //     { search: params })
//   //     .map(response => response.json());
//   // }
//   // //
// }
//     //
