import {styled} from "styled-components";
import {MainWrapper} from "@/shared/components";
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const Wrapper = styled(MainWrapper)`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  padding: 20px;
    
    ${mediaQueries.gt.Tablet} {
        flex-direction: row;
        justify-content: space-between;
    }
`;
