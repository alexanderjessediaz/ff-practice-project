import {WhereFilterOp, QuerySnapshot} from '@firebase/firestore-types';

import {firestore} from './config';

import {getDocumentsFromQuerySnapshot} from './utils';

/**
 * Retrieve a specific document
 * @param path The collection to read from
 * @param documentId The document to retrieve
 */
export const getDocumentWithPathAndId = async (path: string, documentId: string) => {
  return await firestore
    .collection(path)
    .doc(documentId)
    .get()
    .then(doc => {
      if (doc.exists) {
        return {
          path: path,
          id: documentId,
          data: doc,
          wasSuccessful: true,
          error: undefined,
        };
      } else {
        return handleUnsuccessfulRetrieval(path, documentId, `No document found at path(${path})`);
      }
    })
    .catch(error => {
      return handleUnsuccessfulRetrieval(path, documentId, error);
    });
};

/**
 * Used to filter documents.
 * @link https://googleapis.dev/nodejs/firestore/latest/CollectionReference.html#where
 */
export type WhereCriteria = {
  field: string;
  operation: WhereFilterOp;
  criteria: any;
};

/**
 * Retrieve document at a given path that matches one set of criteria
 * @param path The collection to read from
 * @param criteria The set of instructors to filter documents by
 */
export async function getDocumentsWithCriteria(path: string, criteria: WhereCriteria) {
  const query = firestore.collection(path).where(criteria.field, criteria.operation, criteria.criteria);
  return await query
    .get()
    .then(querySnapshot => {
      return handleWhereQuery(path, querySnapshot);
    })
    .catch(error => {
      return handleUnsuccessfulRetrieval(path, null, error);
    });
}

/**
 * Retrieve document at a given path that matches one set of criteria
 * @param path The collection to read from
 * @param criteria The set of instructors to filter documents by
 */
export async function getDocumentsWithTwoCriteria(path: string, criteria: WhereCriteria[]) {
  const query = firestore
    .collection(path)
    .where(criteria[0].field, criteria[0].operation, criteria[0].criteria)
    .where(criteria[1].field, criteria[1].operation, criteria[1].criteria);
  return await query
    .get()
    .then(querySnapshot => {
      return handleWhereQuery(path, querySnapshot);
    })
    .catch(error => {
      return handleUnsuccessfulRetrieval(path, null, error);
    });
}

/**
 * Retrieve document at a given path that matches one set of criteria
 * @param path The collection to read from
 * @param criteria The set of instructors to filter documents by
 */
export async function getDocumentsWithThreeCriteria(path: string, criteria: WhereCriteria[]) {
  const query = firestore
    .collection(path)
    .where(criteria[0].field, criteria[0].operation, criteria[0].criteria)
    .where(criteria[1].field, criteria[1].operation, criteria[1].criteria)
    .where(criteria[2].field, criteria[2].operation, criteria[2].criteria);
  return await query
    .get()
    .then(querySnapshot => {
      return handleWhereQuery(path, querySnapshot);
    })
    .catch(error => {
      return handleUnsuccessfulRetrieval(path, null, error);
    });
}

export async function getAllDocumentsWithPath(path: string) {
  let documents;
  return await firestore
    .collection(path)
    .get()
    .then(querySnapshot => {
      documents = getDocumentsFromQuerySnapshot(querySnapshot);
      if (documents.length > 0) {
        // console.log(`The following documents were successfully retrieved at path(${path}): ${JSON.stringify(documents, null, 2)}`);
        return {
          path: path,
          id: null,
          data: documents,
          wasSuccessful: true,
          error: undefined,
        };
      }
    });
}

export const getMultipleDocsWithIds = async (path: string, ids: string[]) => {
  const reads = ids
    .filter(m => m)
    .map(id =>
      firestore
        .collection(path)
        .doc(id)
        .get(),
    );
  const results = await Promise.all(reads);
  const docs = results.map(m => (m.exists ? m.data() : null)).filter(m => m); //remove reads that don't exist

  return docs;
};

export const getLotsOfDocumentsWithIds = async (path: string, ids: string[]) => {
  const documents = [];

  //We were getting an error reading 2000+ line items at once
  //so we're chunking the reads in batches of 100.
  const chunkSize = 100;
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);

    const reads = chunk
      .filter(m => m)
      .map(id =>
        firestore
          .collection(path)
          .doc(id)
          .get(),
      );
    const results = await Promise.all(reads);
    documents.push(...results.map(m => (m.exists ? m.data() : null)).filter(m => m)); //remove reads that don't exist
  }

  return documents;
};

/**
 * Handle the result of a where query and it's list of QuerySnapshots
 * @param path The collection that the documents are returned from
 * @param snapshot The result of a where query - containing a list of data
 */
async function handleWhereQuery(path: string, snapshot: QuerySnapshot) {
  const documents = getDocumentsFromQuerySnapshot(snapshot);
  if (documents.length > 0) {
    // console.log(`The following documents were successfully retrieved at path(${path}) where (${field} ${operation} ${criteria}): ${JSON.stringify(documents, null, 2)}`);
    return {
      path: path,
      id: null,
      data: documents,
      wasSuccessful: true,
      error: undefined,
    };
  } else {
    return handleUnsuccessfulRetrieval(path, null, `No documents found at path(${path})`);
  }
}

const handleUnsuccessfulRetrieval = (path: string, documentId: string | null, error: any) => {
  // console.log(`Error retrieving document(${documentId}) path(${path}). ERR: ${error}`);
  return {
    path: path,
    id: documentId,
    data: null,
    wasSuccessful: false,
    error: error,
  };
};
/**
 * Retrieve documents from Firestore using an in query. X ids/values are passed and
 * we must break them into groups of 10 since Firestore IN query is maxed at 10 per operation.
 * @param path The collection to look at
 * @param field The object property to compare
 * @param operation Filter conditions in a Query.where() clause are specified using the strings '<', '<=', '==', '>=', '>', 'array-contains', 'array-contains-any' or 'in'.
 * @param values List of values to compare to the provided field
 * @returns A list of Firebase documents
 */
export const getDocumentsFromListOfIds = async (path: string, field: string, operation: WhereFilterOp, values: string[]) => {
  let count = 0;
  let valuesForDocumentsToRetrieve: string[] = [];
  let documents: any[] = [];

  for (let i = 0; i < values.length; i++) {
    if (count < 10) {
      count++;
      valuesForDocumentsToRetrieve.push(values[i]);
    }

    // At max criteria size or the end of the friends list
    if (count === 9 || values.length === i + 1) {
      const criteria: WhereCriteria = {
        field,
        operation,
        criteria: valuesForDocumentsToRetrieve,
      };
      const retrievedDocuments = await getDocumentsWithCriteria(path, criteria);
      if (retrievedDocuments.wasSuccessful) {
        documents = [...documents, ...retrievedDocuments.data];
      }
      if (count === 9) {
        valuesForDocumentsToRetrieve = [];
      }

      count = 0;
    }
  }
  return documents;
};
