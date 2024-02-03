import {styled} from "styled-components";
import {Color} from "@/shared/constants";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 156px;
`;

export const SectionButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 46px;
`;

const Button = styled(Link)`
  background-color: ${Color.blue};
  color: ${Color.white};

  &:hover {
    cursor: pointer;
  }
`;

export const SmallButton = styled(Button)`
  font-size: 32px;
  padding: 30px 75px;
  border-radius: 16px;
`;

export const BigButton = styled(Button)`
  text-align: center;
  min-width: 45%;
  font-size: 48px;
  padding: 2rem 0;
  border-radius: 30px;
`;
