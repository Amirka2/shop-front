import { styled } from "styled-components";

import {mediaQueries} from "@/shared/constants/mediaQueries";

export const MainWrapper = styled.main`
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  ${mediaQueries.gt.Tablet} {
    justify-content: space-between;
    align-items: flex-start;
  }
`;
