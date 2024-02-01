import React, {PropsWithChildren} from 'react';

import {AdminAuth} from "@/pages";
import {useToken} from "@/shared/hooks";

const AuthChecker = ({children, ...restProps}: PropsWithChildren) => {
  const [token] = useToken();

  return token ? (
    <div { ...restProps }>
      {children}
    </div>
  ) : <AdminAuth />;
};

export default AuthChecker;
