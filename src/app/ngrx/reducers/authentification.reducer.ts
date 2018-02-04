import * as AuthentificationActions from '@app/ngrx/actions/authentification.actions';
import {Authentification} from '@app/models/authentification';

export const initialState: Authentification = {
  token: null,
  name: null
};

export function reducer(state = initialState,
                        action: AuthentificationActions.All): Authentification {
  switch (action.type) {
    case AuthentificationActions.AUTHENTIFICATION_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
