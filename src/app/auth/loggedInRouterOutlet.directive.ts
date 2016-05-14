// import {Directive, Attribute, ElementRef, DynamicComponentLoader} from '@angular/core';
// import {Router, RouterOutlet, ComponentInstruction} from '@angular/router';
// //mport {Login} from '../login/login';
//
// import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
//
// @Directive({
//   selector: 'logged-in-router-outlet'
// })
// export class LoggedInRouterOutlet extends RouterOutlet {
//   publicRoutes: any;
//   private parentRouter: Router;
//
//   constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
//               _parentRouter: Router, @Attribute('name') nameAttr: string) {
//     super(_elementRef, _loader, _parentRouter, nameAttr);
//
//     this.parentRouter = _parentRouter;
//     this.publicRoutes = {
//       'login': true,
//     };
//   }
//
//   activate(nextInstruction: ComponentInstruction) {
//     // TODO: NEEDS TO BE IMPLEMENTED
//     // console.log(nextInstruction)
//   //   var urlPath = nextInstruction.urlPath;
//   //   console.log("I'm the urlPath: ", urlPath);
//   //   // // console.log("hello", url);
//   //   // console.log(this.parentRouter.navigateByUrl);
//   //   if (!this.publicRoutes[urlPath] && !tokenNotExpired('token')) {
//   //     this.parentRouter.navigate(['./Login'])
//   // //     var instruction = this.parentRouter.generate(['Login'])
//   // //     // console.log(instruction);
//   // //     var nextInstruction = instruction.component;
//   // // } else if (this.publicRoutes[urlPath] && tokenNotExpired('token')) {
//   // //     var instruction = this.parentRouter.generate(['Home']);
//   // //     var nextInstruction = instruction.component;
//   //   }
//   //   console.log(nextInstruction);
//     return super.activate(nextInstruction);
//   }
// }
