import {useCookies} from "react-cookie";
import {TOKEN} from "@/shared/constants";

export const useToken = () => {
  const [cookies, setCookies, removeCookies] = useCookies([TOKEN]);

  const { token } = cookies;

  const setToken = (value: string) => {
    setCookies(TOKEN, value);
  }

  const removeToken = () => {
    removeCookies(TOKEN);
  }

  return [
    token,
    setToken,
    removeToken,
  ];
}
