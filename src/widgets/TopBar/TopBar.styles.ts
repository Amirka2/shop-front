import {styled} from "styled-components";

import {Color} from "@/shared/constants";
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const Wrapper = styled.header`
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

  ${mediaQueries.gt.TabletMax} {
    min-height: 150px;
    height: 150px;
    padding: 33px;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${mediaQueries.gt.TabletMax} {
    display: none;
  }
`;

export const TabletMaxWrapper = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;

  ${mediaQueries.gt.TabletMax} {
    display: flex;
  }
  
  ${mediaQueries.gt.Desktop} {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  display: none;

  ${mediaQueries.gt.Desktop} {
    display: flex;
  }
`;

export const LogoContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;


export const Title = styled.h6<{
    fontSize?: string;
}>`
  color: ${Color.white};
  max-width: 250px;
  font-size: ${({fontSize}) => fontSize};
`;

export const SearchWrapper = styled.div`
  width: 200px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  position: relative;

  ${mediaQueries.gt.Desktop} {
    width: 470px;
  }
`;

export const Input = styled.input`
  position: static;
  resize: none;
  width: 200px;
  height: 48px;
  font-size: 16px;
  padding: 13px;
  border-radius: 10px;
  background-color: ${Color.gray};
  border: none;
  outline: none;
  cursor: pointer;
  
  ${mediaQueries.gt.Desktop} {
    width: 470px;
    position: absolute;
    top: 52px;
  }
  
  &:focus (SearchModal){
    display: block;
  }
  
  &+svg {
    display: none;

    ${mediaQueries.gt.Desktop} {
      display: block;
      position: relative;
      left: 430px;
      top: 3px;
      cursor: pointer;
    }
  }
`;

export const CartButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
