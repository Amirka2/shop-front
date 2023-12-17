import React, {PropsWithChildren} from 'react';

import {AdminAuth} from "@/pages";
import {useCookies} from "react-cookie";

const AuthChecker = ({children, ...restProps}: PropsWithChildren) => {
  const [cookies] = useCookies(['token']);
  const { token } = cookies;

  return token ? (
    <div { ...restProps }>
      {children}
    </div>
  ) : <AdminAuth />;
};

export default AuthChecker;
