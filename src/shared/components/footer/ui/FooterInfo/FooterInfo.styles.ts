import {styled} from "styled-components";

export const Item = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100%' : '45%'};
  height: 80px;
  display: flex;
  justify-content: ${props => props.$isMobile ? 'flex-start' : 'space-between'};
  align-items: center;
  font-size: 18px;
  & img {
    width: 42px;
    max-height: 60px;
    margin-right: 15px;
  }
`;

export const Wrapper = styled.div<{
    $isMobile: boolean;
}>`
  width: ${props => props.$isMobile ? '100%' : '45%'};
  max-width: 600px;
  display: flex;
  justify-content: ${props => props.$isMobile ? 'flex-start' : 'space-between'};
  flex-wrap: wrap;
  margin: 15px 0;
`;


