import {styled} from "styled-components";
import {Editor} from "draft-js";

import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const EditorWrapper = styled.div`
  width: 100%;
  
  margin: 10px 0 10px;
  padding: 0 10px;
  
  border: 1px solid gray;
  border-radius: 8px;
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
