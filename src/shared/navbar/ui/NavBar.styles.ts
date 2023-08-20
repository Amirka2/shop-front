import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {Colors} from "@/shared/constants";

const borderRadius = '10px';
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
  border-radius: ${borderRadius};
`;

export const Link = styled(NavLink)<{
    $isMobile: boolean;
    $isTop?: boolean;
    $isBottom?: boolean;
    $isLeft?: boolean;
    $isRight?: boolean;
}>`
  width: ${props => props.$isMobile ? '100%' : '20%'};
  height: ${props => props.$isMobile ? '' : '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.black};
  text-decoration: none;
  font-size: 24px;

  &:hover {
    background-color: ${Colors.blue};
    color: ${Colors.white};
    ${props => props.$isMobile && props.$isTop ? (
            `border-radius: ${borderRadius + ' ' + borderRadius} 0 0;`) : ('')}
    ${props => props.$isMobile && props.$isBottom ? (
            `border-radius: 0 0 ${borderRadius + ' ' + borderRadius};`) : ('')}
    ${props => !props.$isMobile && props.$isLeft ? (
            `border-radius: ${borderRadius} 0 0 ${borderRadius};`) : ('')}
    ${props => !props.$isMobile && props.$isRight ? (
            `border-radius: 0 ${borderRadius + ' ' + borderRadius} 0;`) : ('')}
  }}`;
