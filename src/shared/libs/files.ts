import {TFileResponse} from "@/shared/interfaces/files";
import {apiFetchFormData, HTTP_METHODS} from "@/shared/libs/apiFetch";

const createFilePromise = (token: string | undefined,
  formData: FormData
): Promise<{
  body: TFileResponse | null;
  status: string;
  ok: boolean;
}> => {
  return new Promise((resolve) => {

    return apiFetchFormData('/constrspb/file', {
      method: HTTP_METHODS.POST,
      body: formData,
      token,
      errorHandler: (error) => {
        console.error(error)

        throw new Error('unsuccessful load file');
      },
    })
      .then((result) => {
        // @ts-ignore
        resolve(result);
      })
      .catch(() => {
        resolve({ body: null, status: '', ok: false });
      });
  });
};

export const postFiles = async (token: string | undefined,
  files: Blob[]
): Promise<{ body: TFileResponse | null; status: string; ok: boolean }[]> => {
  if (typeof files === 'undefined') return [];

  const formDataFileArray = files.map((file) => {
    const formData = new FormData();
    formData.append('FormFile', file);

    return formData;
  });

  return await Promise.all(formDataFileArray.map((formData) => createFilePromise(token, formData)));
};
