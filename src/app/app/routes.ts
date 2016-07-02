import { Routes, provideRouter } from '@ngrx/router';

// import { LoginComponent } from '../auth';

import { SectionEnrolmentsRoutes } from '../section-enrolments'

export const routes: Routes = [
  ...SectionEnrolmentsRoutes,
  // {
  //   path: '/login',
  //   component: LoginComponent,
  // },
]

export const APP_ROUTES_PROVIDER = provideRouter(routes);
