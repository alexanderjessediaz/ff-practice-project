import {User} from '../../model/';
import {Action} from '../types';

export type UserState = User;

export type LoginAction = Action & {
  user: User;
};

export type UpdateUserAction = Action & {
  user: User;
};

export type UserAction = LoginAction | UpdateUserAction;
