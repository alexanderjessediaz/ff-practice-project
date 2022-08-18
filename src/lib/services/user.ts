import {User} from '../../model';
import {createDocument, updateDocument} from '../../firebase/DocumentMutator';
import {getDocumentsWithCriteria, getDocumentWithPathAndId, WhereCriteria} from '../../firebase/DocumentRetriever';

const PATH = 'users';

export const getUser = async (email: string) => {
  return await getDocumentWithPathAndId(PATH, email);
};

export const getTeamMembers = async (company: string) => {
  const criteria: WhereCriteria = {
    field: 'company',
    operation: '==',
    criteria: company,
  };
  return await getDocumentsWithCriteria(PATH, criteria);
};

export const updateUser = async (email: string, data: User) => {
  return await updateDocument(PATH, email, data);
};

export const createUser = async (email: string, data: User) => {
  await createDocument(PATH, email, data);
};
