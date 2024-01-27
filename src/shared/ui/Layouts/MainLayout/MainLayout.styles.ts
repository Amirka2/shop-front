import styled from "styled-components";
import { Color } from "@/shared/constants";
import { mediaQueries } from "@/shared/constants/mediaQueries";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${Color.black};
  background-color: ${Color.white};
  
  ${mediaQueries.gt.Tablet} {
    width: 100%;
  }
`;
