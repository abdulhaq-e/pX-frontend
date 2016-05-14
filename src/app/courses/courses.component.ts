// import {Component} from '@angular/core';
// import {RouteConfig, RouterOutlet} from '@angular/router';
//
// import {CoursesListComponent} from './courses-list.component';
// import {PeriodCoursesDetailComponent} from './period-courses.detail.component';
// //import {PeriodCourseAssessmentsComponent} from './courses-list.component';
// import {PeriodsService} from '../periods/periods.service';
//
// @Component({
//     selector: 'courses',
//     template: `
// <h1>Courses</h1>
// <router-outlet></router-outlet>
// `,
//     directives: [RouterOutlet],
//     providers: [PeriodsService],
//     styles: [require('!raw!sass!./courses.scss')]
// })
// @RouteConfig([
//     {
//         path: '/',
//         component: CoursesListComponent,
//         name: 'CoursesListComponent',
//         useAsDefault: true
//     },
//     {
//         path: '/period-courses/:id',
//         component: PeriodCoursesDetailComponent,
//         name: 'CoursesDetailComponent',
//     },
//     // {
//     //     path: '/assessments/:id/',
//     //     component: PeriodCourseAssessmentsComponent,
//     //     name: 'PeriodCourseAssessmentsComponent'
//     // }
// ])
// export class CoursesComponent {
//
//     constructor() {
//
//     }
// }
