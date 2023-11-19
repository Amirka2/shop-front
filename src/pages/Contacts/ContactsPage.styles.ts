import { styled } from "styled-components";
import { MainWrapper } from "@/shared/components";
import { Color } from "@/shared/constants";
import { mediaQueries } from "@/shared/constants/mediaQueries";

export const WrapperAddress = styled(MainWrapper)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 20px, 0px;
`;

export const ContentAddress = styled.div`
  background-color: ${Color.white};
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-right: 32px;
  padding: 30px;
  
  -webkit-box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);
  box-shadow: 0 7px 45px 5px rgba(0,0,0,0.12);

  &:last-child {
    margin-right: 0px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  
  ${mediaQueries.gt.Mobile} {
    font-size: 24px;
  }
`;

export const HeaderAddress = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const TextAddress = styled.p`
  font-size: 20px;
  margin-bottom: 16px;

  ${mediaQueries.gt.Mobile} {
    font-size: 24px;
  }
`;

export const ContainerAdress = styled.div`
  margin-bottom: 32px;  
`;



export const WrapperContact = styled(MainWrapper)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  
  padding: 20px, 0px;
`;

export const HeaderContact = styled.h3`
  font-size: 32px;
  font-weight: 400;
  margin: 16px 0px;
`;

export const ContentContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
`;

export const ContentTextContact = styled.div`
  padding: 16px 32px;
  border-radius: 10px;
  background: ${Color.blue};
`;

export const WrapperLinkContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const LinkContact = styled.a`
  font-size: 20px;
  color: ${Color.white};
  font-family: Inter, sans-serif;

  ${mediaQueries.gt.Mobile} {
    font-size: 24px;
  }
`;

export const ContantIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconContact = styled.div<{
  $src: string;
}>`
  width: 64px;
  height: 64px;
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
 