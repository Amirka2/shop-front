import {BASE_URL} from "@/shared/constants";

export const getPhotoUrl = (photoName: string) => {
  return `${BASE_URL}/constrspb/file/get/${photoName}`
}
