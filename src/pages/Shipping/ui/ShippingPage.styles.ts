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

export const BoldText = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;

  ${mediaQueries.gt.Mobile} {
    font-size: 24px;
  }
`;

export const ContentAddress = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 30px;
  
  ${mediaQueries.gt.Tablet} {
    max-height: 300px;
  }
`;
