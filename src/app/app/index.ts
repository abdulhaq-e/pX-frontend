import {provideStore} from '@ngrx/store';
import { provideRouter } from '@ngrx/router';
// import { localStorageMiddleware } from "ngrx-store-localstorage";
// import { loggerMiddleware } from 'ngrx-store-logger';
import { installSagaMiddleware } from 'store-saga';
// import { authReducer, loginEffect, AuthActions} from '../src/app/auth';

import { APP_REDUCERS_PROVIDER } from './reducers';
import { APP_ROUTES_PROVIDER } from './routes';
import { APP_ACTIONS_PROVIDER } from './actions';

// App
export * from './app.component';
export * from './app.interface';

// Application wide providers
export const APP_PROVIDERS = [
    // AuthActions,
    ...APP_ROUTES_PROVIDER,
    ...APP_REDUCERS_PROVIDER,
    ...APP_ACTIONS_PROVIDER,
    // provideStore({tick}),
    // installSagaMiddleware(loginEffect),
    // localStorageMiddleware(['authReducer'], false),
    // ...loggerMiddleware(),
];
