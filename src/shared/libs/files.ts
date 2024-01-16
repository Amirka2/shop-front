import {TFileResponse} from "@/shared/interfaces/files";
import {apiFetchFormData, HTTP_METHODS} from "@/shared/libs/apiFetch";

const createFilePromise = (
  formData: FormData
): Promise<{
  body: TFileResponse | null;
  status: string;
  ok: boolean;
}> => {
  return new Promise((resolve) => {
    return apiFetchFormData('/api/files', {
      method: HTTP_METHODS.POST,
      body: formData,
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

export const postFiles = async (
  files: File[]
): Promise<{ body: TFileResponse | null; status: string; ok: boolean }[]> => {
  if (typeof files === 'undefined') return [];

  const formDataFileArray = files.map((file) => {
    const formData = new FormData();
    formData.append('File', file);

    return formData;
  });

  return await Promise.all(formDataFileArray.map((formData) => createFilePromise(formData)));
};
