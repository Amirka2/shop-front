import {styled} from "styled-components";
import {Color} from "@/shared/constants";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const SectionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled(Link)`
  background-color: ${Color.blue};
  color: ${Color.white};
`;

export const ExitButton = styled(Button)`
  font-size: 32px;
  padding: 30px 75px;
`;

export const SectionButton = styled(Button)`
  font-size: 48px;
  padding: 50px 135px;
`;

export const CatalogButton = styled.div`
  background-color: ${Color.blue};
  color: ${Color.white};
  font-size: 48px;
  padding: 50px 135px;
`;
