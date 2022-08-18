import {Action} from './types';

export enum ROOT_ACTION_TYPE {
  USER_LOGOUT = 'USER_LOGOUT',
}

export const userLogOut = (): Action => ({
  type: ROOT_ACTION_TYPE.USER_LOGOUT,
});
