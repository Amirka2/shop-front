import {styled} from "styled-components";
import {Colors} from "@/shared/constants";

export const Wrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '90vw' : '1330px'};
  min-height: ${props => props.$isMobile ? '70px' : '150px'};
  height: ${props => props.$isMobile ? '70px' : '150px'};
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue};
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  position: absolute;
  resize: none;
  width: 620px;
  height: 48px;
  font-size: 16px;
  padding: 13px;
  border-radius: 10px;
  background-color: ${Colors.gray};
  &:focus (SearchModal){
    display: block;
  }
  &+img {
    position: relative;
    left: 285px;
    cursor: pointer;
  }
`;

export const SearchModal = styled.div`
  position: absolute;
  top: 200px;
  display: none;
  width: 620px;
  min-height: 300px;
  background-color: ${Colors.white};
`;
