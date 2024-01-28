import {apiFetch} from "@/shared/libs";

export const auth = async (login: string, pass: string) => {
  return await apiFetch('/constrspb/admin/login?Login=' + login + '&Password=' + pass)
}
