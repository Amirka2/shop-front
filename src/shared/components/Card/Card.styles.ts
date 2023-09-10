import {styled} from "styled-components";
import {Color} from "@/shared/constants";
import {Link} from "react-router-dom";

export const Wrapper = styled.div<{
    width?: string;
    height?: string;
}>`
  width: ${ ({width}) => width };
  height: ${ ({height}) => height };
  -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  background-color: ${Color.white};
  
  &:hover {
    transition-duration: 0.5s;
    -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.3);
    box-shadow: 0 7px 45px 5px rgba(0,0,0,0.3);
  }
`;

export const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;
`;

export const PhotoWrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  
  &:hover h3 {
    transition-duration: 1s;
    color: ${Color.blue};
  }
`;

export const Photo = styled.img`
  width: 100%;
`;
