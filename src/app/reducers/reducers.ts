import { provideStore } from '@ngrx/store';

import { assessmentsReducer } from '../assessments/reducers';
import { tick } from './tick';
import { counter } from './counter';


export const APP_REDUCERS_PROVIDER = provideStore({
  assessmentsReducer,
  tick,
  counter,
});
