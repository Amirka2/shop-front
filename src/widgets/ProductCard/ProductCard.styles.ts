import {styled} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  padding-bottom: 10px;

  &:hover {
    -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.3);
    box-shadow: 0 7px 45px 5px rgba(0,0,0,0.3);
  }
`;
