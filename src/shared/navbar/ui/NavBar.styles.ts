import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {Colors} from "@/shared/constants";

export const Wrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '70vw' : '1330px'};
  min-height: ${props => props.$isMobile ? '' : '50px'};
  height: ${props => props.$isMobile ? '' : '50px'};
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Colors.gray};
  border-radius: 10px;
`;

export const Link = styled(NavLink)<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100%' : ''};
  text-align: ${props => props.$isMobile ? 'center' : ''};
  color: ${Colors.black};
  text-decoration: none;
  font-size: 24px;
  &:hover {
    background-color: ${Colors.blue};
    color: ${Colors.white};
  }
`;
