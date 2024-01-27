import {apiFetch} from "@/shared/libs";

const URL = 'http://194.58.111.33';

export const auth = async (login: string, pass: string) => {
  return await apiFetch(URL + '/constrspb/admin/login?Login=' + login + '&Password=' + pass)
}
