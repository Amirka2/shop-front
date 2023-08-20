import {styled} from "styled-components";
import {Colors} from "@/shared/constants";

export const Wrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100vw' : '1330px'};
  min-height: ${props => props.$isMobile ? '' : '150px'};
  height: ${props => props.$isMobile ? '' : '150px'};
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue};
  border-radius: 20px;
`;
