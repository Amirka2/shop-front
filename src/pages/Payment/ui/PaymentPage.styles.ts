import { styled } from "styled-components";

import { mediaQueries } from "@/shared/constants/mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 20px 0;
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
