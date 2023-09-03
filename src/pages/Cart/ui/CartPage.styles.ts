import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div<{
    isMobile?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${props => props.isMobile ? '90vw' : '1330px'};
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

export const Flex = styled.div<{
    isMobile?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  justify-content: ${props => props.isMobile ? 'flex-start' : 'space-between'};
  align-items: center;
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

export const CartInfoMenu = styled.div<{
    isMobile?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.gray};
  padding: 40px;
  border-radius: 20px;
  width: ${props => props.isMobile ? '100%' : '40%'};
  max-width: 444px;
  min-height: 387px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 20px 0;
`;

export const OrderFieldsList = styled.ul`
  width: 100%;
  list-style-type: none;
`;

export const OrderFieldsListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 30px;
  border-radius: 20px;
  padding: 3px;
  margin-bottom: 20px;
`;
