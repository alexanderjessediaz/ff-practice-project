import {LoginAction, UpdateUserAction} from './types';

import {User} from '../../model';

export enum USER_ACTION_TYPES {
  LOGIN = 'LOGIN',
  UPDATE_USER = 'UPDATE_USER',
}

export const loginUser = (user: User): LoginAction => ({
  type: USER_ACTION_TYPES.LOGIN,
  user,
});

export const updateUserAction = (user: User): UpdateUserAction => ({
  type: USER_ACTION_TYPES.UPDATE_USER,
  user,
});
