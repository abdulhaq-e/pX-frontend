import { Routes } from '@ngrx/router';

import {Home} from './home';
import {Home2} from './home2';
import {LoginComponent} from './auth';
import { AssessmentsComponent } from './assessments';

export const routes: Routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home2',
    component: Home2,
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/assessments',
    component: AssessmentsComponent,
  },


]
