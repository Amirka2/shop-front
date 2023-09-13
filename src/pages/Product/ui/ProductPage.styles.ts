import {styled} from "styled-components";
import {MainWrapper} from "@/shared/components";

export const Wrapper = styled(MainWrapper).withConfig({
    shouldForwardProp: (prop) => !['isMobile'].includes(prop)
})<{ isMobile?: boolean; }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.isMobile ? '90vw' : '1330px'};
`;

export const Flex = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isMobile'].includes(prop)
})<{ isMobile?: boolean; }>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  justify-content: ${props => props.isMobile ? 'flex-start' : 'space-between'};
  align-items: center;
  -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  padding: 20px;
`;
