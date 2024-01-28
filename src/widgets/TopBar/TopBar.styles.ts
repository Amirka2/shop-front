import {styled} from "styled-components";

import {Color} from "@/shared/constants";
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const Wrapper = styled.header`
  width: 90vw;
  min-height: 70px;
  height: 70px;
  margin: 0 0 20px 0;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.blue};
  border-radius: 10px;

  ${mediaQueries.gt.Tablet} {
    width: 1330px;
    min-height: 150px;
    height: 150px;
    padding: 33px;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${mediaQueries.gt.Tablet} {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  display: none;

  ${mediaQueries.gt.Tablet} {
    display: flex;
  }
`;

export const LogoContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export const SearchWrapper = styled.div`
  width: 470px;
  margin: 0 10px;
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
  cursor: pointer;
  
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
