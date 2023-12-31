import { styled } from "styled-components";
import { MainWrapper } from "@/shared/components";
import { Color } from "@/shared/constants";
import { mediaQueries } from "@/shared/constants/mediaQueries";

export const Wrapper = styled(MainWrapper)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 20px 0;
`;

export const Content = styled.div`
  background-color: ${Color.white};
  
  padding: 30px;
  
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
