import {provideStore} from '@ngrx/store';
import { provideRouter } from '@ngrx/router';
import { localStorageMiddleware } from "ngrx-store-localstorage";
import { loggerMiddleware } from 'ngrx-store-logger';
import { installSagaMiddleware } from 'store-saga';
// import { authReducer, loginEffect, AuthActions} from '../src/app/auth';
import { routes } from './routes';

import { APP_REDUCERS_PROVIDER } from './reducers';

// App
export * from './app.component';
export * from './app.interface';


// Application wide providers
export const APP_PROVIDERS = [
    // AuthActions,
    provideRouter(routes),
    APP_REDUCERS_PROVIDER,
    // provideStore({tick}),
    // installSagaMiddleware(loginEffect),
    // localStorageMiddleware(['authReducer'], false),
    ...loggerMiddleware(),
];
