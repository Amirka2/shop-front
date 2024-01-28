import {styled} from "styled-components";

import {Color} from '@/shared/constants'
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

    ${mediaQueries.gt.Tablet} {
       flex-direction: row;
    }
`;

export const MainWrapper = styled.footer`
  width: 100vw;
  padding: 50px 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background-color: ${Color.blue};
  color: ${Color.white};
  font-size: 1.3rem;
  & a {
    color: ${Color.white};
  }
  & a:hover {
    color: ${Color.black};
  }
    
    ${mediaQueries.gt.Tablet} {
        width: 100%;
    }
`;

export const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
