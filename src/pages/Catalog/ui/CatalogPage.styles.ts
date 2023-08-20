import {styled} from "styled-components";
import {MainWrapper} from "@/shared/components";

export const Wrapper = styled(MainWrapper)<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100%' : '1330px'};
  justify-content: ${props => props.$isMobile ? 'flex-start' : 'space-between'};
  align-items: ${props => props.$isMobile ? 'center' : 'flex-start'};
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
`;
