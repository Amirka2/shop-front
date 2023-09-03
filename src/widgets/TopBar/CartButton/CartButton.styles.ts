import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  width: 156px;
  height: 49px;
  & > img {
    width: 33px;
    height: 33px;
    position: relative;
    bottom: 5px;
    left: 10px;
    z-index: 1;
  }
`;
export const Button = styled.button<{
    value: number;
}>`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border-radius: 30px;
  border: none;
  font-family: Inter, sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Counter = styled.span`
    background-color: ${Color.blue};
    color: ${Color.white};
    width: 33px;
    height: 33px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CounterWrapper = styled.div<{
    value: number;
}>`
  background-color: ${Color.blue};
  color: ${Color.white};
  width: 33px;
  height: 33px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  content: ${props => props.value};
`;
