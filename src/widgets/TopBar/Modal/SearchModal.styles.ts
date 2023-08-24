import styled from 'styled-components';
import {alpha, InputBase} from "@mui/material";

export const Wrapper = styled.div<{
    open: boolean;
}>`
  display: ${props => props.open ? 'block' : 'none'};
  position: absolute;
  top: 150px;
  left: 50%;
  width: 620px;
  height: 100px;
`;
