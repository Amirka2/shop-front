import { styled } from "styled-components";
import { mediaQueries } from "@/shared/constants/mediaQueries";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  
  ${mediaQueries.gt.Mobile} {
    max-width: 768px;
  }
  
  ${mediaQueries.gt.Tablet} {
    max-width: 1330px;
  }
`;
