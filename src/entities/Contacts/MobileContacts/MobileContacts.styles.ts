import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const MobileContacts = styled.div`
  //background: rgb(255,255,255);
  //background: linear-gradient(180deg, rgba(255,255,255,1) 74%, rgba(220,220,220,1) 100%);
  //width: 100vw;
  border-radius: 16px;
  background-color: ${Color.gray};
  width: 90vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Number = styled.span`
  font-family: Inter, sans-serif;
  color: ${Color.black};
  font-size: 20px;
`;

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
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