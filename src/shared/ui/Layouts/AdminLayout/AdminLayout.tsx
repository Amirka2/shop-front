import React, {PropsWithChildren, useEffect} from 'react';

import {Container, MainWrapper} from "@/shared/components";

export const AdminLayout = ({children, ...restProps}: PropsWithChildren) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <MainWrapper>
      <Container>
        {children}
      </Container>
    </MainWrapper>
  );
};
