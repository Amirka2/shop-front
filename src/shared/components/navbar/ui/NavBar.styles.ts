import styled from "styled-components";

import {NavLink} from "react-router-dom";
import {Color} from "@/shared/constants";
import {mediaQueries} from "@/shared/constants/mediaQueries";

const borderRadius = '10px';

export const Wrapper = styled.nav`
  width: 70vw;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Color.gray};
  border-radius: ${borderRadius};
  overflow: hidden;

  ${mediaQueries.gt.Tablet} {
    width: 1330px;
    min-height: 50px;
    height: 50px;
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.black};
  text-decoration: none;
  font-size: 24px;

  &:hover {
    background-color: ${Color.blue};
    color: ${Color.white};
  }
`;
