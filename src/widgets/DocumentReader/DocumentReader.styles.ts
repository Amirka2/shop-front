import {styled} from "styled-components";
import {Editor} from "draft-js";

export const Wrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //background-color: red;
`;

export const WordEditor = styled(Editor)`
  width: 100%;
  background-color: pink;
`;
