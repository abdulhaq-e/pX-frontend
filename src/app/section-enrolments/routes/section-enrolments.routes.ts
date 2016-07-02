import { Routes } from '@ngrx/router';

import { SectionEnrolmentsRoute,
  SectionEnrolmentsFormRoute
} from '../routes';

export const SectionEnrolmentsRoutes: Routes = [
  {
    path: '/section-enrolments',
    component: SectionEnrolmentsRoute,
    children: [
      {
        path: ':sectionId',
        component: SectionEnrolmentsFormRoute
      }
    ]
  }
];
