import {styled} from "styled-components";

export const GridWrapper = styled.div<{
    height?: string;
    width?: string;
    maxHeight?: number;
    maxWidth?: number;
}>`
  max-height: ${props => props?.maxHeight + 'px'};
  max-width: ${props => props?.maxWidth + 'px'};
  height: ${props => props?.height};
  width: ${props => props?.width};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
`;
