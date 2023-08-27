import {styled} from "styled-components";
import {Colors} from '@/shared/constants'

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


