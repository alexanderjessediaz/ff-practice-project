import {useEffect} from 'react';

import {firestore} from '@/lib/../firebase/config';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '@/store/types';
import {UserState} from '@/store/user/types';


type DataListenerProps = {
  children: React.ReactNode;
};

export const DataListener = ({children}: DataListenerProps) => {
  const currentUser = useSelector<AppState, UserState>(state => state.user);

  const dispatch = useDispatch();


  return <>{children}</>;
};
