import {UserState} from './user/types';

import {MakeStore} from 'next-redux-wrapper';
import {Store, AnyAction, Action as ReduxAction} from 'redux';
import {PersistPartial} from 'redux-persist/lib/persistReducer';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Persistor} from 'redux-persist';

export type Action = {
  type: string;
};

export type AppState = {
  user: UserState;
};

export type AppPersistedStoreType = Store<AppState & PersistPartial, AnyAction> &
  MakeStore & {
    __persistor: Persistor;
  };

export type AppThunkDispatch = ThunkDispatch<AppState, void, any>;
export type AppThunk<R> = ThunkAction<R, AppState, unknown, ReduxAction<any>>;