import { styled } from "styled-components";

import { Color } from "@/shared/constants";
import { mediaQueries } from "@/shared/constants/mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 20px 0;
`;

export const Content = styled.div`
  width: 100%;
  
  padding: 30px;
  
  background-color: ${Color.white};
  -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;

  ${mediaQueries.gt.Mobile} {
    font-size: 24px;
  }
`;

export const BoldText = styled(Text)`
  font-weight: 500;
`;

export const Link = styled.a`
  text-decoration: underline;
`;
