import {storage} from './config';

/**
 * Upload Photo to Firebase Storage, and return the Firebase DownloadUrl
 * @param filePath
 * @param file
 */
export const UploadPhotoAsync = async (filePath: string, file: Blob, metaData: any = null) => {
  return new Promise(async (resolve: (value?: string) => void, reject: (reason?: any) => void) => {
    let upload = storage.ref(filePath).put(file, metaData);

    upload.on(
      'state_changed',
      () => {},
      err => {
        reject(err);
      },
      async () => {
        const url = await upload.snapshot!.ref.getDownloadURL();
        resolve(url);
      },
    );
  });
};
