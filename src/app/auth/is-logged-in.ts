// import {Injector, Inject} from '@angular/core';
// import {Router, RouteParams, ComponentInstruction} from '@angular/router';
//
//
// import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
//
// import {appInjector} from '../utils/appInjector';
//
// export const isLoggedIn = (next: ComponentInstruction, prev: ComponentInstruction) => {
//   let injector : Injector = appInjector(); // get the stored reference to the injector
// 	let params:any = next.params;
//   let router: Router = injector.get(Router);
//
//   if (!tokenNotExpired('token')) {
//     // console.log
//     router.navigate(['/Login']);
//     return false;
//   } else {
//     return true;
//   }
// }
