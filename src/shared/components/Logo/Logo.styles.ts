import {styled} from "styled-components";

export const LogoIcon = styled.img<{
    isMobile?: boolean;
}>`
  width: ${props => props.isMobile ? '50px' : '120px'};
  height: ${props => props.isMobile ? '45px' : '100px'};
`;
