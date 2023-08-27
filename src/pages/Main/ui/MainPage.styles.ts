import {styled} from "styled-components";
import {MainWrapper} from "@/shared/components";
import { Colors } from "@/shared/constants";

export const Wrapper = styled(MainWrapper)<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '90vw' : '1330px'};
  justify-content: ${props => props.$isMobile ? 'flex-start' : 'space-between'};
  align-items: ${props => props.$isMobile ? 'center' : 'flex-start'};
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  
  & aside {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 30px;
  }
`;

export const ContactsWrapper = styled.div`
  background-color: ${Colors.gray};
  width: 250px;
  height: 300px;
  padding: 28px;
  border-radius: 20px;
  
  & a {
    font-size: 20px;
  }
`;
