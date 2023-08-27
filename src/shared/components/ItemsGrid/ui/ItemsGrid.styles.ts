import {styled} from "styled-components";

export const GridWrapper = styled.div<{
    $height: number;
    $width: number;
}>`
  max-height: ${props => props.$height + 'px'};
  max-width: ${props => props.$width + 'px'};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
`;
