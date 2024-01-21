import {URL} from "@/shared/constants";

export const getPhotoUrl = (photoName: string) => {
  return `${URL}/constrspb/file/get/${photoName}`
}
