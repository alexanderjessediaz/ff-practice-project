import {firestore} from '@/firebaseApp/init';
import {collection, query, onSnapshot} from 'firebase/firestore';
import {Test} from '@/models/index';
import {testActions} from '@/store/features/test';

const PATH = 'test';

export const getTestData = (dispatch: Function) => {
  const q = query(collection(firestore, PATH));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const testData: Test[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      testData.push(data);
    });

    dispatch(testActions.setData(testData));
  });

  return unsubscribe;
};
