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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
