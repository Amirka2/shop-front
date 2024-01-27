import React, {PropsWithChildren, useEffect} from 'react';

import { TopBar } from "@/widgets";
import { Footer } from "@/shared/components";

import * as Styles from './MainLayout.styles';

export const MainLayout = ({children, ...restProps}: PropsWithChildren) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <Styles.MainWrapper {...restProps} >
      <TopBar />
      {children}
      <Footer />
    </Styles.MainWrapper>
  );
};
