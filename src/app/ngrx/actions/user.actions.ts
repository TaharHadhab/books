import {Action} from '@ngrx/store';
import {User} from '@app/models/user';

export const SAVE_USER_AUTH_DATA = '[User] save user auth data';

export class SaveUserAuthData implements Action {
  readonly type = SAVE_USER_AUTH_DATA;

  constructor(public payload: User) {}
}

export type All = SaveUserAuthData;

