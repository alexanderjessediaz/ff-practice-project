import {firestore} from './config';

export const createDocument = async (path: string, documentId: string, data: Object) => {
  return await firestore
    .collection(path)
    .doc(documentId)
    .set(data)
    .then(() => {
      return {error: undefined};
    })
    .catch((error) => {
      return {error: error};
    });
};

export const updateDocument = async (path: string, id: string, data: {}) => {
  await firestore.collection(path).doc(id).update(data);
};

export const createDocumentWithRandomId = async (path: string, data: Object) => {
  return await firestore
    .collection(path)
    .add(data)
    .then((doc) => {
      return doc.id;
    });
};

export const deleteDocument = async (path: string, id: string) => {
  await firestore
    .collection(path)
    .doc(id)
    .delete()
    .then(() => console.log('successfully deleted document: ', id))
    .catch((err) => console.log(`error deleting document ${id}: ${err}`));
};
