import {styled} from "styled-components";

import {Color} from "@/shared/constants";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
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

export const Icon = styled.div<{
    $src: string;
}>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-image: url(${props => props.$src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  & a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const MiniIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;