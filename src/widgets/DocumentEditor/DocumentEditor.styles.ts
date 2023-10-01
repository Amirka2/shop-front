import {styled} from "styled-components";
import {Color} from "@/shared/constants";
import {Editor} from "draft-js";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
`;

export const ButtonsSection = styled.div`
  padding: 0 10px;
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  background: ${Color.blue};
  color: ${Color.white};
  font-size: 20px;
  padding: 10px;
  border-radius: 15px;
  
  &:hover {
    cursor: pointer;
    transform: scale(105%);
  }
  
  &:active {
    background-color: ${Color.white};
    outline: 1px solid ${Color.blue};
    color: ${Color.black}
  }
`;

export const WordEditor = styled(Editor)`
  width: 100%;
`;
