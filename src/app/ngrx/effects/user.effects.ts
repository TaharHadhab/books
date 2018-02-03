import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as UserActions from '@app/ngrx/actions/user.actions';
import {empty} from "rxjs/observable/empty";
import {User} from "@app/models/user";

@Injectable()
export class UserEffects {

  @Effect()
  getEnvelope$: Observable<Action> = this.actions$
    .ofType(UserActions.SAVE_USER_AUTH_DATA)
    .map((action: UserActions.SaveUserAuthData) => action.payload)
    .switchMap((user: User) => {
      console.log('in getEnvelope$', user);
      return empty();
    });

  constructor(private actions$: Actions) {
  }
}
