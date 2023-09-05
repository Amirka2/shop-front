import {styled} from "styled-components";

export const LogoIcon = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isMobile'].includes(prop)
})<{ isMobile?: boolean; }>`
  background: url('icons/logo.png');
  width: ${props => props.isMobile ? '50px' : '120px'};
  height: ${props => props.isMobile ? '45px' : '100px'};
  background-size: contain;
`;
