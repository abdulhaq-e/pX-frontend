import {Component, ChangeDetectionStrategy, EventEmitter
} from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup,
  AbstractControl, Validators} from '@angular/common';

// import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthActions } from './auth.actions';

import {Store} from '@ngrx/store';
import {AppStore} from '../app/app.interface';

import {
registrationNumberValidator
} from '../utils/validators';


@Component({
  selector: 'auth',
  directives: [FORM_DIRECTIVES],
  template: require('./auth.html'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthActions]
})
export class AuthComponent {
  public form: ControlGroup;
  public username: AbstractControl;
  public password: AbstractControl;

  public auth: Observable<any>

  constructor(
    public fb: FormBuilder,
    public auth_actions: AuthActions,
    public store: Store<AppStore>
  ) {
    console.log(localStorage);
    this.auth = store.select('authReducer');

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required,
        registrationNumberValidator])],
      'password': ['', Validators.required]
    })

    this.username = this.form.controls['username']
    this.password = this.form.controls['password']
  }

  login(credentials: any) {
    // console.log(credentials);
    this.store.dispatch(
      this.auth_actions.auth_request(credentials)
    )
  }
  //   //    console.log('you have submitted', value);
  //   this.authService.login(credentials);
  //   this.authService.loggedIn.subscribe(success => {
  //     if (success) {
  //       this.router.navigate(['Home']);
  //     } else {
  //       this.message = "Login error";
  //     }
  //   }
  //     )
  // }

}
