import {Action} from '@ngrx/store';
import {User} from '@app/models/user';
import {Authentification} from "@app/models/authentification";

export const AUTHENTIFICATION_SUCCESS = '[Authentification] Authentification success';


export class AuthentificationSuccess implements Action {
  readonly type = AUTHENTIFICATION_SUCCESS;

  constructor(public payload: Authentification) {
  }
}

export type All = AuthentificationSuccess;
