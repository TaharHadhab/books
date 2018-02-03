import * as UserActions from '@app/ngrx/actions/user.actions';
import {User} from '@app/models/user';

export const initialState: User = {
  login: null,
  password: null,
  token: null
};

export function reducer(state = initialState,
                        action: UserActions.All): User {
  switch (action.type) {
    case UserActions.SAVE_USER_AUTH_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
