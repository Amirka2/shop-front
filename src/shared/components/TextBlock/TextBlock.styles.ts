import {styled} from "styled-components";
import {Color} from "@/shared/constants";
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const Content = styled.div`
  width: 100%;
  
  padding: 30px;
  
  background-color: ${Color.white};
  -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  
  & p {
    margin-bottom: 20px;
    font-size: 18px;

    ${mediaQueries.gt.Mobile} {
      font-size: 24px;
    }
  }
  
  & a {
    text-decoration: underline;
  }
`;
