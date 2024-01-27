import {styled} from 'styled-components';
import {Color} from "@/shared/constants";

export const MainWrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100vw' : '100%'};
  height: 100vh;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${Color.black};
  background-color: ${Color.white};
`;

export const FooterWrapper = styled(MainWrapper)`
  margin: 0;
  gap: 0;
`;
