import {styled} from "styled-components";

export const Wrapper = styled.div`
  height: 320px;
  width: 200px;
  margin: 5px 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & span {
    padding: 2px 0;
  }
  & button {
    margin: 5px 0 0 0;
  }
`;
