import {QuerySnapshot} from '@firebase/firestore-types';
import {firestore} from './config';

export function getDocumentsFromQuerySnapshot(querySnapshot: QuerySnapshot) {
  const documents: any = [];
  querySnapshot.forEach(doc => {
    documents.push({...doc.data(), id: doc.id});
  });
  return documents;
}

export const generateFirebaseId = (path: string) => {
  const firRef = firestore.collection(path).doc();

  return firRef.id;
};
