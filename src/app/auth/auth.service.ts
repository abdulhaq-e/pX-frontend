// import {Injectable, provide, Inject, EventEmitter} from '@angular/core';
// import {Http, Headers} from '@angular/http';
// import {Router} from '@angular/router';
//
// import {API} from '../api/api.service';
// import {API_BASE_URL} from '../api/apiBaseUrl';
//
// // import {JwtHelper, AuthHttp} from 'angular2-jwt/angular2-jwt';
//
// @Injectable()
// export class AuthService {
//
//   constructor(public http: Http, @Inject(API_BASE_URL) public apiBaseUrl: string,
// public router : Router, public api: API) {
//     //console.log(this.apiBaseUrl);
//   }
//
//   public loggedIn = new EventEmitter();
//   // public jwtHelper = new JwtHelper();
//   public user: any;
//
//   login(credentials: any) {
//
//     let data = {
//       "email": credentials.username + '@students.uot.edu.ly',
//       "password": credentials.password
//     };
//     //console.log(data);
//     // consol
//     let header = new Headers({'Content-Type': 'application/json'});
//     let authURL: string = `${this.apiBaseUrl}auth/login/`;
//     this.http.post(authURL, JSON.stringify(data),{headers: header}).map(
//       response => response.json()).subscribe(
//         data => {
//           localStorage.setItem('token', data.data.token);
//           // let encodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
//           // console.log(encodedToken.person_id);
//           this.api.findOne('people', encodedToken.person_id, 'Person').subscribe(data => {
//             this.user = data;
//             this.loggedIn.next({success: true});
//           })
//         },
//         (error) => this.loggedIn.next({success: false})
//       );
//   }
//
//   logout() {
//     localStorage.removeItem('token');
//     this.router.navigate(['Login']);
//   }
//
// }
//
// export const AUTH_PROVIDERS: Array<any> = [
//   provide(AuthService, {useClass: AuthService})
// ]
