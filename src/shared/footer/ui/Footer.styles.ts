import {styled} from "styled-components";
import {Colors} from '@/shared/constants'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MainWrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100vw' : '100%'};
  min-height: 400px;
  height: 630px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.blue};
  color: ${Colors.white};
  font-size: 1.3rem;
  & a {
    color: ${Colors.white};
  }
  & a:hover {
    color: ${Colors.black};
  }
`;


