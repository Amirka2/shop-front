import {styled} from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
  font-size: 24px;
`;

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Icon = styled.div<{
    $src: string;
}>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-image: url(${props => props.$src});
  background-size: contain;
  & a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;