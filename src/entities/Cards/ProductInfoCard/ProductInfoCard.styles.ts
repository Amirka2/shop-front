import {styled} from "styled-components";
import {Link} from "react-router-dom";

import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 200px;
  min-height: 420px;
  
  margin: 10px;
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  & span {
    padding: 2px 0;
  }
  & button {
    margin: 5px 0 0 0;
  }
`;

export const NavLink = styled(Link)`
  color: ${Color.black};
  
  &:hover {
    color: ${Color.blue};
  }
`;
