import {User} from '@app/models/user';
import {ActionReducerMap} from '@ngrx/store';
import {Authentification} from '@app/models/authentification';
import * as AuthentificationReducer from '@app/ngrx/reducers/authentification.reducer';

export interface State {
  authentification: Authentification;
}

export const initialState: State = {
  authentification: AuthentificationReducer.initialState
};

export const reducers: ActionReducerMap<State> = {
  authentification: AuthentificationReducer.reducer
};

