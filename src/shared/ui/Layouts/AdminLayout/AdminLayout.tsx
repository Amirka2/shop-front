import React, {PropsWithChildren, useEffect} from 'react';
import {useCookies} from "react-cookie";

import {Container, MainWrapper} from "@/shared/components";
import {Paths} from "@/shared/routing";
import {LinkButton} from "@/shared/ui";

import * as Styles from './AdminLayout.styles';

export const AdminLayout = ({children, ...restProps}: PropsWithChildren) => {
  const [cookies, setCookies, removeCookies] = useCookies(['token']);

  const handleExitClick = () => {
    removeCookies('token');
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <MainWrapper {...restProps}>
      <Container>
        <Styles.Wrapper>
          <LinkButton size='M' to={Paths.main} onClick={handleExitClick}>
            Выйти
          </LinkButton>
          <Styles.ContentWrapper>
            {children}
          </Styles.ContentWrapper>
        </Styles.Wrapper>
      </Container>
    </MainWrapper>
  );
};
