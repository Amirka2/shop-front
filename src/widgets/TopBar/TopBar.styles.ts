import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.header<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '90vw' : '1330px'};
  min-height: ${props => props.$isMobile ? '70px' : '150px'};
  height: ${props => props.$isMobile ? '70px' : '150px'};
  margin: 0 0 20px 0;
  padding: ${props => props.$isMobile ? '0 10px' : '33px'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.blue};
  border-radius: 10px;
`;

export const LogoContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export const SearchWrapper = styled.div`
  width: 470px;
`;

export const Title = styled.h6<{
    fontSize?: string;
}>`
  color: ${Color.white};
  max-width: 250px;
  font-size: ${({fontSize}) => fontSize};
`;

export const Input = styled.input`
  position: absolute;
  top: 72px;
  resize: none;
  width: 470px;
  height: 48px;
  font-size: 16px;
  padding: 13px;
  border-radius: 10px;
  background-color: ${Color.gray};
  border: none;
  outline: none;
  &:focus (SearchModal){
    display: block;
  }
  &+svg {
    position: relative;
    left: 430px;
    top: 3px;
    cursor: pointer;
  }
`;

export const CartButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
