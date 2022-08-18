import {LoginAction, UpdateUserAction, UserAction, UserState} from './types';
import {USER_ACTION_TYPES} from './actions';

export const InitialState: Partial<UserState> = {};

export const user = (
  state: UserState = InitialState as UserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN:
      return (<LoginAction>action).user;
    case USER_ACTION_TYPES.UPDATE_USER:
      const newUser = (<UpdateUserAction>action).user;
      return Object.assign({}, state, newUser);
    default:
      return state;
  }
};
