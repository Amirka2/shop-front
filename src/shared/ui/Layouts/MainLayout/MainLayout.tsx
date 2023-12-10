import React, { PropsWithChildren } from 'react';

import { TopBar } from "@/widgets";
import { Footer } from "@/shared/components";

import * as Styles from './MainLayout.styles';

export const MainLayout = ({children, ...restProps}: PropsWithChildren) => {
  return (
    <Styles.MainWrapper {...restProps} >
      <TopBar />
      {children}
      <Footer />
    </Styles.MainWrapper>

  );
};
