import {styled} from "styled-components";

export const Wrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isMobile'].includes(prop)
})<{ isMobile?: boolean; }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.isMobile ? '90vw' : '1330px'};
`;

export const Flex = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isMobile'].includes(prop)
})<{ isMobile?: boolean; }>`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  justify-content: ${props => props.isMobile ? 'flex-start' : 'space-between'};
  align-items: center;
`;
