import {styled} from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 45%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  & img {
    max-width: 60px;
    max-height: 60px;
    margin-right: 15px;
  }
`;
