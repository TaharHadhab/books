import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from "@angular/forms";
import {State} from '@app/ngrx/reducers/reducers';
import {Store} from '@ngrx/store';
import {User} from "@app/models/user";
import * as AuthentificationActions from '@app/ngrx/actions/authentification.actions';
import {UserService} from '@app/services/user.service';
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {Authentification} from "@app/models/authentification";

@Component({
  selector: 'app-login-pwd',
  templateUrl: './login-pwd.component.html',
  styleUrls: ['./login-pwd.component.scss'],
})
export class LoginPwdComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({});
  loginTControl: FormControl;
  pwdControl: FormControl;
  pwdErrorMsg: string;
  subscription: Subscription;

  constructor(private store: Store<State>, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.loginTControl = new FormControl(null, [Validators.required]);
    this.pwdControl = new FormControl(null, []);
    this.form.addControl('login', this.loginTControl);
    this.form.addControl('pwd', this.pwdControl);
  }

  public onSubmit() {
    const user: User = {
      email: this.loginTControl.value,
      password: this.pwdControl.value
    }
    this.subscription = this.userService.authenticate(user)
      .subscribe(value => {
          const auth: Authentification =
            {
              token: value.token,
              name: user.email
            }
          this.store.dispatch(new AuthentificationActions.AuthentificationSuccess(auth));
          this.router.navigate(['/books']);
        },
        error => {
          this.pwdErrorMsg = error.error.error;
          this.pwdControl.setErrors({errorpwd: true});
          this.pwdControl.markAsTouched();
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
