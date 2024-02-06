import React, {PropsWithChildren} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  height: 598px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PagePlaceHolder = (props: PropsWithChildren) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};
