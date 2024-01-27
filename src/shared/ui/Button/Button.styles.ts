import styled, {css} from "styled-components";

import { Color } from "@/shared/constants";
import {Link} from "react-router-dom";

export const Button = styled.button<{
  size: "S" | "M"
}>`
  cursor: pointer;
  
  padding: 10px;
  font-size: 18px;
  
  color: ${Color.white};
  background-color: ${Color.blue};
  
  border: none;
  border-radius: 8px;

  ${({size}) => (size === "M") && css`
    font-size: 26px;

    padding: 20px;

    border-radius: 16px;
  `}
`;

export const LinkButton = styled(Link)<{
  size: "S" | "M"
}>`
  cursor: pointer;
  
  width: 80px;
  
  padding: 10px;
  font-size: 18px;
  
  color: ${Color.white};
  background-color: ${Color.blue};
  
  border: none;
  border-radius: 8px;

  ${({size}) => (size === "M") && css`
    width: 130px;
    
    font-size: 26px;

    padding: 20px;

    border-radius: 16px;
  `}
`;
