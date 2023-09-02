import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1330px;
  margin-bottom: 40px;
`;

export const CaptionWrapper = styled.div<{
    right?: boolean;
}>`
  display: flex;
  justify-content: ${props => props?.right ? 'flex-end' : 'flex-start'};
  margin: 0 0 40px 0;
  
  & h1 {
    color: ${Color.blue};
    font-family: Inter, sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Link = styled(NavLink)`
  color: ${Color.black};
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ModifyValue = styled.div`
  height: 100%;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Color.blue};
  margin-bottom: 40px;
`;

export const CartInfoMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Color.gray};
  padding: 20px;
  border-radius: 20px;
  width: 40%;
  max-width: 444px;
  height: 387px;
`;

export const CartCaption = styled.h4`
  color: ${Color.blue};
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Summary = styled.div`
  
`;

export const SubmitButton = styled.button`
  background-color: ${Color.blue};
  color: ${Color.white};
  width: 318px;
  height: 60px;
  border-radius: 20px;
  padding: 15px;
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
