import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {State} from '@app/ngrx/reducers/reducers';
import {Store} from '@ngrx/store';
import {User} from "@app/models/user";
import * as UserActions from '@app/ngrx/actions/user.actions';

@Component({
  selector: 'app-login-pwd',
  templateUrl: './login-pwd.component.html',
  styleUrls: ['./login-pwd.component.scss'],
})
export class LoginPwdComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  loginTControl: FormControl;
  pwdControl: FormControl;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.loginTControl = new FormControl(null, [Validators.required,]);
    this.pwdControl = new FormControl(null, [Validators.required,]);
    this.form.addControl('login', this.loginTControl);
    this.form.addControl('pwd', this.pwdControl);
  }

  public onSubmit() {
    const user: User = {
      login: this.loginTControl.value,
      password: this.pwdControl.value
    }
    this.store.dispatch(new UserActions.SaveUserAuthData(user));
  }
}
