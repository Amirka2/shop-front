import InputMask from "react-input-mask";
import styled from 'styled-components'

import {Color} from "@/shared/constants";

export const StyledInputMask = styled(InputMask)`
    width: 167px;
    background: none;
    outline: none;
    border: none;
    color: ${Color.blue};
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
`;
