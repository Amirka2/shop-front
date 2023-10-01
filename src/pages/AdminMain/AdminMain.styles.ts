import {styled} from "styled-components";
import {Color} from "@/shared/constants";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  min-height: 100vh;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 156px;
`;

export const SectionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 46px;
`;

const Button = styled(Link)`
  background-color: ${Color.blue};
  color: ${Color.white};
`;

export const ExitButton = styled(Button)`
  font-size: 32px;
  padding: 30px 75px;
  border-radius: 16px;
`;

export const SectionButton = styled(Button)`
  font-size: 48px;
  padding: 50px 135px;
  border-radius: 30px;
`;

export const CatalogButton = styled.div`
  background-color: ${Color.blue};
  color: ${Color.white};
  border-radius: 30px;
  width: 490px;
  padding: 50px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &:hover {
    cursor: pointer;  
  }
  
  & span {
    font-size: 48px;
  }
`;

export const CatalogTitle = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
