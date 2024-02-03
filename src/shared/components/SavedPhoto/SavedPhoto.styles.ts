import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledPhoto = styled.img`
  height: 110px;
  width: 110px;
  
  border: 1px solid ${Color.gray};
  border-radius: 8px;
`;

export const Cross = styled.span`
  position: absolute;
  top: 1px;
  right: 0;
  
  width: 25px;
  height: 25px;
  
  cursor: pointer;
  border-radius: 4px;
  
  background: ${Color.gray};
  
  &:hover {
    outline: 1px solid ${Color.black};
  }
`;
