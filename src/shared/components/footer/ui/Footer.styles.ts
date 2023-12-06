import {styled} from "styled-components";

import {Color} from '@/shared/constants'

export const Wrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
`;

export const MainWrapper = styled.footer<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100vw' : '100%'};
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
`;

export const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;