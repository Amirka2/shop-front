import {styled} from "styled-components";

import {Color} from "@/shared/constants";
import {Icon} from '../Contacts.styles';


export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h4`
  color: ${Color.white};
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const ContactLink = styled.a`
  color: ${Color.white};
  font-family: Inter, sans-serif;
`;

export const MiniIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;
