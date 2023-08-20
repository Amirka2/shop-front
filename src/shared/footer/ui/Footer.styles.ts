import {styled} from "styled-components";
import {Colors} from '@/shared/constants'

export const Wrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100vw' : '100%'};
  min-height: 630px;
  height: 630px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue};
  color: ${Colors.white};
`;
