import {styled} from "styled-components";
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const Item = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;

  & img {
    width: 50px;
    max-height: 60px;
    margin-right: 15px;
  }

  ${mediaQueries.gt.Tablet} {
    width: 45%;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 15px 0;

  ${mediaQueries.gt.Tablet} {
    width: 45%;
    justify-content: space-between;
  }
`;


