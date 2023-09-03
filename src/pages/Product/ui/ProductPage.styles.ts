import {styled} from "styled-components";

export const Wrapper = styled.div<{
    isMobile?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${props => props.isMobile ? '90vw' : '1330px'};
`;

export const Flex = styled.div<{
    isMobile?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  justify-content: flex-start;
  align-items: center;
`;
