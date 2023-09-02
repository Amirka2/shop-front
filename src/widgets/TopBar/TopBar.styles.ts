import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.header<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '90vw' : '1330px'};
  min-height: ${props => props.$isMobile ? '70px' : '150px'};
  height: ${props => props.$isMobile ? '70px' : '150px'};
  margin: 0 0 20px 0;
  padding: 33px;
  display: flex;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.blue};
  border-radius: 10px;
`;

export const LogoCityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
`;
export const SearchWrapper = styled.div`
  width: 620px;
`;

export const Textarea = styled.textarea`
  position: absolute;
  top: 72px;
  resize: none;
  width: 620px;
  height: 48px;
  font-size: 16px;
  padding: 13px;
  border-radius: 10px;
  background-color: ${Color.gray};
  &:focus {
    outline: none;
  }
  &:focus (SearchModal){
    display: block;
  }
  &+svg {
    position: relative;
    left: 580px;
    top: 3px;
    cursor: pointer;
  }
`;

export const CartButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 270px;
`;

export const SearchModal = styled.div`
  position: absolute;
  top: 200px;
  display: none;
  width: 620px;
  min-height: 300px;
  background-color: ${Color.white};
`;
