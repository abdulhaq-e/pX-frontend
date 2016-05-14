import {Component, ChangeDetectionStrategy,
EventEmitter} from '@angular/core';
import { FORM_DIRECTIVES,
FormBuilder,
ControlGroup,
AbstractControl,
Validators,
} from '@angular/common';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthActions } from './auth.actions';
import {AuthComponent} from './auth.component'

import {Store} from '@ngrx/store';
import {AppStore} from '../app.interface';


// import {JwtHelper, tokenNotExpired} from 'angular2-jwt/angular2-jwt';

// import {AuthService} from './auth.service';


@Component({
  selector: 'login',
  directives: [AuthComponent],
  template: require('./login.html'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class LoginComponent {


}
