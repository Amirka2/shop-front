import React, {PropsWithChildren, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router";

import {AuthChecker, Container, MainWrapper} from "@/shared/components";
import {Paths} from "@/shared/routing";
import {Back, Button, LinkButton} from "@/shared/ui";
import {useToken} from "@/shared/hooks";

import * as Styles from './AdminLayout.styles';

export const AdminLayout = ({children, ...restProps}: PropsWithChildren) => {
  const [,,removeToken] = useToken();
  const navigate = useNavigate();
  const location = useLocation();

  const handleExitClick = () => {
    removeToken();
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <AuthChecker>
      <MainWrapper {...restProps}>
        <Container>
          <Styles.Wrapper>
            <Styles.Header>
              <LinkButton size='M' to={Paths.main} onClick={handleExitClick}>
                Выйти
              </LinkButton>
              {location.pathname !== '/admin' ? (
                <Button size="S" onClick={() => navigate(-1)}>
                  <Back width="50px" height="50px" />
                </Button>
              ) : null}
            </Styles.Header>
            <Styles.ContentWrapper>
              {children}
            </Styles.ContentWrapper>
          </Styles.Wrapper>
        </Container>
      </MainWrapper>
    </AuthChecker>
  );
};
