import {User} from "@app/models/user";
import {ActionReducerMap} from "@ngrx/store";
import * as UserReducer from "@app/ngrx/reducers/user.reducer";

export interface State {
  user: User;
}

export const initialState: State = {
  user: UserReducer.initialState
};

export const reducers: ActionReducerMap<State> = {
  user: UserReducer.reducer
};

