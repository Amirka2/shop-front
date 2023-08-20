import {styled} from "styled-components";

export const GridWrapper = styled.div<{
    $height: number;
    $width: number;
}>`
  min-height: ${props => props.$height + 'px'};
  width: ${props => props.$width + 'px'};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
`;
